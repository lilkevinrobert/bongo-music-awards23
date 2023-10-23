import { Injectable } from '@nestjs/common';
import {GenreEntity} from "../../entity/genre.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateGenreInput} from "../dto/CreateGenre.input";

@Injectable()
export class GenreService {
    constructor(@InjectRepository(GenreEntity) private genreRepository: Repository<GenreEntity>) {}

    async createGenre(createGenreInput: CreateGenreInput): Promise<GenreEntity>{
        const genre = this.genreRepository.create(createGenreInput);
        return this.genreRepository.save(genre);
    }

    async allGenres() : Promise<GenreEntity[]> {
        return this.genreRepository.find();
    }

    // async getGenre(id: number): Promise<GenreEntity> {
    //     return this.genreRepository.findOneOrFail(id);
    // }

    async removeGenre(id: number): Promise<void> {
        await this.genreRepository.delete(id);
    }


    countGenres(){

    }
}
