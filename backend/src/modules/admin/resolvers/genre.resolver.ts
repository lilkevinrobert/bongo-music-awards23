import {Resolver, Query, Mutation, Args} from '@nestjs/graphql';
import {Genre} from "../entity/genre";
import {GenreService} from "../services/genre.service";
import {CreateGenreInput} from "../dto/CreateGenre.input";


@Resolver(()=> Genre)
export class GenreResolver {

    constructor(private readonly genreService: GenreService) {}


    @Query(()=>String, {name: 'hello', nullable: true})
    sayHello(): string{
        return "Hello world!";
    }

    @Query(()=> [Genre], {name: 'genres', nullable: true})
     allGenres(): Promise<Genre[]>{
        return  this.genreService.allGenres();
    }

    @Mutation(returns => Genre, {name: 'createGenre'})
    createGenre(@Args('createGenreInput') createGenreInput: CreateGenreInput): Promise<Genre> {
        return this.genreService.createGenre(createGenreInput);
    }



}
