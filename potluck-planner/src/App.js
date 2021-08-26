import "./App.css";

import { Link, Route, Switch } from "react-router-dom";
import ButtonLogin from "./components/Button";
import Events from "./components/Events";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";

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

      <div className="Cards">
        <Switch>
          <Route path="/button" component={ButtonLogin} />
          <Route path="/register" component={Register} />
          <Route path="/events" component={Events} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
      {/* <header className="App-header">
        <h1>This is the Potluck Planner App! Welcome!</h1>
      </header> */}
    </div>
  );
}

export default App;
