const Client = require('../models/Client.Model.js')

module.exports.clientsController = {
    addClient: (req, res) => {
        Client.create({
            username: req.body.name,
            wallet: req.body.wallet
        }).then(() => res.json("добавлен Жанр")).catch((err) => res.json(err))
    },
    patchClient: (req, res) => {
        Client.findByIdAndUpdate(req.params.id, {
            username: req.body.name,
            wallet: req.body.wallet
        }).then(() => res.json("добавлен Жанр")).catch((err) => res.json(err))
    },
    deleteClient: (req, res) => {
        Client.findByIdAndRemove(req.params.id).then(() => res.json('Жанр удален')).catch((err) => res.json(err))
    },
    getAllClient : (req, res) => {
        Client.find({}).then((data) => res.json(data))
    },
    getClient: (res, req) => {
        Client.findById(req.params.id).then((data) => res.json(data))
    },
    sendMoney: (res, req) => {
        try{
            Client.findByIdAndUpdate(req.params.id, {
                wallet: req.body.wallet
            })
            res.json('Вы пополнили кошелек')
        }
        catch(error){
            res.json(error.message)
        }

    }

}