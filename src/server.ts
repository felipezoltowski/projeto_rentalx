import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specificatons.routes";

const app = express();

// Middleware
app.use(express.json());

app.get("/", (request, response) => {
    return response.json({ message: "Hello World!" });
});

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);

app.listen(3333, () => console.log("Server is running"));
