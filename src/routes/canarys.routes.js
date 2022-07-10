import {Router} from 'express';
import *as canarysCtrl from "../controllers/canarys.controller";
const router = Router();

router.get('/',canarysCtrl.getItems)

router.get('/:id',canarysCtrl.getItem)

router.post('/',canarysCtrl.createItem)

router.put('/:id',canarysCtrl.updateItem)

router.delete('/:id',canarysCtrl.deleteItem)

router.get('/recovery/:deleted',canarysCtrl.deletedItems)



export default router;