import { ICreateSpecificationDTO } from "../../dto/ICreateSpecificationDTO";
import { Specification } from "../../entities/Specification";

interface ISpecificationRepository {
    create({ name, description }: ICreateSpecificationDTO): Promise<void>;
    list(): Promise<Specification[]>;
    findByName(name: string): Promise<Specification>;
}

export { ISpecificationRepository };
