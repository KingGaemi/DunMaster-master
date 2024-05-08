import requests

equipment_type = {
    'WEAPON': 0,
    'TITLE': 1,
    'JACKET': 2,
    'SHOULDER': 3,
    'PANTS': 4,
    'SHOES': 5,
    'WAIST': 6,
    'AMULET': 7,
    'WRIST': 8,
    'RING': 9,
    'SUPPORT': 10,
    'MAGIC_STONE': 11,
    'EARRING': 12
}

class EquipmentItem:
    def __init__(self, type=-1, name='', customed=-1, amplificationName='', reinforce=-1, enchant=[], refine=-1, fusioned=-1, fusionId='', options=[]):
        self.type = type # 장비 타입
        self.name = name # 장비 이름
        self.customed = customed # 커스텀 옵션 여부
        self.amplificationName = amplificationName # 증폭 종류
        self.reinforce = reinforce # 강화 수치
        self.enchant = enchant # 마부
        self.refine = refine # 제련 수치
        self.fusioned = fusioned # 융합 여부
        self.fusionId = fusionId # 융합 아이템 ID
        self.options = options # 아이템 옵션


async def fetch_equipment_info(characterId: str, serverId: str, API_KEY: str):
    url = f"https://api.neople.co.kr/df/servers/{serverId}/characters/{characterId}/equip/equipment?apikey={API_KEY}"
    response = requests.get(url)
    data = response.json()

    return data


async def fetch_avatar_info(characterId: str, serverId: str, API_KEY: str):
    url = f"https://api.neople.co.kr/df/servers/{serverId}/characters/{characterId}/equip/avatar?apikey={API_KEY}"
    response = requests.get(url)
    data = response.json()

    return data


async def fetch_status_info(characterId: str, serverId: str, API_KEY: str):
    url = f"https://api.neople.co.kr/df/servers/{serverId}/characters/{characterId}/status?apikey={API_KEY}"
    response = requests.get(url)
    data = response.json()

    return data
async def fetch_creature_info(characterId: str, serverId: str, API_KEY: str):
    url = f"https://api.neople.co.kr/df/servers/{serverId}/characters/{characterId}/equip/creature?apikey={API_KEY}"
    response = requests.get(url)
    data = response.json()

    return data
async def fetch_flag_info(characterId: str, serverId: str, API_KEY: str):
    url = f"https://api.neople.co.kr/df/servers/{serverId}/characters/{characterId}/equip/flag?apikey={API_KEY}"
    response = requests.get(url)
    data = response.json()

    return data

async def fetch_talisman_info(characterId: str, serverId: str, API_KEY: str):
    url = f"https://api.neople.co.kr/df/servers/{serverId}/characters/{characterId}/equip/talisman?apikey={API_KEY}"
    response = requests.get(url)
    data = response.json()

    return data

async def fetch_equipment_trait_info(characterId: str, serverId: str, API_KEY: str):
    url = f"https://api.neople.co.kr/df/servers/{serverId}/characters/{characterId}/equip/equipment-trait?apikey={API_KEY}"
    response = requests.get(url)
    data = response.json()

    return data 


def printOptions(options):
    for i, option in enumerate(options):
        print(f"{i+1}옵션\n\n{option['explain']}\n")


# items = fetch_equipment_info("95641d222fed92c8b80813904ccde5d7", "cain", "PZ2F29nXBUBg0LlJPTtRnw76C4r43x82")
# printOptions(items[3].options)