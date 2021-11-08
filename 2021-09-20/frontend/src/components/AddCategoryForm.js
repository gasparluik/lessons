import './AddItemForm.css';
import { useRef } from 'react';

function AddItemForm(props) {
    const nameInputRef = useRef();
    const typeInputRef = useRef();

    function formSubmitHandler(e) {
        e.preventDefault();
        const nameValue = nameInputRef.current.value;
        const typeValue = typeInputRef.current.value;

        const category = {
            name: nameValue,
            type: typeValue
        }
        props.onAddCategory(category);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label>Category</label><br />
            <select>
                hello
            </select>
            <br />
            <input type="text" required ref={nameInputRef} /><br />
            <input type="text" required ref={typeInputRef} /><br />
            <button>Add category</button>
        </form>
    );
}

export default AddItemForm;