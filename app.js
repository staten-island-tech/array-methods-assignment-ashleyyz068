const deserts = [
    {
        desertName: "macarons",
        countryOrigin: "France",
        baked: true,
        price: 2,
        storesSold: ["I Love Macarons", "Macaron World", "Macaron Majesty"],
        posFlavors: ["chocolate", "pastascho"]
    },
    {
        desertName: "icecream",
        countryOrigin: "China",
        baked: false,
        price: 1,
        storesSold: ["Sprinkle City", "Swirls 'n Smiles", "Scooplicity"],
        posFlavors: ["cookie dough", "vanilla"]
    },
    {
        desertName: "jello",
        countryOrigin: "New York",
        baked: false,
        price: 0.50,
        storesSold: ["target", "walmart", "keyfoods"],
        posFlavors: ["cherry", "cheesecake"]
    },
    {
        desertName: "churros",
        countryOrigin: "Spain",
        baked: false,
        price: 1,
        storesSold: ["Churro-ville", "Churro Palace", "Sweet churros"],
        posFlavors: ["Lava cake", "chocolate"]
    }
]

deserts.forEach((desert) => {
    console.log(desert.desertName);
});
deserts.forEach((desert) => {
    console.log(desert.storesSold);
});
const bakedDesserts = deserts.filter(desert => desert.baked === true);
console.log(bakedDesserts);
