package tz.co.bongomusic.server.controlers;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tz.co.bongomusic.server.models.Category;
import tz.co.bongomusic.server.service.CategoryService;

@RestController
@RequestMapping("/api/v1/categories")
public class CategoryController {

    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    // CREATE NEW CATEGORY.
    @PostMapping("/")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Category> createCategory(@Valid @RequestBody Category category){
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(categoryService.createCategory(category));
    }

    // READ SPECIFIC CATEGORY.
    @GetMapping("{categoryId}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Category> findCategory(@PathVariable("categoryId") String categoryId){
        return new ResponseEntity<>(categoryService.findCategory(categoryId),HttpStatus.OK);
    }

    // UPDATE SPECIFIC CATEGORY.
//    @PutMapping("{categoryId}")
//    @ResponseStatus(HttpStatus.CREATED)
//    public ResponseEntity<Category> updateCategory(@Valid @PathVariable("categoryId") String categoryId, @RequestBody Category category){
//        return new ResponseEntity<>(categoryService.updateCategory(categoryId,category),HttpStatus.CREATED);
//    }

    // COUNT AVAILABLE CATEGORIES.
    @GetMapping("/count")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Long> count(){
        return new ResponseEntity<>(categoryService.count(), HttpStatus.OK);
    }


    // DELETE SPECIFIC CATEGORY.
    @DeleteMapping("{categoryId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCategory(@PathVariable("categoryId") String categoryId){
        categoryService.deleteCategory(categoryId);
    }


    // FIND ALL CATEGORIES
    @GetMapping("/")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Iterable<Category>> findAllCategories(){
        return ResponseEntity
                    .ok()
                    .body(categoryService.findAllCategories());
    }






}
