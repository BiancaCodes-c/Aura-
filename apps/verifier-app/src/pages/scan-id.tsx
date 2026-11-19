// scan-id.tsx — ID scan + selfie liveness.
// Raw ID and selfie go straight to identity-core and are forgotten within 60s.
import { IDScanner } from "../components/IDScanner";
import { LivenessCheck } from "../components/LivenessCheck";

export default function ScanId() {
  return (
    <main>
      <h1>Scan your ID</h1>
      <IDScanner />
      <LivenessCheck />
    </main>
  );
}
