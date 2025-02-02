
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CategoryList from "../components/CategoryList";
import './ListView.css'

function DisplayCategories() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedCategories, setLoadedCategories] = useState([]);
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8080/categories').then(res => {
            return res.json();
        }).then(data =>{
            console.log(data);
            setIsLoading(false);
            setLoadedCategories(data);
            setPosts(data)
        });
    },[])

    if (isLoading) {
        return (<div>Laeb...</div>)
    //display data in a table from

    }
//<CategoryList categories={loadedCategories} />
    return (
        <div className="form">
            <h1>Kategooriad</h1>
            <div className="form-inner">
                <ul>
                    {
                        posts.map(post => {
                            return(
                                <li key={post.id}>
                                    <div className="item">
                                        Name: {post.name},
                                        Type: {post.type}
                                        <br />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <Link to="add-category">
                    <button>Lisa uus</button>
                </Link>
            </div>
        </div>
    )
}

export default DisplayCategories;