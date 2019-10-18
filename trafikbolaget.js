// Variabler för chauffören.
var driver = "Irene Gustavsson";

// Variabler för passagerarna
var passenger1 = "Filip Jovetevic";
var passenger2 = "Kim Hyeung";
var passenger3 = "Evander Ringskog";

// Skriv ut förnamnet på chauffören

// Skapa en lokal variabel som ska innehålla personens förnamn.
let firstName;

// Och en variabel som lagrar positionen för mellanslaget i namnet.
let blankspace = driver.indexOf(" ");

// Hämta sedan ut alla bokstäver från position 0 till mellanslaget.
firstName = driver.slice(0, blankspace);

// Skriv ut efternamnet på passagerare 1
let surnameP1 = passenger1.slice(passenger1.indexOf(" ") + 1, );

// Skriv ut EFTERNAMNET på passagerare 2
let surnameP2 = passenger2.slice(passenger2.indexOf(" ") + 1, ).toUpperCase();

//Byt ut e och E till 3
let eName = passenger3.replace("e", "3");
eName = eName.replace("E", "3");

// Alternativt, byt ut både stort och litet E med regex.
let regexName = passenger3.replace(/[eE]/g, "3");