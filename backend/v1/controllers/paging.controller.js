const axios = require("axios").default;
const {
  insertComments,
  insertManyComments,
} = require("../services/commnet.service");
const InsertCommentCtl = {
  insertComment: async (req, res, next) => {
    try {
      const { blogId, commentId, name, email, body } = req.body;
      return res.status(200).json({
        status: "success",
        element: await insertComments({ blogId, commentId, name, email, body }),
      });
    } catch (error) {
      console.error(`insert::`, error.message);
    }
  },
  insertManyComment: async (req, res, next) => {
    try {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
      );
      const newArray = data.data.map((comment) => {
        return {
          blogId: 1,
          commentId: +comment.id,
          name: comment.name,
          body: comment.body,
          email: comment.email,
        };
      });
      await insertManyComments(newArray);
      res.status(200).json({
        status: "success",
        element: 1,
      });
    } catch (error) {
      console.error(`insertManyComment controller::`, error.message);
      next(error);
    }
  },
};
module.exports = InsertCommentCtl;
