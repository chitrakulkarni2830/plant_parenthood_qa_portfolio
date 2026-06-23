const plantNames = ["Monstera", "Aloe Vera", "Snake Plant", "Tomato", "Rose"];

const plantCategories = ["Indoor Plants", "Succulents", "Indoor Plants", "Fruits", "Flowering Plants"];

const sunlightRequirements = ["Indirect Light", "Direct Sun", "Low Light", "Direct Sun", "Direct Sun"];

for (const plant of plantNames) {
    console.log(plant);
}


function generateCareRecommendations() {
    
    for (let i = 0; i < plantNames.length; i++) {
        const currentPlant = plantNames[i];
        const light = sunlightRequirements[i];
    
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