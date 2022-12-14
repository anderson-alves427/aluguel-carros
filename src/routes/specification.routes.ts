import { Router } from "express";

import { createSpecificationController } from "../cars/useCases/createSpecification";
import { listSpecificationController } from "../cars/useCases/listSpecification";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

specificationRoutes.get("/", (request, response) => {
    return listSpecificationController.handle(response);
});

export { specificationRoutes };
