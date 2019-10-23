import {
    lines,
    linje1
} from './modules/lines.mjs';
import bus from './modules/bus.mjs'

// Använd DOM för att skapa hållplatser.
var linjen = document.getElementById("linje1");

linje1.forEach(stop => {
    let newStop = document.createElement("li");
    newStop.innerHTML = "<div>" + stop.name + "</div>";
    linjen.appendChild(newStop);
});

// Placera ut bussen någonstans.
bus.position = 0;

// Rendera bussen