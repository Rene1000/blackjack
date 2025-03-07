/**
 * 
 * @param {Array <String>} deck -Ejemplo: debe tomar el deck para quitarle una carta
 * @returns {String} retorna una carta
 */
export const pedirCarta = (deck) => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }
    const carta = deck.pop();
    return carta;
  };