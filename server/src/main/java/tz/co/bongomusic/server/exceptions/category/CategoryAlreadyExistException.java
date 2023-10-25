package tz.co.bongomusic.server.exceptions.category;

public class CategoryAlreadyExistException extends RuntimeException{
    public CategoryAlreadyExistException(String id) {
        super("Category with id "+ id + " already exist.");
    }
}
