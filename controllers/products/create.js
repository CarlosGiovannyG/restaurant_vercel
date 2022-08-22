import cloudinary from "cloudinary"
import path from "path"

import catchAsyncErrors from '../../middleware/catchAsyncErrors.js'
import products from "../../models/products.js";


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


//& CREACIÓN DE PRODUCTOS 
export const createProduct = catchAsyncErrors(async (req, res, next) => {

  console.log('Imagen', req.body);

  // const ext = path.extname(req.file.originalname).toLocaleLowerCase()

  // if (ext !== '.png' || ext !== '.jpg' || ext !== '.jpeg' || ext !== '.gif') {
  //   res.status(500).send({ message: 'Solo puedes guardar imagenes' })
  // }

  try {

    // const restimagen = await cloudinary.v2.uploader.upload(req.file.path, {
    //   folder: 'restaurant/products',
    //   width: '500',
    //   crop: 'scale'
    // })

    const newProducto = new products({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price,
      // image: restimagen.url,
      // public_id: restimagen.public_id,
      id_autor: req.body.autor,
    })

    await newProducto.save();

    res.status(201).send({ message: 'Producto creado con exito' })

  } catch (error) {
    res.status(500).send({ message: 'Ocurrio un error inesperado', error })
  }
})