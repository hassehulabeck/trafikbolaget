import * as TicketModule from './modules/ticket.mjs';
import * as PassengerModule from './modules/passengers.mjs';

PassengerModule.passengers.forEach(passenger => {
    let slump = Math.floor(Math.random() * TicketModule.ticketTypes.length);
    passenger.
});