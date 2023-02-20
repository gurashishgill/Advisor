import "./App.css";
import AdvisorLogin from "./components/AdvisorLogin/AdvisorLogin";
import AdvisorRegister from "./components/AdvisorRegister/AdvisorRegister";
import ClientLogin from "./components/ClientLogin/ClientLogin";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AdvisorDashboard2 from "./components/AdvisorDashboard2/AdvisorDashboard2";
import Navigationbar from "./components/Navigationbar/Navigationbar";

function App() {
  return (
    <>
      <Navigationbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AdvisorRegister" component={AdvisorRegister} />
        <Route exact path="/AdvisorLogin" component={AdvisorLogin} />
        <Route exact path="/ClientLogin" component={ClientLogin} />
        <Route exact path="/Dashboard" component={AdvisorDashboard2} />
      </Switch>
    </>
  );
}

export default App;
