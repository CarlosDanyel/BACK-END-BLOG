import express from "express";
import NoticiasController from '../controllers/noticiasControllers.js';

const router = express.Router();

router
    .get("/noticias", NoticiasController.listarNoticias)
    .get("/noticias/:id", NoticiasController.listarNoticiasPorID)
    .post("/noticias", NoticiasController.cadastrarNoticia)
    .put("/noticias/:id", NoticiasController.atualizarNoticia)
    .delete("/noticias/:id", NoticiasController.excluirNoticia)

export default router;    