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

}

const userInput = "rose";

function searchPlant() {
    for (const plant of plantDatabase) {
        if (plant.name.toLowerCase() === userInput.toLowerCase()) {
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
    console.log("🥺🌱 Plant Not Found");
}