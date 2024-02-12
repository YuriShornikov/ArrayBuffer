export default class ArrayBufferConverter {
    constructor() {
      this.buffer = null;
    }
  
    load(buffer) {
      this.buffer = buffer;
      return this.buffer;
    }
    
    // создаем ошибку при отсутствии buffer
    toString() {
      if (!this.buffer) {
        throw new Error('No buffer');
      }
      
      const bufferView = new Uint16Array(this.buffer);
      const resultString = String.fromCharCode(...bufferView);
      return JSON.parse(resultString).data;
    }
  }

