// Aura — idlayer

// rate-limit.ts — slow the maze-walkers down.

export interface RateLimitDecision {
  allowed: boolean;
  retryAfterSeconds?: number;
}

export function rateLimit(key: string): RateLimitDecision {
  // TODO: token-bucket per source, stricter inside the maze
  throw new Error("not implemented");
}
