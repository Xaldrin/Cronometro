export class Contador {
  #contador;
  constructor() {
    this.#contador = 0;
  }
  incrementar() {
    this.#contador++;
  }
  getValue() {
    return this.#contador;
  }
  reset() {
    this.#contador = 0;
  }
}
