import { Router } from "express";

import { SpecificationRepository } from "../cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../cars/services/CreateSpecificationService";

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateSpecificationService(
        specificationRepository
    );

    createCategoryService.execute({ name, description });

    return response.status(201).send();
});

specificationRoutes.get("/", (request, response) => {
    const listCategories = specificationRepository.list();

    return response.json(listCategories);
});

export { specificationRoutes };
