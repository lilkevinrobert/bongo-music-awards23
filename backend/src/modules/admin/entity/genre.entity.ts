import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {Field, ObjectType, Int} from "@nestjs/graphql";

@Entity({name: 'genres'})
@ObjectType()
export class GenreEntity {

    @PrimaryGeneratedColumn({type: 'bigint'})
    @Field(type => Int)
    id: number;

    // @Column({name: 'genre_id', nullable: false})
    // genreId: string;

    @Column({name: 'genre_name', nullable: false})
    @Field()
    genreName: string;

    @Column({default: () => 'CURRENT_TIMESTAMP'})
    @Field()
    createdAt: Date;

    @Column({default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
    @Field()
    updatedAt: Date;
}
