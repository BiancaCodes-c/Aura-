// Aura — idlayer

// check-region.ts — returns ONLY a coarse region: "US" / "EU" / etc. No city, ever.

export async function checkRegion(token: string): Promise<{ region: string }> {
  // TODO: verify token signature + revocation, then read the claim
  throw new Error("not implemented");
}
