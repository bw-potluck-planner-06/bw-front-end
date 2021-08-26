import "./App.css";

import { Link, Route, Switch } from "react-router-dom";

import Events from "./components/Events";
import LandingPage from "./components/LandingPage";
import Loading from "./components/Loading";
import Login from "./components/Login";
import Register from "./components/Register";
import SelectedPotluck from "./components/SelectedPotluck";

function App() {
  return (
    <div className="App">
      <nav>
        <div>
          <Link to="/register">Sign Up</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/">Logout</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/events/:id" component={SelectedPotluck} />
        <Route path="/register" component={Register} />
        <Route path="/events" component={Events} />
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
