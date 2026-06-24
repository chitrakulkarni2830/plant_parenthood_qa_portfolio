print("🌿 Welcome to Plant Parenthood 🌿")
print()

plant_database = [

    {
        "name": "Monstera",
        "category": "Indoor Plants",
        "sunlight": "Indirect Light"
    },

    {
        "name": "Aloe Vera",
        "category": "Succulents",
        "sunlight": "Direct Sun"
    },

    {
        "name": "Snake Plant",
        "category": "Indoor Plants",
        "sunlight": "Low Light"
    },

    {
        "name": "Tomato",
        "category": "Fruits",
        "sunlight": "Direct Sun"
    },

    {
        "name": "Rose",
        "category": "Flowering Plants",
        "sunlight": "Direct Sun"
    },

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
    },

    {
        "name": "Marigold",
        "category": "Flowering Plants",
        "sunlight": "Direct Sun"
    },

    {
        "name": "Curry Leaves",
        "category": "Herbs",
        "sunlight": "Direct Sun"
    },

    {
        "name": "Chili",
        "category": "Vegetables",
        "sunlight": "Direct Sun"
    },

    {
        "name": "Jade Plant",
        "category": "Succulents",
        "sunlight": "Direct Sun"
    },

    {
        "name": "Lucky Bamboo",
        "category": "Indoor Plants",
        "sunlight": "Indirect Light"
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



def plant_count():

    plant_count = 0

    for plant in plant_database:

        plant_count = plant_count + 1

    print(f"🌱 Total Plants Available: {plant_count}")


plant_count()


user_input = "ROSE"


def search_plant():

    if user_input.strip() == "":

        print("⚠️ Please enter a search value")

        return None

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

    if user_input.strip() != "":

        print("🥺🌱 Oops! Plant Not Found")





user_input = "Flowering Plants"


def search_by_category():

    if user_input.strip() == "":

        print("⚠️ Please enter a search value")

        return

    category_found = False

    print("🌸 Matching Plants Found 🌸")
    print()

    normalized_category = user_input.lower()

    for plant in plant_database:

        if (
            plant["category"].lower() == normalized_category
            or
            plant["category"].lower() == normalized_category + "s"
        ):

            print("🌸 " + plant["name"])

            category_found = True

    if not category_found:

        print("🥺🌱 Oops! Plant Not Found")


search_by_category()




user_input = "Direct Sun"


def search_by_sunlight():

    if user_input.strip() == "":

        print("⚠️ Please enter a search value")

        return

    sunlight_found = False

    print("☀️ Matching Plants Found ☀️")
    print()

    for plant in plant_database:

        if plant["sunlight"].lower() == user_input.lower():

            print("🌱 " + plant["name"])

            sunlight_found = True

    if not sunlight_found:

        print("🥺🌱 Oops! Plant Not Found")


search_by_sunlight()



partial_input = "Ros"


def partial_search():

    if partial_input.strip() == "":

        print("⚠️ Please enter a search value")

        return

    plant_found = False

    print("🌿 Matching Plants Found 🌿")
    print()

    for plant in plant_database:

        if partial_input.lower() in plant["name"].lower():

            print("🌱 " + plant["name"])

            plant_found = True

    if not plant_found:

        print("🥺🌱 Oops! Plant Not Found")


partial_search()