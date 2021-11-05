import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import StateExample from "./components/StateExample";
import Posts from "./pages/Posts";

function App() {
  return (
    <div>
      <h1>someText</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/posts" component={Posts}/>
          <Route exact path="/" component={ShowMagic}/>
          <Route exact path="/ex" component={StateExample}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;