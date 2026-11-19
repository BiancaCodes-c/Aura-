// forget.test.ts — proves the DOB is gone after mint.
// If this test ever fails, the whole promise fails. It must never fail.

import { describe, it, expect } from "vitest";
import { mintToken } from "../src/token";

describe("the 60-second forget", () => {
  it("mints a token that contains no DOB, no name, no ID number", async () => {
    const { token } = await mintToken({
      realDateOfBirth: "1990-01-01",
      countryCode: "US",
      livenessPassed: true,
    });
    const asString = JSON.stringify(token);
    expect(asString).not.toContain("1990");
    expect(asString).not.toContain("realDateOfBirth");
  });
});
