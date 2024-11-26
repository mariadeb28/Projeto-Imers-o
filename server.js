import express from "express";
// Importa o framework Express para criar a aplicação web.

import routes from "./src/routes/postsRoutes.js";

const posts = [
    // Array de objetos que representam os posts, caso a conexão com o banco de dados falhe.
    // Esses dados podem ser utilizados como dados de exemplo ou para preencher o banco de dados inicialmente.
];

const app = express();
app.use(express.static("uploads"));
// Cria uma instância do Express, que será o núcleo da aplicação.

routes(app);

app.listen(3000, () => {
    console.log("Server Ok!");
});
// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo.



/*function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});*/

