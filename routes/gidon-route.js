module.exports = (app) => {
  app.get("/gidon", (req, res) => {
    res.send("This is an gidon route!");
  });
};
