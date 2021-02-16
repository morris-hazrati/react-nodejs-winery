import { Route, Switch } from "react-router-dom";
import WineDetailsPage from "./components/wineDetailsPage";
import SearchWinePage from "./components/searchWinePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/lots/:lotCode" component={WineDetailsPage} />
        <Route path="/" exact component={SearchWinePage} />
      </Switch>
    </div>
  );
}

export default App;
