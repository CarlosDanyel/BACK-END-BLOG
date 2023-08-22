import express from "express";
import noticias from "./noticiasRoutes.js";

import cors from "cors";

const routes = (app) => {

    app.use("/files", express.static("public/"));

    app.route("/").get((req, res) => {
        res.status(200).send({ titulo: "Pagina Blog" });
    });

    app.use(
        express.json(),
        cors(),
        noticias
    );
};

export default routes;
