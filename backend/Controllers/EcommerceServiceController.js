"use strict";
const {
  addProduct,
  addInventory,
  addToCart,
} = require("../services/EcommerceService");
const EcommerceServiceCtl = {
  //!add Kho hang
  AddInventory: async (req, res) => {
    try {
      const { inventory } = req.body;
      return res.status(200).json({
        elements: await addInventory(inventory),
      });
    } catch (error) {
      res.status(503).json({
        msg: "Server busy",
      });
    }
  },
  //!add san pham
  AddProduct: async (req, res) => {
    try {
      const { product } = req.body;
      return res.status(200).json({
        elements: await addProduct(product),
      });
    } catch (error) {
      console.log(error);
      res.status(503).json({
        msg: "Server busy",
      });
    }
  },
  //! add Cart
  AddToCart: async (req, res) => {
    try {
      const { productId, quantity, userId } = req.body;
      return res.status(200).json({
        elements: await addToCart({
          productId,
          quantity,
          userId,
        }),
      });
    } catch (error) {
      console.log(error);
      res.status(503).json({
        msg: "Server busy",
      });
    }
  },
};
module.exports = EcommerceServiceCtl;
