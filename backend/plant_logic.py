plant_names = [
    "Monstera",
    "Aloe Vera",
    "Snake Plant",
    "Tomato",
    "Rose"
]

plant_categories = [
    "Indoor Plants",
    "Succulents",
    "Indoor Plants",
    "Fruits",
    "Flowering Plants"
]

sunlight_requirements = [
    "Indirect Light",
    "Direct Sun",
    "Low Light",
    "Direct Sun",
    "Direct Sun"
]

for plant in plant_names:
    print(plant)



if light == "Direct Sun":
    print(current_plant + ": Requires full direct sunlight.")

elif light == "Indirect Light":
    print(current_plant + ": Thrives in bright indirect light.")

else:
    print(current_plant + ": Tolerates low-light conditions.")