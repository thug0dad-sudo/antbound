export class FixedRateScheduler {
  constructor({defaultBudgetMs = 3.5, maxCatchUp = 2} = {}) {
    this.defaultBudgetMs = defaultBudgetMs;
    this.maxCatchUp = maxCatchUp;
    this.systems = new Map();
  }

  register(name, hz, {budgetMs = this.defaultBudgetMs, optional = true} = {}) {
    const system = {
      name,
      hz,
      interval: hz > 0 ? 1 / hz : 0,
      accumulator: 0,
      budgetMs,
      optional,
      enabled: true,
      calls: 0,
      skipped: 0,
      errors: 0,
      lastMs: 0,
      averageMs: 0,
      maxMs: 0,
      overBudget: 0,
    };
    this.systems.set(name, system);
    return system;
  }

  run(name, frameDt, callback) {
    const system = this.systems.get(name);
    if (!system || !system.enabled) return false;
    system.accumulator += frameDt;
    if (system.interval && system.accumulator + 1e-9 < system.interval) {
      system.skipped++;
      return false;
    }

    const elapsed = system.interval
      ? Math.min(system.accumulator, system.interval * this.maxCatchUp)
      : frameDt;
    system.accumulator = system.interval ? Math.max(0, system.accumulator - elapsed) : 0;

    const started = performance.now();
    try {
      callback(elapsed);
    } catch (error) {
      system.errors++;
      if (system.optional && system.errors >= 3) system.enabled = false;
      throw error;
    } finally {
      const duration = performance.now() - started;
      system.lastMs = duration;
      system.calls++;
      system.averageMs += (duration - system.averageMs) / Math.min(system.calls, 180);
      system.maxMs = Math.max(system.maxMs, duration);
      if (duration > system.budgetMs) system.overBudget++;
    }
    return true;
  }

  metrics() {
    return [...this.systems.values()].map(system => ({
      name: system.name,
      hz: system.hz,
      enabled: system.enabled,
      calls: system.calls,
      skipped: system.skipped,
      errors: system.errors,
      lastMs: Number(system.lastMs.toFixed(3)),
      averageMs: Number(system.averageMs.toFixed(3)),
      maxMs: Number(system.maxMs.toFixed(3)),
      budgetMs: system.budgetMs,
      overBudget: system.overBudget,
    }));
  }
}

export class ChunkActivity {
  constructor({cellSize = 20, activeRadius = 2, warmRadius = 3} = {}) {
    this.cellSize = cellSize;
    this.activeRadius = activeRadius;
    this.warmRadius = warmRadius;
    this.centerX = 0;
    this.centerZ = 0;
    this.centerCellX = 0;
    this.centerCellZ = 0;
  }

  update(x, z) {
    this.centerX = x;
    this.centerZ = z;
    this.centerCellX = Math.floor(x / this.cellSize);
    this.centerCellZ = Math.floor(z / this.cellSize);
  }

  cell(x, z) {
    return [Math.floor(x / this.cellSize), Math.floor(z / this.cellSize)];
  }

  distanceInCells(x, z) {
    const [cx, cz] = this.cell(x, z);
    return Math.max(Math.abs(cx - this.centerCellX), Math.abs(cz - this.centerCellZ));
  }

  isActive(x, z, extraCells = 0) {
    return this.distanceInCells(x, z) <= this.activeRadius + extraCells;
  }

  isWarm(x, z) {
    return this.distanceInCells(x, z) <= this.warmRadius;
  }

  snapshot() {
    return {
      cellSize: this.cellSize,
      activeRadius: this.activeRadius,
      warmRadius: this.warmRadius,
      centerCell: [this.centerCellX, this.centerCellZ],
    };
  }
}
