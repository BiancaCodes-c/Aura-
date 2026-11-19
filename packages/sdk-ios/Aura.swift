// Aura.swift — Aura for iOS. Opens the verifier flow; returns claims only.

import Foundation

public struct AuraResult {
    public let isHuman: Bool
    public let over13: Bool
    public let over18: Bool
    public let region: String // "US" | "EU" | "OTHER"
}

public class Aura {
    public init(apiKey: String) {}
    // TODO: present verifier, exchange token, return AuraResult
}
