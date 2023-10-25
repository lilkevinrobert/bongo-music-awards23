package tz.co.bongomusic.server.exceptions.genre;

public class GenreNotFoundException extends RuntimeException{
    public GenreNotFoundException(String id) {
        super("The genre with id " + id + " was not found");
    }
}
