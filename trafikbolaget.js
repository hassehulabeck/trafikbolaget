// En array med förnamn. Notera bokstaven "s" på slutet, som markerar att det rör sig om flera namn.
var firstNames = ["Olle", "Ali", "Ibrahim", "Gustav", "Franz", "Kim", "Pontus", "Morgan", "Adam", "Volfram", "Britt", "Maria", "Justina", "Camille", "Lotta", "Therese", "Anna", "Erica", "Lisa", "Amanda"];
// En array med efternamn
var lastNames = ["Ashton", "Bolinder", "Claesson", "Desmond", "Ek", "Flood", "Gustavsson", "Haider", "Icander", "Joos", "Kelvin", "Larsson", "Malmgren", "Norlander", "Ohlin", "Pettersson", "Qwast", "Rolin", "Schwartz", "Thorén"];

/* Ordet this syftar till den instans av objektet Person som skapas.
Att Person har en versal initialbokstav beror på att det här är en så kallad constructor-funktion, eller factory. Namnet på en sådan funktion bör alltid vara i singular, eftersom funktionen bara skapar en av någonting. */
function Person(firstName, lastName) {
    this.name = firstName + " " + lastName;
    // Slumpa fram en ålder mellan 10 och 99.
    this.age = Math.floor(Math.random() * 89) + 10;
}
// Skapa en array som ska lagra alla personer.
var passengers = [];

// Anropa funktionen 100 gånger
for (let i = 0; i < 100; i++) {
    // Slumpa fram ett för- och ett efternamn.
    let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    passengers.push(new Person(firstName, lastName));
}


// Skapa bussen
var bus = {
    id: 1,
    linje: 1,
    driver: {
        name: "Olle Blom",
        age: 53
    },
    passengers: [],
    nextStop: null,
    isAtStop: false,
    maxPassengers: 20,
    emptySeats: function () {
        return this.maxPassengers - this.passengers.length;
    },
    loadPassengers: function (passengers) {
        if (this.emptySeats() == 0) {
            throw new Error("Bussen är full");
        } else if (passengers.length > this.emptySeats()) {
            // Fyll på med så många det går
            let amount = this.emptySeats();
            for (i = 0; i < amount; i++) {
                // Fyll bussen med den passagerare som står först i kön.
                this.passengers.push(passengers.shift());
            }
        } else {
            // Fyll på med alla passagerare som vill gå ombord.
            this.passengers = [...this.passengers, ...passengers];
        }
    }
}


// Låt alla passagerare försöka kliva på bussen.
bus.loadPassengers(passengers);

console.log("Antal passagerare på bussen: " + bus.passengers.length);
console.log("Antal lediga platser: " + bus.emptySeats());

// Bussen bör nu vara full, men låt oss prova igen med de återstående passagerarna.
try {
    bus.loadPassengers(passengers)
} catch (e) {
    console.log(e);
}

/* Här kör jag instruktionen inne i ett try/catch-block. Det innebär att js försöker köra instruktionen, och om det skulle bli fel någonstans, så fångas det upp av catch-delen.
Själva felet genereras av koden på rad 42, och skickar tillbaka ett error-objekt med ett egendefinierat meddelande. */