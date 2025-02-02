import Item from '../components/Item';


// [{1},{2},{3}].map({1}=>isAddToCart=true)

function ItemList(props) {
  function deleteItem(itemId){
    props.onDeleteItem(itemId);
  }

  return(
      <div>
    {props.items.map(item=> (
     <Item 
      key={item.id}
      id={item.id}
      name={item.name} 
      price={item.price}
      category={item.category}
      isAddToCartButton={props.isAddToCart}
      deleteItem={deleteItem()}
     />
    ))}
  </div>);
}

export default ItemList;