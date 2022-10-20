import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}
class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ description, name }: IRequest): void {
        const categoriesAlreadyExists =
            this.categoriesRepository.findByName(name);

        if (categoriesAlreadyExists) {
            throw new Error("Categoria já existe");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
