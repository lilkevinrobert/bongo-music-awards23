package tz.co.bongomusic.server.controlers.admin;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tz.co.bongomusic.server.models.Genre;
import tz.co.bongomusic.server.serviceImpl.GenreServiceImpl;

import java.util.logging.Logger;

@RestController
@RequestMapping("/api/v1/admin/genres")
@CrossOrigin(origins = "http://localhost:5173",maxAge = 3600)
public class GenreController {
    private static final Logger logger = Logger.getLogger(Genre.class.getName());

    private final GenreServiceImpl genreService;

    @Autowired
    public GenreController(GenreServiceImpl genreService) {
        this.genreService = genreService;
    }

    // create genre
    @PostMapping("/")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Genre> createGenre(@Valid @RequestBody Genre genre){

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(genreService.createGenre(genre));
    }

    @GetMapping("/")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Iterable<Genre>> getAllGenres(){
        return ResponseEntity
                .ok()
                .body(genreService.findAllGenres());
    }

    // update genre
//    @PutMapping("{genreId}")
//    @ResponseStatus(HttpStatus.CREATED)
//    public ResponseEntity<Genre> updateGenre(@Valid @PathVariable("genreId") String id, @RequestBody Genre genre){
//        return new ResponseEntity<>(genreService.updateGenre(id,genre), HttpStatus.CREATED);
//    }

    // read genre
    @GetMapping("{genreId}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Genre> getGenre(@PathVariable("genreId") String genreId){
        return new ResponseEntity<>(genreService.findGenreById(genreId),HttpStatus.OK);
    }

    // delete genre
    @DeleteMapping("{genreId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteGenre(@PathVariable("genreId") String genreId){
        genreService.deleteGenre(genreId);
    }

    @GetMapping("/count")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Long> count(){
        return new ResponseEntity<>(genreService.count(), HttpStatus.OK);
    }

    // count categories from genre

}
