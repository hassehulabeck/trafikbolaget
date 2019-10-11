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

// Definiera en variabel för att räkna passagerare till centrum.
var passengersToCentrum = 0;

// Iterera/loopa alla personer i bussen och räkna vilka som ska till centrum. "person" är den temporära variabel som innehåller en av de fyra personerna på bussen, en ny person för varje iteration.
bus.forEach(function (person) {
    if (person.destination == "centrum") {
        // ++ är ett snabbt sätt att skriva "öka med 1".
        passengersToCentrum++;
    }
})