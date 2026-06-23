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
      "sunlight": "Direct Sun"}
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


generate_care_recommendations()