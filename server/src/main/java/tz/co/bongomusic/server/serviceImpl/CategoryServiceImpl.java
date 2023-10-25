package tz.co.bongomusic.server.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tz.co.bongomusic.server.exceptions.category.CategoryAlreadyExistException;
import tz.co.bongomusic.server.exceptions.category.CategoryNotFoundException;
import tz.co.bongomusic.server.models.Category;
import tz.co.bongomusic.server.repositories.CategoryRepository;
import tz.co.bongomusic.server.service.CategoryService;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void deleteCategory(String id) {
        var category = findCategory(id);
        categoryRepository.deleteById(category.getId());
    }

    @Override
    public Category createCategory(Category category) {
        category.setId(UUID.randomUUID().toString());
        if (categoryRepository.existsById(category.getId())){
            throw new CategoryAlreadyExistException(category.getId());
        }
        return categoryRepository
                .save(category);
    }

    @Override
    public Iterable<Category> findAllCategories() {
        return categoryRepository
                .findAll();
    }

    @Override
    public Category findCategory(String id) {
        return categoryRepository
                .findCategoryById(id)
                .orElseThrow(()-> new CategoryNotFoundException(id));
    }

    @Override
    public Category updateCategory(String id, Category category) {
        return categoryRepository
                .findCategoryById(id)
                .map(existingCategories -> {
                    var newCategory = new Category(
                            existingCategories.getId(),
                            category.getCategoryName(),
                            existingCategories.getCreatedAt(),
                            LocalDateTime.now()
                    );
                    return categoryRepository.save(newCategory);
                })
                .orElseThrow(()-> new CategoryNotFoundException(id));
    }

    @Override
    public long count() {
        return categoryRepository.count();
    }
}
