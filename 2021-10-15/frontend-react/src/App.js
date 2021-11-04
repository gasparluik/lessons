import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/posts" component={Posts}/>
          <Route exact path="/" component={ShowMagic}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;