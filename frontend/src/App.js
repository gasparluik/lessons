//import logo from './logo.svg';

import './App.css';

import { Route } from 'react-router-dom';

import AddItem from './pages/AddItem';
import Cart from './pages/Cart';
import AddCategory from "./pages/AddCategory";
import Home from './pages/Home.js';

import './components/Navbar.css';
import Navbar from './components/Navbar';
import CategoryList from "./components/CategoryList";


function App() {
  return (
    <div>
      <Navbar />
      <Route path = '/' exact>
        <Home />
      </Route>
      <Route path = '/cart'>
        <Cart />
      </Route>
      <Route path = '/add-item'>
        <div>
          <AddItem/>
        </div>
      </Route>
      <Route path = '/add-categories'>
        <div>
            <AddCategory />
        </div>
      </Route>
        <Route path = '/list-categories'>
            <div>
                <CategoryList />
            </div>
        </Route>
    </div>
  );
}

export default App;
