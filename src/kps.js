// arvotaan lottonumerot
const {Button, TextView, ScrollView, ui} = require('tabris');

//_______________________________________LOTTO__________________________________________________________________________________________________________________________________________________________

//LOTTOtaulukko
var numerotaulukko = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39");

// Painike
let buttonLotto = new Button({
  centerX: 0, top: 100,
  text: "Lotto"
}).appendTo(ui.contentView);
//________________________________________EUROJP________________________________________________________________________________________________________________________________________________________
//EPtaulukko
var EJPtaulukko = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50");

//lisäEPtaulukko
var LisäEJPtaulukko = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10");
// Painike
let buttonEuroJackpot = new Button({
  centerX: -100, top: 100,
  text: "EuroJackpot"
}).appendTo(ui.contentView);
//____________________________________________JOKERI____________________________________________________________________________________________________________________________________________________

// Painike
let buttonJokeri = new Button({
  centerX: 100, top: 100,
  text: "Jokeri"
}).appendTo(ui.contentView);
//______________________________________________________________________________________________________________________________________________________________________________________________________
// TekstikenttÃ¤ koneen numeron nÃ¤yttÃ¤miseksi
let koneennumero = new TextView({
  centerX: 0, top: [buttonLotto, 50],
  font: "24px"
}).appendTo(ui.contentView);          

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
//______________________________LOTTO___________________________________________________________________________________________________________________________________________________________________
  //kun nappia painetaan niin arvotaan numerot
  buttonLotto.on('select', arvo).appendTo(ui.contentView);  

function arvo(){
  
// numerotaulukko on sekoitettunumerotaulukko
numerotaulukko = shuffle(numerotaulukko);
  
//numero1
var numero1 = numerotaulukko[0];
  
//numero2
var numero2 = numerotaulukko[1];
  
//numero3
var numero3 = numerotaulukko[2];
    
//numero4
var numero4 = numerotaulukko[3];
  
//numero5
var numero5 = numerotaulukko[4]; 
  
//numero6
var numero6 = numerotaulukko[5];
  
//numero7
var numero7 = numerotaulukko[6]; 
  
  //siotetaan numerot textviewiin suraavalla tyylillä [numero], [numero]...
  koneennumero.set("text",'[' + numero1 + ']' + ', ' + '[' + numero2 + ']' + ', ' + '[' + numero3 + ']' + ', ' + '[' + numero4 + ']' + ', ' + '[' + numero5 + ']' + ', ' + '[' + numero6 + ']' + ', ' + '[' + numero7 + ']');
  }

//______________________________JOKERI__________________________________________________________________________________________________________________________________________________________________
 //kun nappia painetaan niin arvotaan numerot
  buttonJokeri.on('select', jokeriarvo).appendTo(ui.contentView);  

//arvotaan jokerinumerolle numero
function jokerinumeroarvonta(){
var jokerinumero = Math.floor(Math.random() * 10);
return jokerinumero;
}

function jokeriarvo(){
  
//numero1
var numero1 = jokerinumeroarvonta();
  
//numero2
var numero2 = jokerinumeroarvonta();
  
//numero3
var numero3 = jokerinumeroarvonta();
    
//numero4
var numero4 = jokerinumeroarvonta();
  
//numero5
var numero5 = jokerinumeroarvonta(); 
  
//numero6
var numero6 = jokerinumeroarvonta();
  
//numero7
var numero7 = jokerinumeroarvonta(); 
  
  //siotetaan numerot textviewiin suraavalla tyylillä [numero], [numero]...
  koneennumero.set("text",'[' + numero1 + ']' + ', ' + '[' + numero2 + ']' + ', ' + '[' + numero3 + ']' + ', ' + '[' + numero4 + ']' + ', ' + '[' + numero5 + ']' + ', ' + '[' + numero6 + ']' + ', ' + '[' + numero7 + ']');
  }
//____________________________________EUROJP____________________________________________________________________________________________________________________________________________________________
 //kun nappia painetaan niin arvotaan numerot
  buttonEuroJackpot.on('select', EJParvo).appendTo(ui.contentView); 

function EJParvo(){
  
// numerotaulukko on sekoitettunumerotaulukko
EJPtaulukko = shuffle(EJPtaulukko);
LisäEJPtaulukko = shuffle(LisäEJPtaulukko);
  
//numero1
var numero1 = EJPtaulukko[0];
  
//numero2
var numero2 = EJPtaulukko[1];
  
//numero3
var numero3 = EJPtaulukko[2];
    
//numero4
var numero4 = EJPtaulukko[3];
  
//numero5
var numero5 = EJPtaulukko[4]; 
  
//numero6
var numero6 = LisäEJPtaulukko[1];
  
//numero7
var numero7 = LisäEJPtaulukko[2]; 
  
  //siotetaan numerot textviewiin suraavalla tyylillä [numero], [numero]...
  koneennumero.set("text",'[' + numero1 + ']' + ', ' + '[' + numero2 + ']' + ', ' + '[' + numero3 + ']' + ', ' + '[' + numero4 + ']' + ', ' + '[' + numero5 + ']' + ', *numerot* = ' + '[' + numero6 + ']' + ', ' + '[' + numero7 + ']');
  }
