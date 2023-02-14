import "./App.css";
import AdvisorLogin from "./components/AdvisorLogin/AdvisorLogin";
import AdvisorRegister from "./components/AdvisorRegister/AdvisorRegister";
import ClientLogin from "./components/ClientLogin/ClientLogin";
import Dashboard from "./components/Dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AdvisorDashboard from "./components/AdvisorDashboard/AdvisorDashboard";

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AdvisorRegister" component={AdvisorRegister} />
        <Route exact path="/AdvisorLogin" component={AdvisorLogin} />
        <Route exact path="/ClientLogin" component={ClientLogin} />
        <Route exact path="/Dashboard" component={AdvisorDashboard} />
      </Switch>
    </>
  );
}

export default App;
