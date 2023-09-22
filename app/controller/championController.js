const championController = {
  getAllChamps: (req, res) => {
    const { champions } = req.app.locals;
    const title = "Champions";
    const CSS = "champions";
    res.render("champions", { title, CSS });
  },

  getOneChamp: (req, res) => {
    const { champions } = req.app.locals;
    const championName = req.params.championName;
    const foundChampion = champions.find(
      (champion) => champion.displayName === championName
    );
    const title = foundChampion.displayName;
    const CSS = "champion";
    if (foundChampion) {
      res.render("champion", { foundChampion, title, CSS });
    } else {
      res.status(404).render("notFound");
    }
  },
};

module.exports = championController;
