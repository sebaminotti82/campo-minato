var mine =[]
var numeriGiocati=[]
for(var i = mine.length;i < 16 ; i++){
    var mina = Math.floor(Math.random()*(1,100 +1))
    if(!mine.includes(mina)){
        mine.push(mina)
    } else {i--}
}

var livello 
do {
  var livello= prompt('scegli che livello vuoi affrontare : facile medio difficile')
} while ((livello!='facile')&&(livello!='medio')&&(livello!='difficile'));

switch (livello) {
  case 'facile':livello=5
      alert('inserisci 5 numeri non calpestare nessuna mina ed avrai vinto')
    break;

    case 'medio':livello=10
    alert('inserisci 10 numeri non calpestare nessuna mina ed avrai vinto')
    break;

    case 'difficile':livello=25
    alert('inserisci 25 numeri non calpestare nessuna mina ed avrai vinto')
    break;

  default: alert('per poter giocare scegli un livello che sia facile / medio / difficile')
    break;
}

console.log(mine);
for(var i= numeriGiocati.length; i < livello; i++){


  do {
    var numero = Number(prompt('inserisci numero '))
  } while (numero < 1 || numero >100 || isNaN(numero));
  if(!numeriGiocati.includes(numero)){
       
    numeriGiocati.push(numero)
  } else {
    i--
  }

  if(mine.includes(numeriGiocati[i])){
      alert('hia perso hai calpestato una mina ' + " " + numero )
      do {
        var giochiamo = prompt('vuoi rigiocare ?? si / no')
        
      } while ((giochiamo!='si')&&(giochiamo!='no'));
   
      if(giochiamo=='si'){
   
       alert('bravo campione facciamo una nuova partita')
        location.reload()
      } else {
   
       alert ('GRAZIE PER AVER GIOCATO ORA CHIUDERO\' LA PAGINA  ')
        setTimeout(() => {
          window.close()
        }, 2000);
      }
       break;
       

  } else if(!mine.includes(numeriGiocati[i])&&numeriGiocati.length==livello){
   alert('hai vinto hai inserito correttamente'+""+ livello  + " " + " numeri")

   do {
        var giochiamo = prompt('vuoi rigiocare ?? si / no')

   }  while ((giochiamo!='si')&&(giochiamo!='no'));

   if(giochiamo=='si'){

         alert('bravo campione facciamo una nuova partita')
            location.reload()
   } else {

         alert ('GRAZIE PER AVER GIOCATO ORA CHIUDERO\' LA PAGINA  ')
              setTimeout(() => {
                window.close()
              }, 2000);
   }

  }
  
}

