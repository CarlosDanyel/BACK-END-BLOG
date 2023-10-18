import express from "express";
import noticias from "./noticiasRoutes.js";

import cors from "cors";

const routes = (app) => {

    app.use("/files", express.static("public/"));
    
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-OrigIn", "*");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
        res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
        app.use(cors());
        next();
    })

    app.route("/").get((req, res) => {
        res.status(200).send({ titulo: "Pagina Blog" });
    });

    app.use(
        express.json(),
        noticias
    );
};

export default routes;
