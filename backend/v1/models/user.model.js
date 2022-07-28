const { Schema, model } = require("mongoose");
const UserOtpSchema = new Schema(
  {
    userId: { type: Number, required: true },
    email: String,
    username: String,
  },
  {
    collection: "userotp",
    timestamps: true,
  }
);

module.exports = {
  _Users: model("userotp", UserOtpSchema),
};
