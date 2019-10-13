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
    },
    // En funktion för att flytta bussen ett steg.
    move: function () {
        // Kolla först om vi är i någon av ändarna, och vidtag i så fall åtgärder.
        if ((this.position == 0) && (this.direction == -1))
            this.direction = 1;
        if ((this.position == linje1.length - 1) && (this.direction == 1))
            this.direction = -1

        // Flytta bussen genom att använda direction-värdet.
        this.position = this.position + this.direction;

        // Skriv ut var någonstans bussen är.
        console.log(linje1[this.position].name);

    }
}

export default bus;