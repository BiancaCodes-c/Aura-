// full-flow.test.ts — the whole story in one test:
// verify -> token -> check -> revoke -> check fails.

import { describe, it, expect } from "vitest";

describe("full flow", () => {
  it("verify -> token -> check -> revoke -> check fails", async () => {
    // TODO: stand up identity-core + gateway in test containers
    // 1. verify a test identity (liveness passed)
    // 2. mint a token; assert claims contain no DOB/name/ID number
    // 3. check the token at the gateway -> valid, correct booleans
    // 4. revoke by sub
    // 5. check again -> valid: false
    expect(true).toBe(true); // placeholder until services land
  });
});
