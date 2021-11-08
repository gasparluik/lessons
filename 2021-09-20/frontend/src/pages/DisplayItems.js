
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ListView.css'

function DisplayItems() {
    const [isLoading, setIsLoading] = useState(true);
    //const [loadedItems, setLoadedItems] = useState([]);
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8080/items').then(res => {
            return res.json();
        }).then(data =>{
            console.log(data);
            setIsLoading(false);
            //setLoadedItems(data);
            setItems(data)
        });
    },[])

    if (isLoading) {
        return (<div>Laeb...</div>)
        //display data in a table from

    }
//<CategoryList categories={loadedCategories} />
    return (
        <div className="form">
            <h1>Esemed</h1>
            <div className="form-inner">
                <ul>
                    {
                        items.map(item => {
                            return(
                                <li key={item.id}>
                                    <div className="item">
                                        Name: {item.name},
                                        Price: {item.price},
                                        Category: {item.category}
                                        <br />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <Link to="add-item">
                    <button>Lisa uus</button>
                </Link>
            </div>
        </div>
    )
}

export default DisplayItems;