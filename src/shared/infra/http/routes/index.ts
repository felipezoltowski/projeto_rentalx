import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specificatons.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);
router.use(authenticateRoutes);

export { router };