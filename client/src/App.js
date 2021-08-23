import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { Fragment } from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import Register from "./auth/Register";
import Login from "./auth/Login";
import AlertState from "./context/alert/AlertState";
import Alerts from "./components/alerts/Alerts";
import PrivateRoute from "./routing/PrivateRoute";
import ThemeState from "./context/theme/ThemeState";
function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <ThemeState>
            <Router>
              <Fragment>
                <Navbar />

                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </Fragment>
            </Router>
          </ThemeState>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
