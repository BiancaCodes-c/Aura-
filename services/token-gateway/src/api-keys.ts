// api-keys.ts — who is calling: Instagram, a game, a TV app.
// Keys identify the CALLER (the platform), never the user.

export interface ApiClient {
  apiKey: string;
  clientName: string; // e.g. "instagram", "some-game"
  tier: "standard" | "partner";
}

export async function clientForKey(apiKey: string): Promise<ApiClient | null> {
  // TODO: key lookup
  throw new Error("not implemented");
}
