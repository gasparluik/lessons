import {Link} from "react-router-dom";

function Item(props) {
    function handleDelete(itemId){
        props.deleteItem(itemId);
        console.log(itemId);
    }

  return (
    <div>
        {props.isSingleItemView ?
            <div>
                <div className="itemName">{props.name}</div>
                <div className="itemPrice">{props.price}</div>
                <div className="itemCategory">{props.category}</div>
            </div> :
            <Link to={'item/${props.id'}>
                <div className="itemName">{props.name}</div>
                <div className="itemPrice">{props.price}</div>
                <div className="itemCategory">{props.category}</div>
            </Link>
        }
        { props.isAddToCartButton ? <button>Lisa ostukorvi</button> :
            <div>
            <button onClick={()=>handleDelete(props.id)}>X</button>
            <Link to={'edit-item/${props.id'}>
                <button>Muuda toodet</button>
            </Link>
            </div> }

      <div className="isAddToCart">{props.isAddToCartButton.toString()}</div>
    </div>
  )
}

export default Item;

// Home/AdminHome "true" => ItemList => Item (props.kaudu võtsin vastu)
//Itemis toimub kustutamine => ItemList => AdminHome (Tehakse APisse päring) (props. kaudu saadan)