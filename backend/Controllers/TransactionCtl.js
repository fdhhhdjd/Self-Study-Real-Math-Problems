const Money = require("../models/MoneyModel.js");
const { startSession } = require("mongoose");
const TransactionCtrl = {
  UserTransaction: async (req, res, next) => {
    try {
      const { userId, amount } = req.body;
      const rs = await Money.create({ userId, amount });
      res.status(200).json({
        status: 200,
        msg: "success",
        data: rs,
      });
    } catch (error) {
      res.status(503).json({
        status: 503,
        msg: "error",
        error,
      });
    }
  },
  UserTransfer: async (req, res, next) => {
    const session = await startSession();
    try {
      const { fromId, toId, amount } = req.body;
      session.startTransaction();
      //Trừ tiền tk gửi
      const amountFrom = await Money.findOneAndUpdate(
        {
          userId: +fromId,
        },
        {
          $inc: { amount: -amount },
        },
        //Nếu có data thì update còn không thì thôi
        { session, new: true }
      );
      console.log(`Account ${fromId} is:::`, amountFrom);
      //cộng vào cho tk nhận
      //Trừ tiền tk gửi
      const amountTo = await Money.findOneAndUpdate(
        {
          userId: +toId,
        },
        {
          $inc: { amount: amount },
        },
        //Nếu có data thì update còn không thì thôi
        { session, new: true }
      );
      console.log(`Account ${fromId} is:::`, amountTo);
      await session.commitTransaction();
      session.endSession();
      return res.status(200).json({
        status: 200,
        msg: "Transfer Success",
      });
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      res.status(503).json({
        status: 503,
        msg: "error",
        error,
      });
    }
  },
};
module.exports = TransactionCtrl;
