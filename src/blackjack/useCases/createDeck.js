import _ from "underscore";


/**
 * @param {Array<String>} cards - Ejemplo: ["C", "D", "H", "S"];
 * @param {Array<String>} specialCards - Ejemplo: ["A", "J", "Q", "K"];
 * @returns {Array<String>} Arreglo de strings
 */
export const crearDeck = (cards, specialCards) => {

  if(!cards || cards.length===0) 
  throw new Error("Tipo de cartas es obligatorio")
  if(!specialCards || specialCards.length===0) 
  throw new Error("Tipo de cartas especiales es obligatorio")

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of cards) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of cards) {
    for (let esp of specialCards) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  return deck;
};
