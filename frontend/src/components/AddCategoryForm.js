import React from 'react';
import { useRef } from 'react';

function AddCategoryForm(props) {

    const typeInputRef = useRef();

    function formSubmitHandler(e) {
        e.preventDefault();
        console.log("Vormi sisestus õnnestus");

        const categoryTypeValue = typeInputRef.current.value;

        const category = {
            type: categoryTypeValue
        }

        console.log(category);

        props.onAddCategory(category);

    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label>Kategooria nimetus</label><br />
            <input type="text" placeholder="Example category.." required ref={typeInputRef}/><br />
            <button className="btn" type="submit">Submit</button>
        </form>
    );
}

export default AddCategoryForm;
