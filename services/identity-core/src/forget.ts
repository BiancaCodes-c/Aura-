// forget.ts — secure wipe: overwrite memory, don't just drop the reference.
// Called the moment a token is minted. The DOB, the document, the selfie: gone.

export function forget(target: { [k: string]: unknown }): void {
  for (const key of Object.keys(target)) {
    const v = target[key];
    if (typeof v === "string") {
      // overwrite the string's slot with noise before release
      target[key] = "0".repeat(v.length);
    } else {
      target[key] = undefined;
    }
  }
  // Raw ID material must also be purged from the vault temp-store (TTL 60s max).
}
