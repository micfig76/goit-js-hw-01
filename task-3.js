const person = { 
    name: "krzysiek",
    surname: "Dabrowski",
};

for (const property in person) {
    console.log(property);
    console.log(person[property]);

}