import { ICreateSpecificationDTO } from "../../dto/ICreateSpecificationDTO";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../interfaces/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specification: Specification[];

    // eslint-disable-next-line no-use-before-define
    private static INSTANCE: SpecificationRepository;

    constructor() {
        this.specification = [];
    }

    public static getInstance(): SpecificationRepository {
        if (!SpecificationRepository.INSTANCE) {
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        }
        return SpecificationRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specification.push(specification);
    }

    list(): Specification[] {
        return this.specification;
    }

    findByName(name: string): Specification {
        const specification = this.specification.find(
            (item) => item.name === name
        );

        return specification;
    }
}

export { SpecificationRepository };
