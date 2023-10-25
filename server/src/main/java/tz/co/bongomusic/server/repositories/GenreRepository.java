package tz.co.bongomusic.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tz.co.bongomusic.server.models.Genre;

import java.util.Optional;

public interface GenreRepository extends JpaRepository<Genre, String> {

    Optional<Genre> findGenreById(String id);
    boolean existsById(String id);

    void deleteById(String id);

}
