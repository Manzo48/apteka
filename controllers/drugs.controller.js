const Drug = require('../models/Drug.model.js');

module.exports.drugsController = {
    addDrug: (req, res) => {
        Drug.create({
            name: req.body.name,
            category: req.body.category
        }).then(() => res.json("добавлен Жанр")).catch((err) => res.json(err))
    },
    patchDrug: (req, res) => {
        Drug.findByIdAndUpdate(req.params.id, {
            name: req.body.name, 
            category: req.body.category
        }).then(() => res.json("добавлен Жанр")).catch((err) => res.json(err))
    },
    deleteDrug: (req, res) => {
        Drug.findByIdAndRemove(req.params.id).then(() => res.json('Жанр удален')).catch((err) => res.json(err))
    },
    getAllDrug : (req, res) => {
        Drug.find({}).then((data) => res.json(data))
    },
    getByCategory: (req, res) => {
        Drug.find({category: req.body.category}).then((data) => res.json(data))
    },
    getDrug: (req, res) => {
        Drug.findById(req.params.id).populate('drug').then((data) => res.json(data))
    }
}