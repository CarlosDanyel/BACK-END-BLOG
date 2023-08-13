import express from "express";
import noticias from "./noticiasRoutes.js";

const routes = (app) =>{
    app.route("/").get((req, res) =>{
        res.status(200).send({titulo: "Pagina Blog"})
    })

    app.use(
        express.json(),
        noticias
    )
}

export default routes;