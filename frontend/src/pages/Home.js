import { Link } from "react-router-dom";
import ItemList from '../components/ItemList';
import React from "react";
import { useState, useEffect } from "react";


function Home(){

    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setIsLoadedItems] = useState([]);

    useEffect(() => {
        
        fetch('http://localhost:8080/items').then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            setIsLoading(false);
            setIsLoadedItems(data);
        });
    
    }, []);


    if(isLoading) {
        return (<div>Laeb...</div>);
    }


    return(
        <div className="loaded-items">
            <ItemList items={loadedItems}/>
        </div>
    )

}
export default Home;