module.exports = (app) => {
  app.get("/example", (req, res) => {
    res.send("This is an example route!");
  });
};
