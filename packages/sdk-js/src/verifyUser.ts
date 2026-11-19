// Aura — idlayer

// verifyUser.ts — the ONE function platforms drop in.
// verifyUser(token) -> { isHuman, over13 }

export interface VerifyUserResult {
  isHuman: boolean;
  over13: boolean;
}

export async function verifyUser(token: string): Promise<VerifyUserResult> {
  // TODO: call the token-gateway; surface only the boolean claims
  throw new Error("not implemented");
}
