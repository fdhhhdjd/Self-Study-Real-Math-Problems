const userCtrl = require("../Controllers/UserRedis");
const router = require("express").Router();

//!User Spam infinity
router.get("/userSpam", userCtrl.UserSpam);
//! Many users buy goods
router.get("/manyUserGoods", userCtrl.UserBuyGoodsMany);
router.get("/manyUserGoodsC2", userCtrl.UserBuyGoodsManyC2);
router.post("/order", userCtrl.DeleteOrderDelayEvent);

module.exports = router;
