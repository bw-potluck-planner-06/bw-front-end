import "./App.css";

import { Link, Route, Switch } from "react-router-dom";
import ButtonLogin from "./components/Button";
import Events from "./components/Events";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import SelectedPotluck from "./components/SelectedPotluck";
import axios from "axios";

// import Loading from "./components/Loading";

function App() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="App" className="landingBackground">
      <nav>
        <div className="actualBtn">
          <Link to="/register">Sign Up</Link>
        </div>
        <div className="actualBtn">
          <Link to="/login">Login</Link>
        </div>
        <div className="actualBtn">
          <Link onClick={logout}>Logout</Link>
        </div>
      </nav>
      <Switch>
        <PrivateRoute path="/events/:id" component={SelectedPotluck} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/events" component={Events} />
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
