import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}
class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    async execute({ description, name }: IRequest): Promise<void> {
        const categoriesAlreadyExists =
            await this.categoriesRepository.findByName(name);

        if (categoriesAlreadyExists) {
            throw new Error("Categoria já existe");
        }

        await this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
