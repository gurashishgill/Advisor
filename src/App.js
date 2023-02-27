import "./App.css";
import AdvisorLogin from "./components/AdvisorLogin/AdvisorLogin";
import AdvisorRegister from "./components/AdvisorRegister/AdvisorRegister";
import ClientLogin from "./components/ClientLogin/ClientLogin";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AdvisorDashboard2 from "./components/AdvisorDashboard2/AdvisorDashboard2";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import DashboardNavigationBar from "./components/DashboardNavigationBar/DashboardNavigationBar";
import AdvisorProfile from "./components/AdvisorProfile/AdvisorProfile";
import ClientProfile from "./components/ClientProfile/ClientProfile";
import { useSelector } from "react-redux";


function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <>
      {token ? <DashboardNavigationBar /> : <NavigationBar />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AdvisorRegister" component={AdvisorRegister} />
        <Route exact path="/AdvisorLogin" component={AdvisorLogin} />
        <Route exact path="/ClientLogin" component={ClientLogin} />
        <Route exact path="/Dashboard" component={AdvisorDashboard2} />
        <Route exact path="/advisor/profile" component={AdvisorProfile} />
        <Route exact path="/client/profile" component={ClientProfile} />
      </Switch>
    </>
  );
}

export default App;
