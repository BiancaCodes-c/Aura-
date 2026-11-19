// types.ts — shared SDK types. A token's claims are the ONLY shape that exists.

export type AuraRegion = "US" | "EU" | "OTHER";

export interface AuraClaims {
  sub: string; // random, unlinkable
  isHuman: true;
  over13: boolean;
  over18: boolean;
  region: AuraRegion;
  iat: number;
  exp: number;
  nonce: string;
}
