//~ FUNCIÓN PARA MAPEAR Y LISTAR ERRORES 
import { ErrorHandler } from '../utils/errorHandler.js'

export default (err, req, res, next) => {
  err.statosCode = err.statosCode || 500

  let error = { ...err }

  error.message = err.message

  //! ERRORES DE ID EN LOS OBJETOS DE MONGOOSE
  if (err.name === 'CastError') {
    const message = `Atributo no encontrado. Invalido${err.path} `
    error = new ErrorHandler(message, 400)
  }

  //! ERRORES DE VALIDACIÓN
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(value => value.message)
    error = new ErrorHandler(message, 400)
  }

  res.status(error.statosCode).json({
    succes: false,
    error,
    message: err.message,
    stack: err.stack
  })
}