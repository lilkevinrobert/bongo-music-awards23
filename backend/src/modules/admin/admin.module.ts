import { Module } from '@nestjs/common';
import { GenreResolver } from './resolvers/genre.resolver';
import { GenreService } from './services/genre.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Genre} from "./entity/genre";

@Module({
  imports: [TypeOrmModule.forFeature([Genre])],
  providers: [GenreResolver, GenreService]
})
export class AdminModule {

}
