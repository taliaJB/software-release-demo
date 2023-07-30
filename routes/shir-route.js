module.exports = (app) => {
  app.get("/shir", (req, res) => {
    res.send("Shir Epshtein!");
  });
};
