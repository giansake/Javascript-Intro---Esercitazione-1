# Javascript intro - Esercitazione 1

Obiettivi dell'esercitazione

- Acquisire familiarità con il linguaggio JavaScript
- Praticare alcuni concetti base di manipolazione del DOM (Document Object Model) attraverso l'utilizzo di eventi come `onclick`

![Condizione di partenza](/assets/start.png "Condizione di partenza, classe di stili di base")

L'esercizio richiede di creare un bottone che, quando viene cliccato, assegna o rimuove una classe CSS specifica in base alla presenza o meno di un altra class CSS specifica.
La card centrale avrà quindi sempre sia una class di base, rappresentata ora dalla classe `.card`, e un altra sola classe che potrà essere o lo stile dell'immagine 1 o lo stile dell'immagine 2

## Immagine 1

### stile di base

![variante 1](/assets/default.svg "classe di stili di base")

## Immagine 2

### stile alternativo

![variante 2](/assets/styled.svg "stili speciali, classe di stili particolari")

---

# Tips e spunti per raggiungere la soluzione/le soluzioni

[MDN - Mega guida allo studio di JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Potete usare questa documentazione come reference principale per lo studio di JavaScript in queste prime fasi. Prima di cercare in google e quindi prima di dover navigare i risultati e le opinioni di diverse persone vi invito a visitare la documentazione Mozilla e di individuare la parte che vi interessa.
Potete anche solo dare una letta alle sezioni della documentazione dalla sidebar di sinistra, i capitoli introduttivi sono molto utili per recuperare chiarezza riguardo i concetti base che abbiamo affrontato rapidamente in classe.
Di seguito una breve lista dei concetti che possono aiutarvi a completare la task di questa esercitazione.

1. La **_console_**

```js
console.log();
```

console ci permette di stampare nella console del browser qualsiasi cosa succeda nel codice javascript.

Viene usato spesso come strumento per il debug e lo sviluppo, accetta un singolo elemento o una lista.\
Esempio:

```js
console.log(nomeVariabile, "testo semplice");
```

2. L'oggetto **_document_** e le sue proprietà

```js
document;
```

Come abbiamo visto in classe `document` è l'entry point principali per interagire con la DOM.
Le proprietà dell'oggetto `document` rappresentano
tutti i modi con cui interagire con il documento.
Di seguito vi lascio una breve lista delle funzioni usate più frequentemente. La scelta di una funzione piuttosto che un altra varia a seconda del processo che state seguendo per risolvere il determinato problema e, quindi, della soluzione che vorrete implementare.

```js
document.getElementById;
document.querySelector;

document.getElementsByClassName;
document.getElementsByName;
document.getElementsByTagName;
document.querySelectorAll;
```

Potete comunque fare riferimento alla documentazione Mozilla [a questo link](https://developer.mozilla.org/en-US/docs/Web/API/Document)

3.  Come scrivere una funzione

Di seguito vi lascio la sintassi base di una funzione

```js
// definizione

function nomeFunzione(argomento) {
  // corpo della funzione
  // dove si definisce cosa deve fare

  console.log(argomento);
}

// utilizzo

nomeFunzione("argomento in input");
```

Come potete notare nello snippet qui sopra, la funzione necessita di una definizione per poter esistere. Come le variabili, necessitano di essere definite per poter essere usate come reference ad un valore.

Ci sono dei concetti riguardo le funzioni, e riguardo javascript, che ancora non vi ho illustrato ma per la task di questo esercizio vi basta quello che già sapete.

Esempio:
È possibile definire una funzione anche in un altro modo, noto come arrow definition o arrow function.
Volevo farvelo vedere perché è il modo in cui è scritta la funzione dentro un `forEach` illustrato più avanti in questo documento.

```js
// definizione

const nomeFunzione = () => {
  // corpo della funzione
};

// utilizzo

nomeFunzione();
```

notate come le parentesi tonde, la freccia, che poi è la risultante di un `=` con dopo una parentesi `>`, ritornino nel `forEach` loop del punto 5 di questa lista.

4.  Conditional statement

Per controllare l'esecuzione di una parte di codice in maniera condizionale possiamo fare uso della sintassi `if else` illustrata nello snippet di seqguito

```js
if (condition) {
  // il codice da eseguire se la condizione è TRUE
} else {
  // il codice da eseguire se la condizione è FALSE
}
```

Per definire la condizione, o le condizioni, da verificare per eseguire l'if statement possiamo servirci di una serie di operatori.
Vi lascio di seguito la tabella dei possibili operatori.

| Operator                   | Description                                                                     | Examples returning true |
| -------------------------- | ------------------------------------------------------------------------------- | ----------------------- |
| Equal (==)                 | Returns true if the operands are equal.                                         | 3 == var1               |
|                            |                                                                                 | "3" == var1             |
|                            |                                                                                 | 3 == '3'                |
| Not equal (!=)             | Returns true if the operands are not equal.                                     | var1 != 4               |
|                            |                                                                                 | var2 != "3"             |
| Strict equal (===)         | Returns true if the operands are equal and of the same type.                    | 3 === var1              |
|                            |                                                                                 |                         |
| Strict not equal (!==)     | Returns true if the operands are of the same type but not equal,                | var1 !== "3"            |
|                            | or are of different type.                                                       | 3 !== '3'               |
| Greater than (>)           | Returns true if the left operand is greater than the right operand.             | var2 > var1             |
|                            |                                                                                 | "12" > 2                |
| Greater than or equal (>=) | Returns true if the left operand is greater than or equal to the right operand. | var2 >= var1            |
|                            |                                                                                 | var1 >= 3               |
| Less than (<)              | Returns true if the left operand is less than the right operand.                | var1 < var2             |
|                            |                                                                                 | "2" < 12                |
| Less than or equal (<=)    | Returns true if the left operand is less than or equal to the right operand.    | var1 <= var2            |
|                            |                                                                                 | var2 <= 5               |

5.  Navigare una lista
    [Iterare tra gli elementi di una lista ]("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#iterating_over_arrays")
    In questa sezione della documentazione potete trovare illustrati i diversi modi con cui poter accedere alle informazioni contenute in una lista.

```js
var lista = ["beatrice", "simone", "adriana", "alberto"];
lista.forEach((nome) => {
  console.log(nome);
});
```
