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

export default passengers;