// generate-code.ts — a 6-digit code, expires in 60 seconds.
// For games / Discord / TV: no browser, no redirect — just a code.

export async function generateCode(sub: string): Promise<{ code: string; expiresInSeconds: 60 }> {
  // TODO: random 6-digit code bound to sub, stored with 60s TTL
  throw new Error("not implemented");
}
