function Category(props){
    return(
        <div>
            <div className="categoryType" >{props.category}</div>
            <div className="categoryId" >{props.id}</div>
        </div>
    )

}
export default Category;