const Cart = require('../models/Cart.model');
const Drug = require('../models/Drug.model')
const Client = require('../models/Client.Model')

module.exports.cartsController = {
    addCart: (req, res) => {
        Cart.create({
            user: req.body.user,
            medications: req.body.medications,
            totalPrice: 0
        }).then(() => res.json("добавлен Жанр")).catch((err) => res.json(err))
    },
    patchCart: (req, res) => {
        Cart.findByIdAndUpdate(req.params.id, {
            user: req.body.user,
            drug: req.body.drugs,
            totalPrice: req.body.totalPrice
        }).then(() => res.json("добавлен Жанр")).catch((err) => res.json(err))
    },
    deleteCart: (req, res) => {
        Cart.findByIdAndRemove(req.params.id).then(() => res.json('Жанр удален')).catch((err) => res.json(err))
    },
    getAllCart : (req, res) => {
        Cart.find({}).then((data) => res.json(data))
    },
    takeDrug: async (req, res) => {
        try {
          const cart = await Cart.findById(req.params.id);
          const drug = await Drug.findById(req.body.medications);   // Исправлено: Используйте req.body.medications для поиска лекарства, а не req.body.isRecept
          const price = drug.price;                                 // Исправлено: Получите цену лекарства напрямую из drug.price
          let totalPrice = cart.totalPrice;                         // Исправлено: Инициализируйте totalPrice значением cart.totalPrice
      
          if (drug.isRecept) {
            cart.medications.push(drug);                            // Исправлено: Используйте метод push для добавления лекарства в массив medications в корзине
            totalPrice += price;                                    // Исправлено: Увеличиваем totalPrice на цену добавленного лекарства
      
            await cart.save();                                      // Исправлено: Сохраняем изменения в корзине
      
            res.json("Вы добавили в корзину");
          } else {
            res.json("Не получилось у вас нет рецепта");
          }
        } catch (error) {
          res.json("Ошибка: " + error.message);
        }
      },
      
    removeDrug: async (req, res) => {
        try {
            const cart = await Cart.findById(req.params.id);
            const drug = await Drug.findById(req.body.medications);   // Исправлено: Используйте req.body.medications для поиска лекарства, а не req.body.isRecept
            const price = drug.price;   
            const client = await Cart.findById(req.params.id)
            //  const book = await Book.findById(req.params.id)
            if (client.medications.includes(req.body.medications)){
                await Cart.updateOne({$pull: {drugs: req.body.medications}})
                totalPrice -= price; 
                res.json("вы убрали лекарство")
            }
        }
     catch(error){
        res.json("error " + error.message)
    }
    },
    cleanCart: async (req, res) => {
        try{
            const cart = await Cart.findById(req.params.id);
            cart.medications.drugs = [];
            cart.totalPrice = 0
            await cart.save();
            res.json("вы очистили корзину")
    
        }
        catch(error){
            res.json("error" + error.message)
        }
    },
    buyItems: async (req, res) => {
        try {
            const cart = await Cart.findById(req.params.id);
            const wallet = await Client.findById(req.body.wallet);
            const diff = await wallet - cart.totalPrice 
            cart.drugs = [];
            wallet = diff
            cart.totalPrice = 0
            await wallet.save()
            await cart.save();
            res.json("вы купили") 
        }
        catch(error){

        }
    }
}