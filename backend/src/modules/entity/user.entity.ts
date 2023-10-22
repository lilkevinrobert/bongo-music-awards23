import {Entity} from "typeorm";

@Entity({name: "users"})
export class UserEntity {

    name: string

}