import {Genre} from "../genre";
import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Field, Int, ObjectType} from "@nestjs/graphql";

@Entity({name: 'categories'})
@ObjectType()
export class Category {

    @PrimaryGeneratedColumn({type: 'bigint'})
    @Field(type => Int)
    id: number;

    @ManyToOne(() => Genre, genre => genre.categories)
    genre: Genre;
}
