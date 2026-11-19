// Aura — idlayer

// token.ts — mints the Aura token, then FORGETS the ID.
// The token carries claims (isHuman, over13, over18, region) and nothing else:
// no name, no document number, no birthdate, no photo.

import type { VerificationResult } from "./verify";

export interface AuraTokenClaims {
  sub: string; // opaque random subject id — not derived from the identity
  isHuman: boolean;
  over13: boolean;
  over18: boolean;
  region: string;
  iat: number;
  exp: number;
}

export async function mintToken(result: VerificationResult): Promise<string> {
  // TODO: build claims from the verification result
  // TODO: sign with the current signing key (see keys.ts)
  // TODO: trigger immediate deletion of all raw ID material (60s policy)
  throw new Error("not implemented");
}
