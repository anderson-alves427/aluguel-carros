import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repositories/interfaces/ISpecificationRepository";

class ListSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationRepository) {}

    execute(): Specification[] {
        const specification = this.specificationRepository.list();

        return specification;
    }
}

export { ListSpecificationUseCase };
