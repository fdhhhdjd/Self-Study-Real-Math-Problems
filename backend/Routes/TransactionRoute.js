const TransactionCtrl = require("../Controllers/TransactionCtl");
const router = require("express").Router();

router.post("/transaction/user", TransactionCtrl.UserTransaction);
router.post("/transfer/user", TransactionCtrl.UserTransfer);

module.exports = router;
