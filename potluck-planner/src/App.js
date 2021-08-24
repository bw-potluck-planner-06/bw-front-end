import "./App.css";

import { Link, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <nav>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/">Logout</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
      {/* <header className="App-header">
        <h1>This is the Potluck Planner App! Welcome!</h1>
      </header> */}
    </div>
  );
}

export default App;
