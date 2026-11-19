// Aura — idlayer

// verify.ts — ID + selfie liveness check.
// THE ONLY module in the system that ever sees a real identity document.
// Its output is a verification result, never a stored record.

export interface VerificationResult {
  verifiedHuman: boolean;
  over13: boolean;
  over18: boolean;
  region: string; // coarse only: "US", "EU", ... — never a city or address
}

export async function verifyIdentity(
  idDocument: unknown, // held in memory only; never written to disk or logs
  selfie: unknown
): Promise<VerificationResult> {
  // TODO: document authenticity checks
  // TODO: selfie liveness + match against the document portrait
  // TODO: derive age band + coarse region, then release the inputs
  throw new Error("not implemented");
}
