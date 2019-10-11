# Trafikbolaget
## En genomgång av javaScript i kapitelform
I varje kapitel berörs ett eller flera kunskapsområden. Skriv kod som löser uppgiften.
### Kapitel 5 - All abord!
#### Kunskaper: Objekt & Array
#### Uppgift: Fyll bussen och räkna egenskaper.
Lösa objekt är förvisso trevligt, men det är nästan alltid bäst att samla ihop dem i en array, eftersom vi då kan dra nytta av massor av arraymetoder.

Placera först chauffören och passagerarna på bussen genom att "hårdkoda" in dem. "Hårdkoda" innebär att vi skriver en instruktion väldigt odynamiskt.

Därefter vill chauffören räkna hur många som ska kliva av i centrum. Till detta värde behöver vi en variabel (passengersToCentrum), samt en jämförelseoperator (==). 
Enklast är att använda bussens .forEach-metod för att loopa igenom alla personer och addera 1 till passengersToCentrum.

Alternativt kan du använda array-metoden .filter() för att få ett resultat i form av en array.
#### Tekniker & metoder
```javascript
.push()
.forEach()
.filter()
if
``` 