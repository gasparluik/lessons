package ee.gaspar.backend.controller;

import ee.gaspar.backend.model.Category;
import ee.gaspar.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("categories")
    public List<Category> getCategories() {
        return categoryService.getCategories();
    }

    @PostMapping("categories")
    public String postCategories(@RequestBody Category category) {
        categoryService.saveCategory(category);
        return "Kategooria edukalt lisatud: " + category.getName();
    }

    // tehke serverile restart
    // localhost:8080/items

    // delete päringu
    // edit päringu
    // view one item päringu

    // andmebaas

    // kategooria osas
}
