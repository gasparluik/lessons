import React from 'react';
import './AddItemForm.css';
import { useRef } from 'react';

function AddItemForm(props) {
    
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const categoryInputRef = useRef();

    function formSubmitHandler(e) {
        e.preventDefault();
        //console.log("Vormi sisestus õnnestus");

        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;

        const item = {
            name: nameValue,
            price: priceValue,
            category: categoryValue
        }
        
        //console.log(item);

        props.onAddItem(item);

        }

    return (
        <form onSubmit={formSubmitHandler}>
            <label>Eseme nimi</label><br />
            <input type="text" placeholder="Example product..." required ref={nameInputRef}/><br />
            <label>Eseme Hind</label><br />
            <input type="number" placeholder="priceless" required ref={priceInputRef}/><br />
            <label>Eseme kategooria</label><br />
            <select placeholder="Example" required ref={categoryInputRef}>
                <option value="expensive" >Expensive</option>
                <option value="cheap" >Cheap</option>
                <option value="onSale" >On sale</option>
                <option value="gaming" >Gaming</option>
                <option value="Photography" >Photography</option>
            </select><br />
            <button className="btn" type="submit">Submit</button>
        </form>
    );
}

export default AddItemForm;
