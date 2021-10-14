package ee.gaspar.backend.controller;

import ee.gaspar.backend.service.ItemService;
import ee.gaspar.backend.model.Item;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> getItems(){
        return itemService.getItems();
    }

    @PostMapping("items")
    public String postItem(@RequestBody Item item){
        itemService.saveItem(item);
        return "Ese edukalt lisatud " + item;
        //Postmanis saab POST meetodit checkida. Kasuta RAW inputi ja URL-iks localhost:8080/items
    }

    //tee serverile restart
    // localhost:8080/items

    //delete päring
    //edit päring
    //view one item päring

    //andmebaas

}
