import { Injectable } from '@nestjs/common';
import {Genre} from "../entity/genre";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateGenreInput} from "../dto/CreateGenre.input";

@Injectable()
export class GenreService {
    constructor(@InjectRepository(Genre) private genreRepository: Repository<Genre>) {}

    async createGenre(createGenreInput: CreateGenreInput): Promise<Genre>{
        const genre = this.genreRepository.create(createGenreInput);
        return this.genreRepository.save(genre);
    }

    async allGenres() : Promise<Genre[]> {
        return this.genreRepository.find();
    }

    // async getGenre(id: number): Promise<Genre> {
    //     return this.genreRepository.findOneOrFail(id);
    // }

    async removeGenre(id: number): Promise<void> {
        await this.genreRepository.delete(id);
    }


    countGenres(){

    }
}
