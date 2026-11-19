// ban.ts — auto-ban after 5 honeypot hits. No human review needed:
// real clients never touch the maze at all.

export const BAN_THRESHOLD = 5;

export async function recordHit(fingerprint: string): Promise<{ banned: boolean; hits: number }> {
  // TODO: increment per-fingerprint counter; ban at threshold
  throw new Error("not implemented");
}
