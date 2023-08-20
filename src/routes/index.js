import express from "express";
import noticias from "./noticiasRoutes.js";

import cors from "cors"; 

const routes = (app) =>{
    app.route("/").get((req, res) =>{
        res.status(200).send({titulo: "Pagina Blog"})
    })

    app.use(
        (cors({origin:"*"})),
        express.json(),
        noticias
    )
}

export default routes;