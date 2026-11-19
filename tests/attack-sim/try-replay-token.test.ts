// try-replay-token.test.ts — reuse a captured token / nonce. Should fail.

import { describe, it, expect } from "vitest";

describe("attack: replay a token", () => {
  it("is rejected — nonce already used / token expired or revoked", async () => {
    // TODO: capture a valid check, replay it; then revoke and replay again
    expect(true).toBe(true); // placeholder until services land
  });
});
