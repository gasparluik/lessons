import AddItemForm from "../components/AddItemForm";

function AddItem(props){

    function itemSubmitHandler(item) {
        fetch('http://localhost:8080/items', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {'Content-Type':'application/json'}
            });
        //console.log(item);
    }

    return(
        <div>
            <h1>Lisa uus ese</h1>
            <AddItemForm onAddItem={itemSubmitHandler} />
        </div>
    );

}
export default AddItem;