const mainController ={
    
    getHomePage: (req,res) => {
        const { champions } = req.app.locals;
        const { maps } = req.app.locals;
        const title = "Home"
        const CSS = "index";
        res.render("index", {title, CSS});
    }
}

module.exports = mainController;