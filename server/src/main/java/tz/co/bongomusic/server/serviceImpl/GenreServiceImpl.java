package tz.co.bongomusic.server.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tz.co.bongomusic.server.exceptions.genre.GenreAlreadyExistException;
import tz.co.bongomusic.server.exceptions.genre.GenreNotFoundException;
import tz.co.bongomusic.server.models.Genre;
import tz.co.bongomusic.server.repositories.GenreRepository;
import tz.co.bongomusic.server.service.GenreService;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class GenreServiceImpl implements GenreService {

    private final GenreRepository genreRepository;

    @Autowired
    public GenreServiceImpl(GenreRepository genreRepository) {
        this.genreRepository = genreRepository;
    }

    @Override
    public Genre findGenreById(String id) {
        return genreRepository
                .findGenreById(id)
                .orElseThrow(()-> new GenreNotFoundException(id));
    }

    @Override
    public Genre createGenre(Genre genre) {
        genre.setId(UUID.randomUUID().toString());
        if (genreRepository.existsById(genre.getId())){
            throw new GenreAlreadyExistException(genre.getId());
        }
        return genreRepository.save(genre);
    }

    @Override
    public void deleteGenre(String id) {
        var genre = findGenreById(id);
        genreRepository.deleteById(genre.getId());
    }

    @Override
    public Iterable<Genre> findAllGenres() {
        return genreRepository
                .findAll();
    }

    @Override
    public Genre updateGenre(String id, Genre genre) {
        return genreRepository.findGenreById(id)
                .map(existingGenre -> {
                    var genreToUpdate = new Genre(
                            existingGenre.getId(),
                            genre.getGenreName(),
                            existingGenre.getCreatedAt(),
                            LocalDateTime.now()
                    );
                    return genreRepository.save(genreToUpdate);
                })
                .orElseThrow(()-> new GenreNotFoundException(id));
    }

    @Override
    public long count() {
        return genreRepository.count();
    }
}
