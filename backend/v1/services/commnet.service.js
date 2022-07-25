const { _StackModel, _HackNewsModel } = require("../models/comment.model");
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
  //Phan trang
  list: async ({ blogId, page = 1, pageSize = 50 }) => {
    /*
    Page Skip limit
    1     0     50
    2     50    50 
    3     100    50  
    Skip=( page - 1 ) * limit
    */
    return await _StackModel
      .find({ blogId })
      .select({ commentId: 1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);
  },

  //!Hack News
  insertHackNews: async ({ blogId, commentId, name, body, email }) => {
    try {
      return await _HackNewsModel.create({
        blogId,
        commentId,
        name,
        body,
        email,
      });
    } catch (error) {
      console.error(`insertHackNews::`, error.message);
    }
  },
  //Insert Many nhieu
  insertManyHackNewsComments: async (arrItems) => {
    return await _HackNewsModel.insertMany(arrItems);
  },
  //Phan trang
  listHackNews: async ({ blogId, pageSize, commentId }) => {
    return await _HackNewsModel
      .find({ blogId: blogId, commentId: { $gt: commentId } })
      .select({ commentId: 1 })
      .limit(pageSize);
  },
});
