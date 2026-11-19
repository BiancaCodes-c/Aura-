import requests
class Aura:
    def __init__(self, api_key): self.api_key=api_key
    def check(self, token):
        r=requests.post("https://api.aura.social/v1/check", headers={"Authorization": f"Bearer {self.api_key}"}, json={"auraToken": token})
        return r.json()
