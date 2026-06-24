print("🌿 Welcome to Plant Parenthood 🌿")
print()



plant_database = [

    {"name": "Monstera",
     "category": "Indoor Plants",
     "sunlight": "Indirect Light"},

     {"name": "Aloe Vera",
      "category": "Succulents",
      "sunlight": "Direct Sun"},

      {"name": "Snake Plant",
      "category": "Indoor Plants",
      "sunlight": "Low Light"},

      {"name": "Tomato",
      "category": "Fruits",
      "sunlight": "Direct Sun"},

      {"name": "Rose",
      "category": "Flowering Plants",
      "sunlight": "Direct Sun"},

      {
    "name": "Money Plant",
    "category": "Indoor Plants",
    "sunlight": "Indirect Light"
      },

      {
    "name": "Tulsi",
    "category": "Herbs",
    "sunlight": "Direct Sun"
      },

      {
    "name": "Mint",
    "category": "Herbs",
    "sunlight": "Direct Sun"
      },

      {
    "name": "Jasmine",
    "category": "Flowering Plants",
    "sunlight": "Direct Sun"
      },

      {
    "name": "Hibiscus",
    "category": "Flowering Plants",
    "sunlight": "Direct Sun"
      }
]


def generate_care_recommendations():
    
    for plant in plant_database:
        current_plant = plant["name"]
        light = plant["sunlight"]

        if light == "Direct Sun":
            print(current_plant + ": Requires full direct sunlight.")
        elif light == "Indirect Light":
            print(current_plant + ": Thrives in bright indirect light.")
        else:
            print(current_plant + ": Tolerates low-light conditions.")


user_input = "ROSE"

def search_plant():
    for plant in plant_database:
        if plant["name"].lower() == user_input.lower():
            return plant

    return None


result = search_plant()

if result:
    print("🎉🌱 YAY! Plant Found! 🌱🎉")
    print(f"🌸 Name: {result['name']}")
    print(f"🪴 Category: {result['category']}")
    print(f"☀️ Sunlight: {result['sunlight']}")
else:
    print("🥺🌱 Oops! Plant Not Found")