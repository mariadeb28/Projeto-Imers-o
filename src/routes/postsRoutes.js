import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizaNovoPost } from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000", 
    optionsSucessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads", storage});

const routes = (app) => {
    app.use(express.json());
// Habilita o middleware para analisar o corpo das requisições que contêm dados no formato JSON.
app.use(cors(corsOptions));

// rota para buscar todos os posts;
app.get("/posts", listarPosts);

// rota para criar um post
app.post("/posts", postarNovoPost);

app.post("/upload",upload.single("image"), uploadImagem);

app.put("/upload/:id", atualizaNovoPost);

}

export default routes;

