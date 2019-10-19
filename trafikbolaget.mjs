import {
    passengers
} from './modules/passengers.mjs';
import {
    ticketId,
    stampTicket,
    Ticket
} from './modules/ticket.mjs';

// Kolla hur många passagerare vi har
console.log(passengers.length);

// Skapa en biljett med 10 credit
var ticket = new Ticket();

// Kolla om biljetten är valid.
console.log(ticket.isValid());

// Gör passengers och ticket tillgängligt i console
window.passengers = passengers;
window.ticket = ticket;
window.stampTicket = stampTicket;

// Tilldela en ticket till en passagerare.
passengers[0].ticket = ticket;

// Stämpla biljetten för samma passagerare
stampTicket(passengers[0].ticket);