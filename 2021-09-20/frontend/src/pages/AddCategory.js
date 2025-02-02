import AddCategoryForm from '../components/AddCategoryForm'

function AddCategory() {
  function categorySubmitHandler(category){
    try{
      const res =  fetch('http://localhost:8080/categories',{
        method: 'POST',
        body: JSON.stringify(category),
        headers: {
          'Content-Type':'application/json'
        }
      })
      const data = res.json()
      if(res.ok){
        console.log("all good")
        console.log(data)
      }

    } catch(err){
      console.log(err)
    }

  }

  return (
    <div className="form">
      <div className="form-inner">
        <h1>Lisa uus kategooria</h1>
        <AddCategoryForm onAddCategory={categorySubmitHandler}/>
      </div>

    </div>
    );
}

export default AddCategory;