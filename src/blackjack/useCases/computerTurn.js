/**
 * @param {Number} puntosMinimos 
 * @param {Array<String>} deck 
 */
import {pedirCarta, valorCarta, CreateCard} from "./index"
export const turnoComputadora = (puntosMinimos,puntosHtml, divCartasComputadora, deck) => {
    if(!puntosMinimos) throw new Error("se necesitan los puntos minimos")
    let puntosComputadora = 0;
    do {
      const carta = pedirCarta(deck);
  
      puntosComputadora = puntosComputadora + valorCarta(carta);
      puntosHtml.innerText = puntosComputadora;
  
      // <img class="carta" src="assets/cartas/2C.png">
      const imgCarta = CreateCard(carta)
      divCartasComputadora.append(imgCarta);
  
      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
  
    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("Nadie gana :(");
      } else if (puntosMinimos > 21) {
        alert("Computadora gana");
      } else if (puntosComputadora > 21) {
        alert("Jugador Gana");
      } else {
        alert("Computadora Gana");
      }
    }, 100);
  };