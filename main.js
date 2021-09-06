/*
campo minato game , il computer genererà 16 numeri (mine del gioco)noi tramite dei livelli :facile medio difficile
dovremo inserire dei numeri se inseiramo tutti i numeri correttamente avremo vinto altrimenti se inseriremo un numero che è 
anche 
un numero generato dal pc quindi una mina avremo perso
utilizzerò dei do while come controlli per i numeri  inseriti dall'utente e per essere sicuri che i livelli siano
 solo facile medio difficile

 farò anche il confronto se il livello ad esempio prevede 5 numeri se nell'array dei numeri ci saranno 5 numeri allora 
 decreterò il vincitore
*/

//passo uno : creo i due array , uno che conterrà le mine e l'altro che conterrà i numeri dell utente

var mine = []

var numeriUtente =[]

//passo due : genero 16 numeri (mine) e faccio in modo che i numeri siano univoci e non ripetuti

for(let i=mine.length; i < 16; i++){
    var mina = Math.floor(Math.random()*(1,100)+1)
      if((!mine.includes(mina))){
          mine.push(mina)
      }else{
          i-- //con i -- sto dicendo se i numeri son gia contenuti scartali e generane un altro
      }
}
console.log(mine);

/*
passo 3 genero dei livelli per il gioco e faccio in modo che l'utente li inserisca tramite prompt 
uso un do while per controllare che i dati siano inseriti correttamente
e un swith case per dare i vari casi facile medio difficile
*/

do {
    var livello = prompt('facile difficile medio').toLowerCase()
} while (livello!='facile'&&livello!='medio'&&livello!='difficile');
console.log(livello);

switch (livello) {
    case 'facile':livello = 10
        
        break;

    case 'medio':livello = 20
        
        break;

    case 'difficile':livello = 40
        
        break;

    default:
        break;
}
/*
passo 4: con un ciclo vado a chiedere all' utente di inserire numeri tanto quandi ne richiede il livello
e comparo i numeri con le mine per vedere se perdo o vinco
*/

for(let i = numeriUtente.length; i < livello; i++){

    do {
        var numero = Number(prompt('inserisci un numero da 1 a 100'))
    } while (numero < 1||numero >100||isNaN(numero));
    
    if((!numeriUtente.includes(numero))){
              if(mine.includes(numero)){
                  alert('hai preso una mina')
                     alert('hai inserito correttamente : '+numeriUtente.length+ " numeri  su :" +"" +livello  + " e sono:" + numeriUtente )
                         do {
                             var gioca = prompt('vuoi ritentare ?? si o no?')
                         } while (gioca!='si'&&gioca!='no');
                            if(gioca=='si'){
                                location.reload()
                            } else {
                                alert('chiudi pure la pagina')
                            }
                     break
              }
        numeriUtente.push(numero)
    } else {
        alert('numero gia presente  ')
        i--
    }
}

if(numeriUtente.length == livello){
    alert('complimenti hai vinto !!! hai indovinato esattamente :'+" "+ numeriUtente.length + " numeri su" + " " + livello )
    do {
        var gioca = prompt('vuoi fare una nuova partita ?? si o no?')
    } while (gioca!='si'&&gioca!='no');
       if(gioca=='si'){
           location.reload()
       } else {
           alert('chiudi pure la pagina')
       }
}




