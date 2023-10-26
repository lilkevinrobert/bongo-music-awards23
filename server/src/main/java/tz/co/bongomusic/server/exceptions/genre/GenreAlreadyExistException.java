package tz.co.bongomusic.server.exceptions.genre;

public class GenreAlreadyExistException extends RuntimeException {
    public GenreAlreadyExistException(String id) {
        super("The genre with id "+ id + "Already exist.");
    }
}
