import passengers from './modules/passengers.mjs';
import bus from './modules/bus.mjs';
import {
    lines,
    linje1
} from './modules/lines.mjs';

// Kolla antalet lediga platser
console.log(bus.emptySeats());

console.log(passengers.length);

// Fyll på passagerare i bussen.
bus.loadPassengers(passengers);

// Kolla antalet lediga platser
console.log(bus.emptySeats());

// Placera bussen i ena änden av linjen.
bus.position = 0;

// Kör bussen tre hållplatser framåt.
for (let i = 0; i < 3; i++) {
    bus.move(linje1)
}