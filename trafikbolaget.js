// Variabler för chauffören.
var driver = "Irene Gustavsson";

// Variabler för passagerarna
var passenger1 = "Filip Jovetevic";
var passenger2 = "Kim Hyeung";
var passenger3 = "Amanda Ringskog";

// Skriv ut förnamnet
function getFirstName(person) {
    // Skapa en lokal variabel som ska innehålla personens förnamn.
    let firstName;
    // Och en variabel som lagrar positionen för mellanslaget i namnet.
    let blankspace = person.indexOf(" ");
    // Hämta sedan ut alla bokstäver från position 0 till mellanslaget.
    firstName = person.slice(0, blankspace);

    // Till slut använder vi return för att skicka tillbaks värdet.
    return firstName;
}