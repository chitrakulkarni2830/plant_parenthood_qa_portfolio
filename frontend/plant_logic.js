console.log("🌿 Welcome to Plant Parenthood 🌿");
console.log("");

const plantDatabase = [

    {
        name: "Monstera",
        category: "Indoor Plants",
        sunlight: "Indirect Light"
    },

    {
        name: "Aloe Vera",
        category: "Succulents",
        sunlight: "Direct Sun"
    },

    {
        name: "Snake Plant",
        category: "Indoor Plants",
        sunlight: "Low Light"
    },

    {
        name: "Tomato",
        category: "Fruits",
        sunlight: "Direct Sun"
    },

    {
        name: "Rose",
        category: "Flowering Plants",
        sunlight: "Direct Sun"
    },

    {
        name: "Money Plant",
        category: "Indoor Plants",
        sunlight: "Indirect Light"
    },

    {
        name: "Tulsi",
        category: "Herbs",
        sunlight: "Direct Sun"
    },

    {
        name: "Mint",
        category: "Herbs",
        sunlight: "Direct Sun"
    },

    {
        name: "Jasmine",
        category: "Flowering Plants",
        sunlight: "Direct Sun"
    },

    {
        name: "Hibiscus",
        category: "Flowering Plants",
        sunlight: "Direct Sun"
    },

    {
        name: "Marigold",
        category: "Flowering Plants",
        sunlight: "Direct Sun"
    },

    {
        name: "Curry Leaves",
        category: "Herbs",
        sunlight: "Direct Sun"
    },

    {
        name: "Chili",
        category: "Vegetables",
        sunlight: "Direct Sun"
    },

    {
        name: "Jade Plant",
        category: "Succulents",
        sunlight: "Direct Sun"
    },

    {
        name: "Lucky Bamboo",
        category: "Indoor Plants",
        sunlight: "Indirect Light"
    }
];

function generateCareRecommendations() {

    for (const plant of plantDatabase) {

        const currentPlant = plant.name;
        const light = plant.sunlight;

        if (light === "Direct Sun") {

            console.log(currentPlant + ": Requires full direct sunlight.");

        } else if (light === "Indirect Light") {

            console.log(currentPlant + ": Thrives in bright indirect light.");

        } else {

            console.log(currentPlant + ": Tolerates low-light conditions.");
        }
    }
};


function plantCount() {

    let plantCount = 0;

    for (const plant of plantDatabase) {

        plantCount = plantCount + 1;
    }

    console.log(`🌱 Total Plants Available: ${plantCount}`);
}

plantCount();



const plantNameInput = "rose";

function searchPlant() {

    if (plantNameInput.trim() === "") {

        console.log("⚠️ Please enter a search value");

        return null;
    }

    for (const plant of plantDatabase) {

        if (plant.name.toLowerCase() === plantNameInput.toLowerCase()) {

            return plant;
        }
    }

    return null;
}

const result = searchPlant();

if (result) {

    console.log("🎉🌱 YAY! Plant Found! 🌱🎉");
    console.log(`🌸 Name: ${result.name}`);
    console.log(`🪴 Category: ${result.category}`);
    console.log(`☀️ Sunlight: ${result.sunlight}`);

} else {

    if (plantNameInput.trim() !== "") {

        console.log("🥺🌱 Oops! Plant Not Found");
    }
}


const categoryInput = "Flowering Plant";

function searchByCategory() {

    if (categoryInput.trim() === "") {

        console.log("⚠️ Please enter a search value");

        return;
    }

    let categoryFound = false;

    console.log("🌸 Matching Plants Found 🌸");
    console.log("");

    const normalizedCategory = categoryInput.toLowerCase();

    for (const plant of plantDatabase) {

        if (
            plant.category.toLowerCase() === normalizedCategory ||
            plant.category.toLowerCase() === normalizedCategory + "s"
        ) {

            console.log("🌸 " + plant.name);

            categoryFound = true;
        }
    }

    if (!categoryFound) {

        console.log("🥺🌱 Oops! Plant Not Found");
    }
}

searchByCategory();

const sunlightInput = "Direct Sun";

function searchBySunlight() {

    if (sunlightInput.trim() === "") {

        console.log("⚠️ Please enter a search value");

        return;
    }

    let sunlightFound = false;

    console.log("☀️ Matching Plants Found ☀️");
    console.log("");

    for (const plant of plantDatabase) {

        if (plant.sunlight.toLowerCase() === sunlightInput.toLowerCase()) {

            console.log("🌱 " + plant.name);

            sunlightFound = true;
        }
    }

    if (!sunlightFound) {

        console.log("🥺🌱 Oops! Plant Not Found");
    }
}

searchBySunlight();

const partialInput = "Ros";

function partialSearch() {

    if (partialInput.trim() === "") {

        console.log("⚠️ Please enter a search value");

        return;
    }

    let plantFound = false;

    console.log("🌿 Matching Plants Found 🌿");
    console.log("");

    for (const plant of plantDatabase) {

        if (plant.name.toLowerCase().includes(partialInput.toLowerCase())) {

            console.log("🌱 " + plant.name);

            plantFound = true;
        }
    }

    if (!plantFound) {

        console.log("🥺🌱 Oops! Plant Not Found");
    }
}

partialSearch();