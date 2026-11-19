// blocklist.ts — a Redis set of revoked subs. That's all it is.
// We don't need to know WHO a sub is to block them.

const revoked = new Set<string>(); // TODO: back with Redis (infra/terraform/redis.tf)

export async function addToBlocklist(sub: string): Promise<void> {
  revoked.add(sub);
}

export async function isBlocked(sub: string): Promise<boolean> {
  return revoked.has(sub);
}
