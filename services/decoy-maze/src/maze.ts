// maze.ts — a bot gets stuck in a fake pagination loop:
// page 1 of 9,999... every "next" is another door to nowhere,
// while the intruder-log learns its fingerprint.

export function nextMazePage(page: number): { page: number; totalPages: number; data: unknown[] } {
  // TODO: generate plausible fake rows; totalPages always just out of reach
  return { page: page + 1, totalPages: 9999, data: [] };
}
