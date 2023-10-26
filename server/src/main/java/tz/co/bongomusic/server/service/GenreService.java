package tz.co.bongomusic.server.service;

import tz.co.bongomusic.server.models.Genre;

public interface GenreService {

     Genre findGenreById(String id);
     Genre createGenre(Genre genre);

     void deleteGenre(String id);

     Iterable<Genre> findAllGenres();

     //Genre updateGenre(String id, Genre genre);

     long count();
}
