import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ShowMagic from "./components/ShowMagic";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Signup from "./pages/Signup";
import "./components/Layout.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Header} />
      <div className="body">
        <Switch>
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/" component={ShowMagic} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
