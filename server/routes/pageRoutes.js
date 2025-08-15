import { Router } from "express";
import {pageCadastro, pageLogin} from "../controllers/pageControllers.js";
const router = Router()
router.get('/login', pageLogin)
router.get('/cadastro', pageCadastro)
export default router