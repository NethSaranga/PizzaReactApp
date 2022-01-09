import LoginHome from "./auth/login.js";
import "./auth/loginStyle.css";
import "./auth/signup.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./auth/signup.js";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginHome} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
