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


// Flytta bussen i en loop, ett steg varje sekund.
var timer = setInterval(() => {
    bus.move(linje1);
    linjen.childNodes.forEach((stop) => {
        // Ta bort eventuell bus.
        stop.classList.remove("busPresent");
    })
    // Rendera bussen
    linjen.childNodes[bus.position].classList.add("busPresent");
}, 1000)

function stopTheTraffic() {
    clearInterval(timer);
}