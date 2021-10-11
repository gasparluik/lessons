package ee.gaspar.backend.controller;

import ee.gaspar.backend.service.ItemService;
import ee.gaspar.backend.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @PostMapping("items")
    public String postItem(@RequestBody Item item) {
        itemService.saveItem(item);
        return "Ese edukalt lisatud " + item.getName();
    }

    // tehke serverile restart
    // localhost:8080/items

    // delete päringu
    // edit päringu
    // view one item päringu

    // andmebaas

    // kategooria osas
}
