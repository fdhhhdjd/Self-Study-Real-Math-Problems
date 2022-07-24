const { _StackModel } = require("../models/comment.model");
var that = (module.exports = {
  insertComments: async ({ blogId, commentId, name, body, email }) => {
    try {
      return await _StackModel.create({
        blogId,
        commentId,
        name,
        body,
        email,
      });
    } catch (error) {
      console.error(`insertComments::`, error.message);
    }
  },
  //Insert Many nhieu
  insertManyComments: async (arrItems) => {
    return await _StackModel.insertMany(arrItems);
  },
});
