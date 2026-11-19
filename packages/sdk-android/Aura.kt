// Aura.kt — Aura for Android. Opens the verifier flow; returns claims only.

package aura

data class AuraResult(
    val isHuman: Boolean,
    val over13: Boolean,
    val over18: Boolean,
    val region: String // "US" | "EU" | "OTHER"
)

class Aura(private val apiKey: String) {
    // TODO: present verifier, exchange token, return AuraResult
}
