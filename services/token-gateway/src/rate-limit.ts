// rate-limit.ts — 100 req/min per API key. The bouncer counts heads.

export function rateLimit(apiKey: string): { allowed: boolean; retryAfterSeconds?: number } {
  // TODO: sliding window per API key, 100/min
  throw new Error("not implemented");
}
