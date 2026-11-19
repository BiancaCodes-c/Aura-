// check-aura.ts — POST /v1/check -> yes/no only.
// The app sends a token; Aura answers claims. Nothing else crosses this line.

export interface AuraResult {
  valid: boolean;
  isHuman?: boolean;
  over13?: boolean;
  over18?: boolean;
  region?: "US" | "EU" | "OTHER";
}

export async function checkAura(token: string): Promise<AuraResult> {
  // TODO: verify signature (keys), check blocklist, check expiry + nonce
  throw new Error("not implemented");
}
