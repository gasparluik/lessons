import './AddItemForm.css'
import { useRef } from 'react';


function AddCategoryForm(props) {
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
            <div className="form-inner">
                <div className="">
                    <select required ref={typeInputRef} >
                        <option>PREMIUM</option>
                        <option>DELUXE</option>
                        <option>BASIC</option>
                    </select>
                </div>
                <br />
                <label>Category name </label>
                <input placeholder="...." type="text" required ref={nameInputRef} />
                <br />
                <button>Add category</button>
            </div>

        </form>
    );
}

export default AddCategoryForm;