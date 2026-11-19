// Aura — idlayer

// check-human.ts — returns ONLY: verified human? true / false.

export async function checkHuman(token: string): Promise<{ verifiedHuman: boolean }> {
  // TODO: verify token signature + revocation, then read the claim
  throw new Error("not implemented");
}
