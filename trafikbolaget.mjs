import passengers from './modules/passengers.mjs';
import bus from './modules/bus.mjs';
import {
    lines,
    linje1
} from './modules/lines.mjs';

// Fyll på passagerare i bussen.
bus.loadPassengers(passengers);

// Placera bussen i ena änden av linjen.
bus.position = 0;

// Kör bussen tre hållplatser framåt.
for (i = 0; i < 3; i++) {
    bus.move()
}