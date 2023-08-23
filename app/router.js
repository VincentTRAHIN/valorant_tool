const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
    res.render('index');
});

router.get("/champions", (req, res) => {
    const { champions } = req.app.locals;
    res.render('champions');
});

module.exports = router;