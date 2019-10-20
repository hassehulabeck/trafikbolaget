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
        // Skapa en tidspunkt som är NU.
        let now = new Date().getTime();
        // Kolla om senaste stämplingen är äldre än 90 minuter.
        // 90 minuter är 90 * 60 * 1000 = 5 400 000 millisekunder
        let latestStamp = ticket.timestamps[ticket.timestamps - 1];
        if (latestStamp + 5400000 < now) {
            // Det har gått mer än 90 minuter sedan senaste stämplingen
            ticket.credit--;
            // Skapa ett nytt timestamp i unixdate-format.
            ticket.timestamps.push(now);
        } else {
            return "Din senaste stämpling är fortfarande giltig.";
        }
    } else {
        return "Inga krediter kvar.";
    }
}

export {
    ticketId,
    Ticket,
    stampTicket
};