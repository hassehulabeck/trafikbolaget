# Trafikbolaget
## En genomgång av javaScript i kapitelform
I varje kapitel berörs ett eller flera kunskapsområden. Skriv kod som löser uppgiften.
### Kapitel 12 - Moduler
#### Kunskaper: modules
#### Uppgift: Dela upp koden i självständiga delar.
Det blir snart ohållbart att skapa passagerare i ett kapitel, för att sedan kopiera den koden om vi behöver dem i ett senare kapitel. 

Och om vi hela tiden bygger på vår kod med mer kod, så har vi strax hundratals rader, vilket blir svårt att överblicka, och svårt att underhålla.

Läge för en ny teknik: **moduler**

Moduler är ett sätt att samla kod som hör ihop i en fil, och sedan göra den koden exporterbar. Därefter kan man importera koden till en annan fil.
För att få detta att fungera krävs dels att man jobbar med ES6, dels att man använder en webbserver. **Liveserver** i VS Studio Code duger till detta.
Till sist måste vi också lägga till lite information i script-taggen i index.html så att den ser ut som nedan:
```html
<script src="trafikbolaget.js" type="module"></script>
```

Kopiera all passagerarkod och lägg den i en fil som heter passengers.js och lägg all busskod i en fil som heter bus.js och lägg all linjekod i en fil som heter lines.js. I alla dess filer ska du exportera koden.
I  trafikbolaget.js importerar du sedan koden från dessa tre filer. Kolla sedan att du kommer åt de olika variablerna passengers, bus och linje1.
#### Tekniker & metoder
```javascript
modules
import
export
``` 