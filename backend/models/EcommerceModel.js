const { Schema, model } = require("mongoose");
//!Product Model

const productSchema = new Schema(
  {
    productId: {
      type: Number,
      required: true,
    },
    code: String,
    name: String,
    brand: String,
    description: String,
    release_date: Date,
    specs: {
      type: Array,
      default: [],
    },
  },
  {
    collection: "products",
    timestamps: true,
  }
);

//!Cart Model
const cartSchema = new Schema(
  {
    userId: Number,
    //? Đơn hàng đang còn hoạt động hay đã hết hạn rồi.
    //? không nên xóa để người ta còn nghiên cứu người ta sẽ đưa vào tracking để phân tích khi mặt hàng có trở lại sẽ báo trợ lại
    //? bằng cách  nt email gì đó.
    //? Trong bảo toàn dữ liệu bạn không được xóa bất kì một Database nào hết.
    status: {
      type: String,
      default: "active",
    },
    //? thời gian update Đơn hàng
    modifiedOn: {
      type: Date,
      default: Date.now,
    },
    products: Array,
  },
  {
    collection: "carts",
    timestamps: true,
  }
);
//! Order Model

const orderSchema = new Schema(
  {
    cartId: Number,
    orderId: Number,
    userId: Number,
    //? Đang chuyển hàng cho ai
    shipping: Object,
    //? thanh toán theo phương thức gì
    payment: Object,
    products: Array,
  },
  {
    collection: "orders",
    timestamps: true,
  }
);
//! Inventory model: Hàng tồn kho
const inventorySchema = new Schema(
  {
    productId: Number,
    //?số lượng tồn kho là bao nhiêu ,lô hàng các kiểu
    quantity: Number,
    //? đặt chỗ
    reservations: Array,
    create_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "inventories",
    timestamps: true,
  }
);
module.exports = {
  _product: model("products", productSchema),
  _cart: model("carts", cartSchema),
  _order: model("orders", orderSchema),
  _inventory: model("inventories", inventorySchema),
};
