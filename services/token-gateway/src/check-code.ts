// check-code.ts — POST /v1/check-code -> a 6-digit code becomes an AuraResult.
// For surfaces with no browser: games, Discord, TV. Codes burn on use (code-service).

import type { AuraResult } from "./check-aura";

export async function checkCode(code: string): Promise<AuraResult> {
  // TODO: redeem via code-service; return claims only
  throw new Error("not implemented");
}
