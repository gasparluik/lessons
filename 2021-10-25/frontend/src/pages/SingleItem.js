import Item from "../components/Item";
import {useEffect, useState} from "react";

function SingleItem(){
    const [item, setItem] = useState(null);

    console.log(itemId);

    //useeffect on selleks, et ei loopiks fetchimist lõpmatuseni.
    useEffect(()=>{
        const itemId = window.location.href.split("/item/")[1];
        fetch("http://localhost:8080/view-item/" + itemId).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            setItem(data);
        })
    },[])

if (!item) {
    return "Loading..."
}
    return (
        <div>
            <Item
                id={item.id}
                name={item.name}
                price={item.price}
                category={item.category}
                isAddToCartButton={true}
                isSingleItemView={true}
            />
        </div>
    )
}

export default SingleItem;