"use strict";

//models
const {
  _product,
  _inventory,
  _order,
  _cart,
} = require("../models/EcommerceModel");
var that = (module.exports = {
  //? Add Product
  addProduct: async (product) => {
    return await _product.create(product);
  },
  //? Add Inventory
  addInventory: async (inventory) => {
    return await _inventory.create(inventory);
  },
  //? add Cart
  addToCart: async ({ productId, quantity, userId }) => {
    //!B1 Kiểm tra trong kho có đủ hang hay không
    const stock = await _inventory.updateOne(
      {
        productId,
        //!kiểm tra trong kho lớn hơn người đặt
        quantity: {
          $gt: quantity,
        },
      },
      {
        //! đặt thành công thì trừ trong kho
        $inc: {
          quantity: -quantity,
        },
        //!Add vào array
        $push: {
          reservations: {
            userId,
            quantity,
            productId,
          },
        },
      }
    );
    console.log(`add stock::`, stock);
    //!Nếu >= 1 update success
    //! Nếu ==0 thì không cần làm gì nữa
    if (stock.modifiedCount) {
      const addToCart = await _cart.findOneAndUpdate(
        {
          userId,
        },
        {
          $push: {
            products: {
              productId,
              quantity,
            },
          },
        },
        {
          //Todo: Nếu mà không có dữ insert vào không có thì thôi
          upsert: true,
          //Todo :Trả về một object
          new: true,
        }
      );
      console.log(`add cart::`, addToCart);
      return 1;
    }
    //!B2 Nếu trong kho không đủ thì mình xóa
  },
});
