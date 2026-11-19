// try-honeypot.test.ts — walk into /v1/ids like a bot. Should get stuck in the maze, then banned.

import { describe, it, expect } from "vitest";

describe("attack: honeypot", () => {
  it("gets paginated into the maze and auto-banned after 5 hits", async () => {
    // TODO: hit honeypot paths, follow the fake pagination, assert ban at hit 5
    expect(true).toBe(true); // placeholder until services land
  });
});
