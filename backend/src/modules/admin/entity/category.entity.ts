import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Field, Int, ObjectType} from "@nestjs/graphql";

@Entity({name: 'category'})
@ObjectType()
export class CategoryEntity {

    @Column({name: 'category_id', nullable: false})
    @PrimaryGeneratedColumn({type: 'bigint'})
    @Field(type => Int)
    category_id: number;

    @Column({name: 'category_name', nullable: false})
    categoryName: string;

}