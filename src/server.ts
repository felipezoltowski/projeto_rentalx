import express from "express";

import { router } from "./routes";

const app = express();

// Middleware
app.use(express.json());

app.get("/", (request, response) => {
    return response.json({ message: "Hello World!" });
});

app.use(router);

app.listen(3333, () => console.log("Server is running"));
