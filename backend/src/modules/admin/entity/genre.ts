import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Field, ObjectType, Int} from "@nestjs/graphql";
import {Category} from "./category/category";

@Entity({name: 'genres'})
@ObjectType()
export class Genre {

    @PrimaryGeneratedColumn({type: 'bigint'})
    @Field(type => Int)
    id: number;

    // @Column({name: 'genre_id', nullable: false})
    // genreId: string;

    @Column({name: 'genre_name', nullable: false})
    @Field()
    genreName: string;

    @OneToMany(()=> Category, category => category.genre)
    categories: Category[];

    @Column({default: () => 'CURRENT_TIMESTAMP'})
    @Field()
    createdAt: Date;

    @Column({default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
    @Field()
    updatedAt: Date;
}
