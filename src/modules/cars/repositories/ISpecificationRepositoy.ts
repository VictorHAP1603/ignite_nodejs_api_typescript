import { Specification } from "../models/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ description, name }: ICreateSpecificationDTO): void;
    findByName(name: string): Specification | undefined
}

export { ISpecificationRepository, ICreateSpecificationDTO }