// audit-log.ts — logs that "a check happened". NO user data: no sub, no token, no IP-derived identity.
// Counts and outcomes only — the dashboard's stats feed from here.

export interface AuditEvent {
  at: string;
  clientName: string;
  outcome: "valid" | "expired" | "revoked" | "forged" | "rate_limited";
}

export function logCheck(event: AuditEvent): void {
  // TODO: append to audit stream
}
