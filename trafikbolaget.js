var linje = [];

var stops = ["Skogen", "Änggården", "Torp södra", "Torp C", "Dalgången", "Resecentrum", "Utgården", "Norra allén", "Norra liden"];

// Varje hållplats måste kunna lagra ett antal passagerare, samt ha ett namn. Läge för ett objekt.

function Stop(name) {
    this.name = name;
    this.passengers = [];
}

stops.forEach(function (stop) {
    var hpl = new Stop(stop);
    linje.push(hpl);
})