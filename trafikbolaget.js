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

// Totalt antal resenärer
let totalPassengers = passengers2016 + numbers2017.passengers;

//Medelvärdet av resenärer
let averagePassengers = (passengers2016 + numbers2017.passengers) / 2;

// Intäkt per resa
var revenuePerTravel = (revenue2016 + numbers2017.revenues) / (travels2016 + numbers2017.travels).toFixed(0);

// Intäkt per resenär (använd en tidigare variabel)
let revenuePerPassenger = (revenue2016 + numbers2017.revenues) / totalPassengers.toFixed(2);

// Vilket år hade flest antal resor?
var bestYearsTravels = Math.max(travels2016, numbers2017.travels);