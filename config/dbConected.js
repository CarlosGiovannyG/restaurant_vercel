import mongoose from 'mongoose';

//~ CONECCION A LA BASE DE DATOS
/* 
se recibe la url de la base de datos, se comprueba si ya esta conectada de lo contrario se hace la conección
*/
const dbConnected = () => {
  if (mongoose.connection.readyState >= 1) return

  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

}

export default dbConnected
