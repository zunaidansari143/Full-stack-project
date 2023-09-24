import producteSchema from "../models/ProducteModel.js";

export const ProducteAPI = async (req, res) => {
  res.send("PRODECT API is working");
};
export const getProducte = async (req, res) => {
  //    res.send(' Fatch Api PRODECT')
  const producte = req.body;
  const newProduct = new producteSchema(producte);
  
  try {
    const result = await newProduct.save();
    res.send(result);
  } catch (arr) {
    res.status(409).json({
      message: arr.message,
    });
    console.log(arr.message, "Semthing went wrong");
  }
};
