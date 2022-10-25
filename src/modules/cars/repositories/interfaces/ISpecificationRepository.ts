import { ICreateSpecificationDTO } from "../../dto/ICreateSpecificationDTO";
import { Specification } from "../../entities/Specification";

interface ISpecificationRepository {
    create({ name, description }: ICreateSpecificationDTO): void;
    list(): Specification[];
    findByName(name: string): Specification;
}

export { ISpecificationRepository };
