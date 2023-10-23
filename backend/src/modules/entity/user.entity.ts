import {Column, Entity} from "typeorm";
import {ObjectType} from "@nestjs/graphql";

@Entity({name: "users"})
@ObjectType()
export class UserEntity {

    @Column()
    name: string

}