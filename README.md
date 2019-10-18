# Trafikbolaget
## En genomgång av javaScript i kapitelform
I varje kapitel berörs ett eller flera kunskapsområden. Skriv kod som löser uppgiften.
### Kapitel 7 - Massa passagerare
#### Kunskaper: Funktioner & objekt
#### Uppgift: Skapa många passagerare.
Tre passagerare är trevligt, men det skulle ju kunna vara kul att laborera med väldigt många passagerare. Så därför ska vi bygga en passagerar-fabrik (factory).

En factory i javaScript är en funktion som returnerar *instanser* av ett objekt. Den behöver oftast lite "råvaror", så det kan vara bra att lagra dem i olika arrayer.

Skapa en array som innehåller tio manliga förnamn och tio kvinnliga. Skapa därefter en array som innehåller tjugo olika efternamn.
Bygg därefter en factory-funktion som tar emot två argument (firstName, lastName) och skapar passagerare. Låt funktionen slumpa fram en ålder mellan 10-99 år. 
Anropa funktionen så att den skapar 100 passagerare.

#### Tekniker & metoder
```javascript
new
function
Math
``` 