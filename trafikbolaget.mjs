import * as TicketModule from './modules/ticket.mjs';
import * as PassengerModule from './modules/passengers.mjs';

window.passengers = PassengerModule.passengers;
PassengerModule.passengers.forEach(passenger => {
    let slump = Math.floor(Math.random() * TicketModule.ticketTypes.length);
    passenger.ticket = new TicketModule.Ticket(slump);
});