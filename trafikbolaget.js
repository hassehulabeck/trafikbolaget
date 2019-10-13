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