import express from "express";
// import noticias from "./noticiasRoutes.js"
import cors from "cors";
import path from "path";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tempFolder = path.resolve(__dirname, "../..", "public");
const routes = (app) => {

    app.use("/files", express.static(tempFolder));
    
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-OrigIn", "https://portfolio-carlosdanyel.vercel.app");
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
