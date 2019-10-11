// Variabler för chauffören.
var driver = {
    name: "Irene Gustavsson",
    age: 38,
    place: "driver seat"
}

// Variabler för passagerarna
var passenger1 = {
    name: "Filip Jovetevic",
    age: 23,
    place: 20,
    destination: "centrum"
}
var passenger2 = {
    name: "Kim Hyeung",
    age: 85,
    place: 5,
    destination: "Hemvägen"
}
var passenger3 = {
    name: "Amanda Ringskog",
    age: 49,
    place: 18,
    destination: "centrum",
    hasMotionSickness: true
}

// Skapa bussen och tilldela värdet i en och samma instruktion.
let bus = [driver, passenger1, passenger2, passenger3];

// Framme i centrum ska några personer gå av.
bus.forEach(function (person, index) {
    // Använd index för att ha en räknare som håller reda på personerna.
    if (person.destination == "centrum") {
        bus.splice(index, 1); // En person ska gå av.
    }
})

/* En .forEach (och alla andra array-metoder) håller naturligtvis reda 
på antalet element, men när vi vill göra någon manipulering, beräkning eller
liknande, är index en behändig variabel att nyttja. */