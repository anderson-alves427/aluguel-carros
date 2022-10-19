import { Router } from "express";

import { CategoriesRepository } from "../cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../cars/services/CreateCategoryService";

const specificationRoutes = Router();

const categoriesRepository = new CategoriesRepository();

specificationRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(
        categoriesRepository
    );

    createCategoryService.execute({ name, description });

    return response.status(201).send();
});

specificationRoutes.get("/", (request, response) => {
    const listCategories = categoriesRepository.list();

    return response.json(listCategories);
});

export { specificationRoutes };
