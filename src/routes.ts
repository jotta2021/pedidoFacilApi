import { Router,Response,Request } from "express";
import { CreateUserControler } from "./controllers/user/createUserControler";
import { AuthUserControler } from "./controllers/user/AuthUserControler";
import { DetailUserControler } from "./controllers/user/DetailUserControler";
import { isAutenticate } from "./middlewares/isAutenticate";
import addCategoryController from "./controllers/category/addCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from './config/multer'
import multer from "multer";
import { ListByCategoryController } from "./controllers/product/listProductsByController";
import { CreateOrderController } from "./controllers/order/createOrderController";
import { deleteOrderController } from "./controllers/order/deleteOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/listOrdersController";
import { DetailOrderController } from "./controllers/order/detailOrderController";

const router = Router();
const upload= multer(uploadConfig.upload('./tmp'));
//rotas usuario
router.post('/user',new CreateUserControler().handleUser)
router.post('/session',new AuthUserControler().handle)
router.get('/detail',isAutenticate, new DetailUserControler().handle)



//rotas categoria
router.post('/addCategory',isAutenticate, new addCategoryController().handle)
//lista as categorias
router.get('/categories',isAutenticate, new ListCategoryController().handle)

//adicionar um produto
router.post('/addProduct',isAutenticate,upload.single('file'), new CreateProductController().handle)
router.get('/category/product', isAutenticate, new ListByCategoryController().handle)


//criando order
router.post('/addOrder', isAutenticate, new CreateOrderController().handle)
router.delete('/deleteOrder', isAutenticate, new deleteOrderController().handle)
router.put('/sendOrder', isAutenticate, new SendOrderController().handle)
router.get('/orders', isAutenticate, new ListOrderController().handle)
router.get('/orderDetail', isAutenticate, new DetailOrderController().handle)
//adicionando items ai pedido
router.post('/addItem', isAutenticate, new AddItemController().handle)
router.delete('/deleteItem', isAutenticate, new RemoveItemController().handle)
export {router}

