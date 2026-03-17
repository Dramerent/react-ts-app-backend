import { Request } from 'express';
import express, { Router } from 'express';
import { check } from 'express-validator';
import { getAllInfo, postCardInfo, getAllShops, 
        getAllStrings, postShopInfo, postStringInfo} from '../Controller/mainController.js';
export const router = Router()

router.post("/postCardInfo",[
    check('guitar_name').notEmpty().withMessage("нужно имя гитары"),
    check('string_id').notEmpty().withMessage("нужно string_id"),
    check('shop_id').notEmpty().withMessage("нужно shop_id")
], postCardInfo)
router.post("/postShopInfo",[
    check('shop_name').notEmpty().withMessage("нужно shop_name"),
    check('shop_adress').notEmpty().withMessage("нужно shop_adress"),
], postShopInfo)

router.post("/postStringInfo",[
    check('string_name').notEmpty().withMessage("нужно string_name"),
    check('string_company').notEmpty().withMessage("нужно string_company "),
    check("num_of_strings").notEmpty().withMessage("нужно num_of_strings")
    .isNumeric().withMessage('нужно число')
], postStringInfo)

router.get("/allShops", getAllShops)
router.get("/allStrings", getAllStrings)
router.get("/allInfo", getAllInfo)