"""Aura Python SDK — pip install aura-sdk.

    from aura import Aura
    aura = Aura(api_key="...")
    result = aura.check(token)   # -> {isHuman, over13, over18, region}
"""


class Aura:
    def __init__(self, api_key: str):
        self.api_key = api_key

    def check(self, token: str) -> dict:
        # TODO: POST /v1/check
        raise NotImplementedError

    def check_code(self, code: str) -> dict:
        # TODO: POST /v1/check-code
        raise NotImplementedError
