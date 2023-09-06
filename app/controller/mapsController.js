const mapsController ={
    
    getAllMaps: (req, res) => {
        const { maps } = req.app.locals;
        const title = "maps";
        const CSS = "maps";
        res.render('maps', {title, CSS});
    }, 

    getOneMap: (req, res) => {
        const { maps } = req.app.locals;
        const mapName = req.params.mapName;
        const foundMap = maps.find(map => map.displayName.toLowerCase() === mapName)
        console.log(foundMap);
        if (foundMap) {
            const title = foundMap.displayName;
            const CSS = "map";
            res.render('map', {foundMap, title, CSS});
        } else {
            res.status(404).render("notFound");
        }  
    }
}

module.exports = mapsController;