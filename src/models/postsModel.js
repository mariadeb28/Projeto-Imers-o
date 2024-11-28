import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
// Importa a função para conectar ao banco de dados, definida em dbConfig.js.

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)
// Estabelece a conexão com o banco de dados usando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO. 
// A palavra-chave 'await' indica que a função é assíncrona e aguarda a conclusão da conexão.

export async function getTodosPosts(){
        // Função assíncrona para buscar todos os posts do banco de dados.
        const db = conexao.db("imersao-instabytes");
        // Obtém o banco de dados com o nome "imersao-instabytes" a partir da conexão estabelecida.
        const colecao = db.collection("posts");
        // Obtém a coleção "posts" dentro do banco de dados.
        return colecao.find().toArray();
        // Executa uma consulta para encontrar todos os documentos da coleção e retorna os resultados como um array.
    }

export async function criarPost(novoPost){
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);

}    

export async function atualizarPost(id, novoPost){
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});

}   


