package tz.co.bongomusic.server.exceptions.category;

public class CategoryNotFoundException extends RuntimeException {
    public CategoryNotFoundException(String id) {
        super("Category with id "+id +" not found.");
    }
}
