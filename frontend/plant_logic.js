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
generateCareRecommendations()