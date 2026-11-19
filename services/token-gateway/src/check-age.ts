// Aura — idlayer

// check-age.ts — returns ONLY booleans. No birthdate ever leaves identity-core.

export interface AgeCheck {
  over13: boolean;
  over18: boolean;
}

export async function checkAge(token: string): Promise<AgeCheck> {
  // TODO: verify token signature + revocation, then read the claims
  throw new Error("not implemented");
}
