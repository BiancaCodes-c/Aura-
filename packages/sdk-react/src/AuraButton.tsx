// AuraButton.tsx — <AuraButton onVerified={...} />
// Drop it in; the user verifies once; you get proof, not data.

export function AuraButton(props: { onVerified: (result: unknown) => void }) {
  // TODO: open the verifier flow; call onVerified with the AuraResult
  return <button>Verify with Aura</button>;
}
