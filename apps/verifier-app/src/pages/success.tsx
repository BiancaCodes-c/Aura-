// success.tsx — shows your Aura glow: your token, on your AuraCard.
import { AuraCard } from "../components/AuraCard";

export default function Success() {
  return (
    <main>
      <h1>You're verified</h1>
      <AuraCard />
      <p>This card is proof, not identity. Aura already forgot your ID.</p>
    </main>
  );
}
