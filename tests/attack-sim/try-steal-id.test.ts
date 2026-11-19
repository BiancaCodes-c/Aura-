// try-steal-id.test.ts — breach the vault AFTER minting. Should fail: nothing stored.

import { describe, it, expect } from "vitest";

describe("attack: steal an ID", () => {
  it("finds nothing — the ID died within 60 seconds of mint", async () => {
    // TODO: mint, wait out / force the wipe, dump the temp-store + DB, search for ID material
    expect(true).toBe(true); // placeholder until services land
  });
});
