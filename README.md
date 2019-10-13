# Trafikbolaget
## En genomgång av javaScript i kapitelform
I varje kapitel berörs ett eller flera kunskapsområden. Skriv kod som löser uppgiften.
### Kapitel 11 - Trafikera sträckan
#### Kunskaper: Array & objekt & funktioner
#### Uppgift: Placera bussen på linjen.
Nu ska vi trafikera linjen. För att simulera detta behöver vi skriva en funktion som uppdaterar bussens position.
Fundera därför en stund över vilken värdetyp som är lämplig att använda till bussobjektets egenskap position.

Bussens riktning kan bara vara två möjliga värden. Normalt kan det vara bra med en boolsk variabel, men i det här fallet föreslår jag ett siffervärde, 1 för ena riktningen, -1 för andra. Det gör att vi kan använda det för att stega hållplats för hållplats på linjen. 

För en dynamisk lösning kanske vi också bör samla trafikbolagets olika linjer i en större array?
#### Tekniker & metoder
```javascript
    array
    object
    function
``` 