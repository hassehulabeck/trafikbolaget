// Variabler för chauffören.
var driver = "Irene Gustavsson";

// Variabler för passagerarna
var passenger1 = "Filip Jovetevic";
var passenger2 = "Kim Hyeung";
var passenger3 = "Amanda Ringskog";

// Definiera en variabel som har värdetypen array.
var bus = [];

// Låt alla personer gå på bussen.
bus = [driver, passenger1, passenger2, passenger3];

// Släpp av den sista passageraren.
bus.pop();

// Släpp av den första personen (alltså chauffören)
bus.shift();

//Låt chauffören gå tillbaks in i bussen igen.
bus.unshift(driver);

//Låt passagerare3 gå på igen.
bus.push(passenger3);