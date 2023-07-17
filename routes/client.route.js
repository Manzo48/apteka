const { Router } = require('express');
const { clientsController } = require('../controllers/clients.controller.js');
const { cartsController } = require('../controllers/carts.controller.js');
const { categoriesController } = require('../controllers/categories.controller.js');
const { drugsController} = require('../controllers/drugs.controller.js');
const router = Router();



router.get('/drugs', drugsController.getAllDrug);
router.get('/drug:id', drugsController.getDrug);
router.get('/drugCT:id', drugsController.getByCategory)
router.patch('/adddrug:id', cartsController.takeDrug);
router.patch('/removedrug:id', cartsController.removeDrug);
router.patch('/cleancart:id', cartsController.cleanCart)
router.patch('/buy:id', cartsController.buyItems);
router.patch('/sendmoney', clientsController.sendMoney)

/////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
module.exports = router;