import express from "express";

const app = express();

app.use(express.json());

app.get("/teste_debug", (request, response) => {
    const { nome } = request.query;

    console.log("---", nome);

    return response.send("ok");
});

app.listen(8080);
