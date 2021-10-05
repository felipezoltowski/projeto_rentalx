import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

// Middleware
app.use(express.json());

app.get("/", (request, response) => {
    return response.json({ message: "Hello World!" });
});
app.post("/courses", (request, response) => {
    const { name } = request.body;
    return response.json({ name });
});

app.use("/categories", categoriesRoutes);

app.listen(3333, () => console.log("Server is running"));
