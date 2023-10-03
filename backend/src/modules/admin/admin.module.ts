import {Module} from '@nestjs/common';
import {GenreResolver} from './resolvers/genre.resolver';
import {GenreService} from './services/genre.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {GenreEntity} from "./entity/genre.entity";
import {CategoryEntity} from "./entity/category.entity";
import {CategoryService} from "./services/category.service";
import {CategoryResolver} from "./resolvers/category.resolver";

@Module({
    imports: [TypeOrmModule.forFeature([GenreEntity, CategoryEntity])],
    providers: [
        GenreResolver,
        GenreService,
        CategoryService,
        CategoryResolver
    ]
})
export class AdminModule {

}
