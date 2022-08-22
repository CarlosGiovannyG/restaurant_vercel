import nc from "next-connect";
import dbConnected from "../../../config/dbConected";
import { createProduct } from "../../../controllers/products/create";
import onError from '../../../middleware/errors'

const handle = nc({ onError });

dbConnected();

handle.post(createProduct);

export default handle;