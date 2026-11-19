// index.ts — the Aura class. npm i @aura/sdk
// check(), checkCode(), button() — three doors, one promise: proof, not data.

export interface AuraResult {
  isHuman: boolean;
  over13: boolean;
  over18: boolean;
  region: "US" | "EU" | "OTHER";
}

export class Aura {
  constructor(private apiKey: string) {}

  async check(token: string): Promise<AuraResult> {
    // TODO: POST /v1/check
    throw new Error("not implemented");
  }

  async checkCode(code: string): Promise<AuraResult> {
    // TODO: POST /v1/check-code
    throw new Error("not implemented");
  }

  button(): HTMLElement {
    // TODO: render the "Verify with Aura" button
    throw new Error("not implemented");
  }
}
