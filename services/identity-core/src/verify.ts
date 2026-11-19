export async function verifyIdentity(input:{idImage:string; selfie:string}) {
  // In production: call third-party IDV provider, liveness provider.
  // Never store idImage / selfie. Pass through, get boolean, forget.
  const livenessPassed = input.selfie.length>0;
  const idValid = input.idImage.length>0;
  return { idValid, livenessPassed, verified: idValid && livenessPassed };
}
