/**
 * @param {String} carta Ejemplo - recibe una carta de la funcion de pedir carta
 * @returns {Number} retorna el valor de la respectiva carta
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };
  