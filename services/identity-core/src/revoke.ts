// revoke.ts — kill a token via the blocklist. No identity needed, none kept.
// The blocklist itself lives in blocklist.ts (Redis set of revoked subs).

import { addToBlocklist, isBlocked } from "./blocklist";

export async function revokeToken(sub: string): Promise<void> {
  await addToBlocklist(sub);
}

export async function isRevoked(sub: string): Promise<boolean> {
  return isBlocked(sub);
}
