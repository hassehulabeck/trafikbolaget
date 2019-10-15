import {
    passengers,
    placePassengers
} from './modules/passengers.mjs';
import bus from './modules/bus.mjs';
import {
    lines,
    linje1
} from './modules/lines.mjs';

// Gör bus global för att testa i consolen.
// Dock inget som ska användas i produktionsfärdig kod.
window.bus = bus
window.linje1 = linje1

// Placera ut passagerarna på linjens hållplatser.
placePassengers(linje1);

// Placera bussen i ena änden av linjen.
bus.position = 0;

// Kör bussen tre hållplatser framåt.
for (let i = 0; i < 3; i++) {
    bus.move(linje1)
}