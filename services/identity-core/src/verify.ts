// verify.ts — ID + liveness -> true/false (plus age band + coarse region).
// THE ONLY module that ever sees a real identity document, and it keeps nothing.

export interface VerificationResult {
  verifiedHuman: boolean;
  over13: boolean;
  over18: boolean;
  region: "US" | "EU" | "OTHER"; // coarse only — never a city or address
}

export async function verifyIdentity(
  idDocument: unknown, // held in memory only; wiped by forget.ts after mint
  selfie: unknown
): Promise<VerificationResult> {
  // TODO: document authenticity checks
  // TODO: selfie liveness + match against the document portrait
  throw new Error("not implemented");
}
