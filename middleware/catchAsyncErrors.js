//? CLASE PARA MANEJO DE ERRORES
export default (func) => (req, res, next) => {
  Promise.resolve(func(req, res, next)).catch(next)
}