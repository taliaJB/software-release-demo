module.exports = (app) => {
  app.get("/itamar", (req, res) => {
    res.send("Houston we have a problem!");
  });
};
