import { app, direotioPublic } from "./server.js";

app.get("/", (req, res) => {
    res.status(200).sendFile(`${direotioPublic}/pages/home/`);
})

app.get("/teste", (req, res) => {
    res.status(200).sendFile(`${direotioPublic}/pages/teste/`);
});
