import { CreateCategoryDTO } from "../dto/CreateCategoryDTO";
import { Category } from "../model/Category";

interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: CreateCategoryDTO): void;
}

export { ICategoriesRepository };
