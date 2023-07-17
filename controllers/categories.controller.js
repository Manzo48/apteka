const Category = require('../models/Category.model.js');

module.exports.categoriesController = {
    addCategory: (req, res) => {
        Category.create({
            name: req.body.name,
        }).then(() => res.json("добавлен Жанр")).catch((err) => res.json(err))
    },
    patchCategory: (req, res) => {
        Category.findByIdAndUpdate(req.params.id, {
            name: req.body.name
        }).then(() => res.json("добавлен Жанр")).catch((err) => res.json(err))
    },
    deleteCategory: (req, res) => {
        Category.findByIdAndRemove(req.params.id).then(() => res.json('Жанр удален')).catch((err) => res.json(err))
    },
    getAllCategory : (req, res) => {
        Category.find({}).then((data) => res.json(data))
    },
}