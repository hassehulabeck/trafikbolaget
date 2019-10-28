var linjer = [];
var linje1 = [];

var stops = ["Skogen", "Änggården", "Torp södra", "Torp C", "Dalgången", "Resecentrum", "Utgården", "Norra allén", "Norra liden"];

// Varje hållplats måste kunna lagra ett antal passagerare, samt ha ett namn. Läge för ett objekt.

function Stop(name) {
    this.name = name;
    this.passengers = [];
}

stops.forEach(function (stop) {
    var hpl = new Stop(stop);
    linje1.push(hpl);
})

// Lägg till linje1 i arrayen som samlar alla linjer.
linjer = [linje1];

// Skapa bussen (den här gången utan passagerarfunktionerna)
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
    maxPassengers: 20,
    emptySeats: function () {
        return this.maxPassengers - this.passengers.length;
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

// Placera bussen i en ände av linje1.
bus.position = 0;

var timer = setInterval(() => {
    bus.move();
}, 1000)

function stopBus() {
    clearInterval(timer);
}