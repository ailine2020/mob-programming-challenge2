const express = require('express');
const router = express.Router();
const userModel = require("./../models/User")

/* GET users listing. */
router.get('/create-simplonien', (req, res) => {
  res.render('form-create-simplonien', {
    title: "Ajouter un simplonien"
  });
  // console.log("<<<<<", User)
});

router.get("/all-simploniens", (req, res) => {
  userModel
    .find() 
    .then((dbRes) => {
            res.render("all-simploniens", { users: dbRes });     })
    .catch((dbErr) => console.log(dbErr));
});

router.post("/all-simploniens", (req, res) => {
  userModel
    .create(req.body)
    .then((dbRes) => console.log(dbRes))
    .catch((dbErr) => console.error(dbErr));
});



module.exports = router;