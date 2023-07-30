module.exports = (app) => {
  app.get("/assaf", (req, res) => {
    res.send("This is Assaf's route!");
  });
};
