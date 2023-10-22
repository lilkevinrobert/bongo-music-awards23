import { Injectable } from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import  User  from "../entity/user.entity"

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    //VALIDATE USER BY PASSWORD AND EMAIL
    public validate(email: string, password: string): User | null{

    }
}
