const axios = require("axios").default;
const {
  insertComments,
  insertManyComments,
  list,
  insertHackNews,
  insertManyHackNewsComments,
  listHackNews,
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
  List: async (req, res, next) => {
    const { page = 1, blogId, pageSize = 50 } = req.query;
    res.status(200).json({
      status: "success",
      element: await list({
        blogId: +blogId,
        page: +page,
        pageSize: +pageSize,
      }),
      //dua ra cho nguoi ta biet minh truyen cai gi
      meta: {
        pageSize,
        page,
      },
    });
  },
  //! Hacker News
  insertHackNewsComment: async (req, res, next) => {
    try {
      const { blogId, commentId, name, email, body } = req.body;
      return res.status(200).json({
        status: "success",
        element: await insertHackNews({ blogId, commentId, name, email, body }),
      });
    } catch (error) {
      console.error(`insert::`, error.message);
    }
  },
  insertManyHackNewsComment: async (req, res, next) => {
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
      await insertManyHackNewsComments(newArray);
      res.status(200).json({
        status: "success",
        element: 1,
      });
    } catch (error) {
      console.error(`insertManyComment controller::`, error.message);
      next(error);
    }
  },
  ListHackNews: async (req, res, next) => {
    const { commentId = 0, blogId = 1, pageSize = 30 } = req.query;
    res.status(200).json({
      status: "success",
      element: await listHackNews({
        commentId: +commentId,
        pageSize: +pageSize,
        blogId: +blogId,
      }),
      //dua ra cho nguoi ta biet minh truyen cai gi
      meta: {
        pageSize,
        blogId,
      },
    });
  },
};
module.exports = InsertCommentCtl;
