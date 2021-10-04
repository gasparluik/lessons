import Category from "./Category";

function CategoryList(props) {

    return(
        <div>
            {props.categories.map(category => (
                <Category
                    type= {category.type}
                    key= {category.id}
                />
            ))};
        </div>
    );

}

export default CategoryList;