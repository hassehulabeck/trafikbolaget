// Skapa bussen
var bus = {
    id: 1,
    linje: 1,
    driver: {
        name: "Olle Blom",
        age: 53
    },
    passengers: [],
    position: null,
    direction: 1,
    isAtStop: false,
    maxPassengers: 60,
    emptySeats: function () {
        return this.maxPassengers - this.passengers.length;
    },
    changePassengers: function (line, position) {
        // En funktion som släpper av och på passagerare

        // Först släpper vi av de som ska av. Få fram vilka det är.
        let avstigande = this.passengers.filter(function (passenger) {
            return passenger.destination == position;
        })
        // Plocka ut dem från bussens passengers-array.
        var busPassengers = this.passengers;
        avstigande.forEach(function (avstigare) {
            let pos = busPassengers.find(function (passenger) {
                return passenger.id == avstigare.id
            })
            busPassengers.splice(pos, 1)
        })

        // Därefter kollar vi antalet lediga platser.
        if (this.emptySeats() == 0) {
            console.log("Det finns inga platser kvar.");
        } else if (line[position].passengers.length > this.emptySeats()) {
            // Fyll på med så många det går
            let amount = this.emptySeats();
            for (let i = 0; i < amount; i++) {
                // Fyll bussen med den passagerare som står först i kön.
                busPassengers.push(line[position].passengers.shift());
            }
        } else {
            // Fyll på med alla passagerare som vill gå ombord.
            this.passengers = [...this.passengers, ...line[position].passengers];
        }
    },
    // En funktion för att flytta bussen ett steg.
    move: function (line) {
        // Kolla först om vi är i någon av ändarna, och vidtag i så fall åtgärder.
        if ((this.position == 0) && (this.direction == -1))
            this.direction = 1;
        if ((this.position == line.length - 1) && (this.direction == 1))
            this.direction = -1

        // Flytta bussen genom att använda direction-värdet.
        this.position = this.position + this.direction;

        // Skriv ut var någonstans bussen är, samt hur många passagerare den har.
        this.status(line);
        // Släpp ut och släpp på passagerare
        this.changePassengers(line, this.position);
    },
    status: function (line) {
        console.log(line[this.position].name + " (" + line[this.position].passengers.length + ")");
        console.log("Antal passagerare: " + this.passengers.length);
    }
}

export default bus;