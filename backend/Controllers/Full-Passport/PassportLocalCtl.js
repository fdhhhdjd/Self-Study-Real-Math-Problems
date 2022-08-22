const PassPortLocal = {
  Login: async (req, res) => {
    try {
      res.json({
        body: req.body,
      });
    } catch (error) {
      res.json({
        error: error.stack,
      });
    }
  },
  Profile: async (req, res) => {
    if (req.isAuthenticated()) {
      return res.status(200).json({
        status: "success",
        data: {
          name: "Tai Dev",
          age: 22,
          blog: "Taiheo.com",
        },
      });
    }
    res.status(200).json({
      status: "failed",
      message: "Missing",
    });
  },
};
module.exports = PassPortLocal;
