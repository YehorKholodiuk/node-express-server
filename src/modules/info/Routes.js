import {Router} from "express";
import info from "./info";
import userRegister from "../user/userRegister";
import userGetAll from "../user/userGetAll";
import userGetById from "../user/userGetById";
const router = Router();

router.post('/',info);
router.get('/',info);


export default router;
