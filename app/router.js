const { Router } = require("express");
const router = Router();
const mainController = require("./controller/mainController")
const championController = require("./controller/championController")
const mapsController = require("./controller/mapsController")




router.get("/", mainController.getHomePage)

router.get("/champions", championController.getAllChamps)

router.get("/champions/:championName", championController.getOneChamp);

router.get("/maps", mapsController.getAllMaps);

router.get("/maps/:mapName", mapsController.getOneMap);

router.use((req, res) => {
    res.status(404).render('notFound');
});


module.exports = router;