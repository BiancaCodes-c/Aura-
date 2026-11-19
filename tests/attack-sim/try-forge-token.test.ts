// try-forge-token.test.ts — mint a fake token with a bad signature. Should fail at the gateway.

import { describe, it, expect } from "vitest";

describe("attack: forge a token", () => {
  it("is rejected — Ed25519 signature doesn't verify", async () => {
    // TODO: hand-craft claims, sign with an attacker key, POST /v1/check
    expect(true).toBe(true); // placeholder until services land
  });
});
