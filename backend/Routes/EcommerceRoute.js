const EcommerceServiceCtl = require("../Controllers/EcommerceServiceController.js");
const router = require("express").Router();

//AddInventory
router.put("/inventory", EcommerceServiceCtl.AddInventory);

//AddProduct
router.put("/product", EcommerceServiceCtl.AddProduct);

// AddToCart
router.put("/addtocart", EcommerceServiceCtl.AddToCart);

module.exports = router;
