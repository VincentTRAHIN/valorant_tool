exports.notFound = function (req, res, next) {
    res.status(404).render('notFound');
};

