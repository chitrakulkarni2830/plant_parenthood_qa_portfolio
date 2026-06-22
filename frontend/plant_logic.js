const plantNames = ["Monstera", "Aloe Vera", "Snake Plant", "Tomato", "Rose"];

const plantCategories = ["Indoor Plants", "Succulents", "Indoor Plants", "Fruits", "Flowering Plants"];

const sunlightRequirements = ["Indirect Light", "Direct Sun", "Low Light", "Direct Sun", "Direct Sun"];

for (const plant of plantNames) {
    console.log(plant);
}

for (let i = 0; i < plantNames.length; i++) {
    const currentPlant = plantNames[i];
    const light = sunlightRequirements[i];
    
    if (light === "Direct Sun") {
        console.log(currentPlant + ": Put it right next to a bright window!");
    } else if (light === "Indirect Light") {
        console.log(currentPlant + ": Place it in a bright room, but away from harsh direct window rays.");
    } else {
        console.log(currentPlant + ": A shady corner is fine for this low-light plant.");
    }
}