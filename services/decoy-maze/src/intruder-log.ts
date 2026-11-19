// intruder-log.ts — logs IP, fingerprint, and what they tried.
// Feeds the dashboard's decoy-logs view and ban.ts.

export interface IntruderEvent {
  at: string;
  ip: string;
  fingerprint: string;
  path: string;
  tried: string;
}

export function logIntruder(event: IntruderEvent): void {
  // TODO: append to intruder log; count hits toward the 5-hit auto-ban
}
