import {Resolver} from "@nestjs/graphql";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {CategoryEntity} from "../entity/category.entity";
import {Repository} from "typeorm";

@Injectable()
export class CategoryService {

    constructor(@InjectRepository(CategoryEntity) private categoryRepository: Repository<CategoryEntity>) {}



}