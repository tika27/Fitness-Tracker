// const router = require("express").Router();
// const path = require("path");

// router.get("/exercise", (req, res) => {
//     // console.log("i have been hit");
//     res.sendFile(path.join(__dirname, "../public/exercise.html"));
// });

// router.get("/stats", (req, res) => {
//     // console.log("i have been hit");
//     res.sendFile(path.join(__dirname, "../public/stats.html"))
// });

// module.exports = router;

var path = require("path");

module.exports = function(app) {
app.get("/stats", (req, res) => {
    console.log("i have been hit");
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

  app.get("/exercise", (req, res) => {
    console.log("i have been hit");
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
app.get("/", (req, res) => {
    console.log("i have been hit");
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
};
