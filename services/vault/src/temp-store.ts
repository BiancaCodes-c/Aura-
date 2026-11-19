// temp-store.ts — Redis with TTL 60s, encrypted at rest.
// This is the ONLY place ID material may pause, and it is already dying:
// every key is written with a 60-second TTL. See policies/retention.md.

export async function putTemp(key: string, encryptedPayload: string): Promise<void> {
  // TODO: SET key payload EX 60 (encryption at rest via Redis + envelope key)
  throw new Error("not implemented");
}

export async function dropTemp(key: string): Promise<void> {
  // TODO: DEL key — called at mint, long before the TTL would fire
  throw new Error("not implemented");
}
