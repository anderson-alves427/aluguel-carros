import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../cars/useCases/createCategory/CreateCategoryController";
import importCategoryController from "../cars/useCases/importCategory";
import listCategoriesController from "../cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController().handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController().handle(request, response);
});

export { categoriesRoutes };
