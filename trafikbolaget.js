// Med variabler
var travels2016 = 1602;
var passengers2016 = 23097;
var revenue2016 = 1954140;

// Som objekt
var numbers2017 = {
    travels: 1855,
    passengers: 28431,
    revenues: 2239375
}

// 2018
var numbers2018 = {
    travels: 1719,
    passengers: 21744,
    revenues: 2133700
}

//Medelvärdet av resenärer
let averagePassengers = (passengers2016 + numbers2017.passengers) / 2;


// Villkor
if (numbers2018.passengers < averagePassengers) {
    console.log("2018")
} else {
    console.log("2016-2017")
}

// Det är "dyrt" (resurs-slöseri) att göra samma uträkning flera gånger.
// Därför sparar vi värdet av den i en variabel, och jämför variabeln i villkorssatserna.
let totalTravels = travels2016 + numbers2017.travels + numbers2018.travels;
if (totalTravels >= 5300) {
    console.log("bra");
} else if (totalTravels < 5300 && totalTravels > 5100) {
    console.log("okej");
} else {
    console.log("dåligt");
}