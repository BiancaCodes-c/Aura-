// index.ts — identity-core entrypoint. THE VAULT: 1 pod, no internet.
// Listens ONLY on ClusterIP:4000 inside the cluster. Nothing public reaches here.

const PORT = 4000; // cluster-internal only — see infra/k8s/services/identity-core-svc.yaml

export function start() {
  // TODO: bind internal listener; routes: verify -> mint, revoke
  console.log(`identity-core listening on ClusterIP:${PORT}`);
}
