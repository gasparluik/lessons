package ee.gaspar.backend.controller;

import ee.gaspar.backend.model.Category;
import ee.gaspar.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("category")
    public List<Category> getCategories(){
        return categoryService.getCategories();
    }

    @PostMapping("categories")
    public String postCategory(@RequestBody Category category){
        categoryService.saveCategory(category);
        return "Kategooria " + category +" tüüp on  " + category;
        //Postmanis saab POST meetodit checkida. Kasuta RAW inputi ja URL-iks localhost:8080/items
    }

    //tee serverile restart
    // localhost:8080/items

    //delete päring
    //edit päring
    //view one item päring

    //andmebaas

    }
