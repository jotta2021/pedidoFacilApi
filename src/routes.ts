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


export {router}