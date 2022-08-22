//? CLASE PARA MANEJO DE ERRORES 
/*
recibe el mensaje que se enviara al usuario, y un satus de codigo esta clase se usa de forma global
*/

export default class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode

    Error.captureStackTrace(this, this.constructor)
  }
}