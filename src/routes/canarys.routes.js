import {Router} from 'express';
import *as canarysCtrl from "../controllers/canarys.controller";
const router = Router();

router.get('/',canarysCtrl.getItems)

router.get('/:canaryId',canarysCtrl.getItem)

router.post('/',canarysCtrl.createItem)

router.put('/:canaryId',canarysCtrl.updateItem)

router.delete('/:canaryId',canarysCtrl.deleteItem)



export default router;