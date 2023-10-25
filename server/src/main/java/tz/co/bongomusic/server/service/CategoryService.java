package tz.co.bongomusic.server.service;

import tz.co.bongomusic.server.models.Category;

public interface CategoryService {

    void deleteCategory(String id);
    Category createCategory(Category category);
    Iterable<Category> findAllCategories();

    Category findCategory(String id);

    Category updateCategory(String id, Category category);


    long count();


}
