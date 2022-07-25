const { Schema, model } = require("mongoose");
const stackOverFlowSchema = new Schema(
  {
    blogId: { type: Number, required: true },
    commentId: { type: Number, required: true },
    email: { type: String, required: "" },
    body: { type: String, required: "" },
    name: { type: String, required: "" },
  },
  {
    collection: "stackoverflow",
    //tự sinh ra cho ta created_at,update_at
    timestamps: true,
  }
);
//! Hack news pages
const hackNewsSchema = new Schema(
  {
    blogId: { type: Number, required: true },
    commentId: { type: Number, required: true },
    email: { type: String, required: "" },
    body: { type: String, required: "" },
    name: { type: String, required: "" },
    time: { type: Date, default: Date.now },
  },
  {
    collection: "hacknews",
    //tự sinh ra cho ta created_at,update_at
    timestamps: true,
  }
);

module.exports = {
  _StackModel: model("stackoverflow", stackOverFlowSchema),
  _HackNewsModel: model("hacknews", hackNewsSchema),
};
