
import { Schema, model, models } from "mongoose"

//^ CREACIÓN DEL ESQUEMA PARA LOS PRODUCTOS QUE ESTAN EN LA PÁGINA

/**
 * se crea el esquema de productos señalando cuales campos son onligatrios y cuales no
 * 
 */

const ProductsSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'El nombre del producto es requerido']
  },
  description: {
    type: String,
    required: [true, 'La descripción del producto es requerido']
  },
  category: {
    type: String
  },
  price: {
    type: Number,
    default: 0,
    required: [true, 'El precio del producto es requerido']
  },
  rating: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  comments: {
    type: Number,
    default: 0
  },
  image: {
    type: String
  },
  public_id: {
    type: String
  },
  id_autor: {
    type: String
  },
  timestamps: {
    type: Date,
    default: Date.now()
  }
});

/**
 * se comprueba si la DB ya tiene un esquema de lo contrario se crea
 */

export default models.Products || model("Products", ProductsSchema)