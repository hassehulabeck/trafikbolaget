var ticketId = 1;

function Ticket(credit = 10) {
    this.id = ticketId,
        this.credit = credit,
        this.timestamps = [],
        this.isValid = function () {
            if (this.credit > 0)
                return true;
        }

}

function stampTicket(ticket) {
    if (ticket.isValid()) {
        ticket.credit--;
        // Skapa ett timestamp i unixdate-format.
        ticket.timestamps.push(new Date().getTime());
    } else {
        return "Inga krediter kvar.";
    }
}

export {
    ticketId,
    Ticket,
    stampTicket
};