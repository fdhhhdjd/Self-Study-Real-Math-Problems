const SessionsCtl = {
  getSessions: async (req, res) => {
    res.send(req.session);
  },
  setSessions: async (req, res) => {
    req.session.user = {
      username: "Tai Heo Fa",
      age: 22,
      email: "nguyentientai10@gmail.com",
    };
    res.send("set Oke");
  },
  destroySessions: async (req, res) => {
    req.session.destroy();
  },
};
module.exports = SessionsCtl;
