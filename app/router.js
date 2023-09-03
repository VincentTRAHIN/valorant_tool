const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
    const { champions } = req.app.locals;
    const { maps } = req.app.locals;
    const title = "Home"
    const CSS = "index";
    res.render('index', {title, CSS});
});

router.get("/champions", (req, res) => {
    const { champions } = req.app.locals;
    const title = "Champions"
    const CSS = "champions";
    res.render('champions', {title, CSS});
});

router.get("/champions/:championName", (req, res) => {
    const { champions } = req.app.locals;
    const championName = req.params.championName;
    const foundChampion = champions.find(champion => champion.displayName === championName)
    const title = foundChampion.displayName;
    const CSS = "champion";
    if (foundChampion) {
        res.render('champion', {foundChampion, title, CSS});
    } else {
        res.status(404).render("notFound");
    }
    
});

router.get("/maps", (req, res) => {
    const { maps } = req.app.locals;
    const title = "maps";
    const CSS = "maps";
    res.render('maps', {title, CSS});
});

router.get("/maps/:mapName", (req, res) => {
    const { maps } = req.app.locals;
    const mapName = req.params.mapName;
    const foundMap = maps.find(map => map.displayName.toLowerCase() === mapName)
    console.log(foundMap);
    if (foundMap) {
        const title = foundMap.displayName;
        const CSS = "map";
        res.render('map', {foundMap, title, CSS});
    } else {
        res.status(404).send("notFound");
    }
    
});


module.exports = router;