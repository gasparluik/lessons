import './App.css';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

import AddItem from './pages/AddItem';
import AddCategory from "./pages/AddCategory";

import DisplayCategories from "./pages/DisplayCategories";
import "./pages/ListView.css"
import DisplayItems from "./pages/DisplayItems";

function App() {
  return (
    <div>
      <Navbar />
        <div className="body">
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/cart'>
                <Cart />
            </Route>
            <Route path='/item-list'>
                <DisplayItems />
            </Route>
            <Route path='/add-item'>
                <AddItem />
            </Route>
            <Route path='/category-list'>
                <DisplayCategories />
            </Route>
            <Route path='/add-category'>
                <AddCategory />
            </Route>
        </div>
    </div>
  );
}

export default App;
