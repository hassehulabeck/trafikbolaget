# Trafikbolaget
## En genomgång av javaScript i kapitelform
I varje kapitel berörs ett eller flera kunskapsområden. Skriv kod som löser uppgiften.
### Kapitel 15 - Stämpla biljetten
#### Kunskaper: Date
#### Uppgift: Skapa biljetter och tidsstämplar.
Nu har det blivit dags att kontrollera om passagerarna har rätt att åka med bussen. Därför ska vi skapa biljetter och någon form av kontroll av desamma.

Skapa i en ny modul ett biljett-objekt som har egenskaperna id, credit och timestamps. Id ska ha ett numerärt värde, likaså credit (och sätt defaultvärdet till 10) medan timestamps ska ha en tom array som värde. I den ska vi lagra alla "stämplar".

På sikt behöver vi också ändra passenger-objektet, så att alla passagerare har en egenskap som kan hålla ett ticket-objekt, men just nu kan vi nöja oss med att i consolen göra en direkt tilldelning 

´´´javascript
passengers[0].ticket = ticket;
´´´

Skapa därefter en funktion som tilldelar en biljett till en passagerare, samt en funktion som stämplar biljetten och då även minskar värdet på credit. Det är också bra om vi i den funktionen genomför en kontroll om biljetten har tillräckligt med credit.

#### Tekniker & metoder
```javascript
Date
``` 