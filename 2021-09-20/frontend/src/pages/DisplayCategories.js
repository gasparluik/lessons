
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CategoryList from "../components/CategoryList";
import './ListView.css'

function DisplayCategories() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedCategories, setLoadedCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/categories').then(res => {
            return res.json();
        }).then(data =>{
            console.log(data);
            setIsLoading(false);
            setLoadedCategories(data);
        });
    },[])

    if (isLoading) {
        return (<div>Laeb...</div>);
    }

    return (
        <div className="form">
            <div className="form-inner">
                <Link to="add-category">
                    <button>Lisa</button>
                </Link>
                <CategoryList categories={loadedCategories} />
            </div>
        </div>
    )
}

export default DisplayCategories;