import express from "express";
const router = express.Router();

import { registrar } from "../controllers/usuarioController.js";

// Autenticación, Registro y Confirmacion de Usuarios
router.post('/', registrar)

export default router;
