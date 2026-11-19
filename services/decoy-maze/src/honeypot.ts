// Aura — idlayer

// honeypot.ts — fake endpoints for bots to hit.
// Anything that touches these is, by definition, not a real client.
// Decoys look valuable and hold nothing real.

export function registerHoneypots(): string[] {
  // TODO: mount convincing fake routes (e.g. /admin, /internal/identities)
  return [];
}
