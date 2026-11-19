// AuraClient.cs — Aura for games (Unity). Uses the code-service flow:
// the player gets a 6-digit code in the verifier, types it in-game, it burns.

using System.Threading.Tasks;

public class AuraClient
{
    private readonly string apiKey;
    public AuraClient(string apiKey) { this.apiKey = apiKey; }

    public async Task<bool> CheckCode(string code)
    {
        // TODO: POST /v1/check-code; return claims
        await Task.CompletedTask;
        throw new System.NotImplementedException();
    }
}
