import express from "express";
import path from "path";
import url from "url";

const app = express();
const porta = 3000;

const direotioAtual = url.fileURLToPath(import.meta.url);
const direotioPublic = path.join(direotioAtual, "../..", "/public");

app.use(express.static(direotioPublic));
// app.use(express.json());

app.listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}`);
});

export { app, direotioPublic };