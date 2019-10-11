# Trafikbolaget
## En genomgång av javaScript i kapitelform
I varje kapitel berörs ett eller flera kunskapsområden. Skriv kod som löser uppgiften.
### Kapitel 8 - Sortera passagerarna
#### Kunskaper: Array & objekt
#### Uppgift: Sortera passagerare.
En vanlig uppgift är att sortera arrayer utifrån någon egenskap. Arrayer har en inbyggd .sort-metod, men den är ganska dålig. Därför måste man oftast skriva en egen metod som .sort-metoden anropar.

Nästan alla sort-metoder tar två argument, vanligen kallade a och b, och gör en jämförelse av dem eller deras egenskaper, och ordnar dem inbördes. A och b motsvarar två element i arrayen, och sorteringen fortsätter sedan med två andra element. Sorteringsfunktionen ska returnera antingen 1 eller -1, vilket motsvarar stigande respektive fallande ordning.

Skriv en sorteringsfunktion som sorterar passagerarna stigande efter ålder.

#### Tekniker & metoder
```javascript
.sort()
``` 