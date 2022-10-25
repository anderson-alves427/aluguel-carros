import { container } from "tsyringe";

import { CategoriesRepository } from "../../cars/repositories/implementations/CategoriesRepository";
import { ICategoriesRepository } from "../../cars/repositories/interfaces/ICategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);
