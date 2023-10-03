import {Resolver, Query, Mutation, Args} from '@nestjs/graphql';
import {GenreEntity} from "../entity/genre.entity";
import {GenreService} from "../services/genre.service";
import {CreateGenreInput} from "../dto/CreateGenre.input";


@Resolver(()=> GenreEntity)
export class GenreResolver {

    constructor(private readonly genreService: GenreService) {}


    @Query(()=>String, {name: 'hello', nullable: true})
    sayHello(): string{
        return "Hello world!";
    }

    @Query(()=> [GenreEntity], {name: 'genres', nullable: true})
     allGenres(): Promise<GenreEntity[]>{
        return  this.genreService.allGenres();
    }

    @Mutation(returns => GenreEntity, {name: 'createGenre'})
    createGenre(@Args('createGenreInput') createGenreInput: CreateGenreInput): Promise<GenreEntity> {
        return this.genreService.createGenre(createGenreInput);
    }



}
