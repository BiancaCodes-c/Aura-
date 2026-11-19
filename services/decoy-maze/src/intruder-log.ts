// Aura — idlayer

// intruder-log.ts — every maze hit is evidence. Log it, learn from it.

export interface IntruderEvent {
  at: string;
  source: string;
  path: string;
  note?: string;
}

export function logIntruder(event: IntruderEvent): void {
  // TODO: append to the intruder log; feed patterns to the intelligence layer
}
