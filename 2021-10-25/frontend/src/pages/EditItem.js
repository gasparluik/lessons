import {useEffect, useState, useRef} from "react";

function EditItem(){
    const [item, setItem] = useState(null);
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const categoryInputRef = useRef();


    const itemId = window.location.href.split("/edit-item/")[1];
    console.log(itemId);

    //võtmine
    //useeffect on selleks, et ei loopiks fetchimist lõpmatuseni.
    //TO-DO: api päring eraldi componenti
        //võiks olla eraldi kood päringu jaoks JA vormi jaoks
    useEffect(()=>{
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


    //muutmine
    function formSubmitHandler(e) {
        e.preventDefault();
        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;
        const itemSubmitted = {
            id: item.id,
            name: nameValue,
            price: priceValue,
            category: categoryValue
        }

        fetch('http://localhost:8080/edit-item',{
            method: 'POST',
            body: JSON.stringify(itemSubmitted),
            headers: {
                'Content-Type':'application/json'
            }
        });
    }

    //lisamine
    return (
        <form onSubmit={formSubmitHandler}>
            <label>Eseme nimi</label><br />
            <input type="text" required defaultValue={item.name} ref={nameInputRef} /><br />
            <label>Eseme hind</label><br />
            <input type="number" required defaultValue={item.price} ref={priceInputRef} /><br />
            <label>Eseme kategooria</label><br />
            <input type="text" required defaultValue={item.category} ref={categoryInputRef} /><br />
            <button>Sisesta uus ese</button>
        </form>
    );
}

export default EditItem;