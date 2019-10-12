# Trafikbolaget
## En genomgång av javaScript i kapitelform
I varje kapitel berörs ett eller flera kunskapsområden. Skriv kod som löser uppgiften.
### Kapitel 9 - Uppgradera bussen
#### Kunskaper: Array & objekt
#### Uppgift: Definiera en buss.
Nu när vi har skapat 100 personer, så uppstår ju behovet av en fungerande kollektivtrafik. Tidigare skapade vi en buss, men den hade ingen fast plats i tillvaron.
Låt oss nu skapa en ny buss, den här gången i form av ett objekt. Det kan vara av nytta för oss, eftersom även en buss har ett antal egenskaper.
Ge bussen egenskaperna **id, linje, driver, passengers, nextStop, isAtStop och maxPassengers**. I det här skedet kan vi tillåta oss att hårdkoda en buss, och då ge den värdena 1, 1, {name: "Olle Blom", age: 53}, [], null, false och 20.

Utöver detta ska du också ge bussen egenskapen **loadPassengers**, vars värde ska vara i form av en function. Denna ska ta emot en array med passengers, men innan bussen fylls upp med dessa ska funktionen avgöra om de får plats. Först därefter fyller vi upp platserna.
Det kan också vara bra att ha en egenskap som heter **emptySeats**, också den i form av en funktion som enbart returnerar antalet lediga platser. På så sätt håller vi funktionen loadPassengers lite renare.

Testa sedan din funktion genom att skriva lite kod som försöker fylla bussen med samtliga passagerare.
Prova att utföra den instruktionen två gånger, så att du första gången fyller upp en tom buss, och andra gången försöker fylla en full buss.
Lägg den senare instruktionen i ett try/catch-block. Utöka också funktionen loadPassengers, så att den genererar ett error-objekt om du försöker fylla på en full buss.
#### Tekniker & metoder
```javascript
    object
    this
    try/catch
    Error
``` 