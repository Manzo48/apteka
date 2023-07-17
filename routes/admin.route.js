const { Router } = require('express');
const { clientsController } = require('../controllers/clients.controller.js');
const { cartsController } = require('../controllers/carts.controller.js');
const { categoriesController } = require('../controllers/categories.controller.js');
const { drugsController} = require('../controllers/drugs.controller.js');
const router = Router();


router.post("/medicament", drugsController.addDrug);
router.patch('/medicamentPT:id', drugsController.patchDrug);
router.delete('/medicament:id', drugsController.deleteDrug);
///////////////////////////////////////////////////////////////////
router.post("/category", categoriesController.addCategory);
router.patch('/categoryPT:id', categoriesController.patchCategory);
router.delete('/category:id', categoriesController.deleteCategory)
///////////////////////////////////////////////////////////////////
router.post("/cart", cartsController.addCart);
router.patch('cartPT:id', cartsController.patchCart);
router.delete('cart:id', cartsController.deleteCart)
///////////////////////////////////////////////////////////////////
router.post("/client", clientsController.addClient);
router.patch('clientPT:id', clientsController.patchClient);
router.delete('client:id', clientsController.deleteClient);
router.get('/clients', clientsController.getAllClient);
router.get('/client:id', clientsController.getClient)

///////////////////////////////////////////////////////////////////
module.exports = router;