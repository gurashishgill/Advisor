import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

const Home = () => {
  const history = useHistory();
  return (
    <>
      <div className="home_container">
        <div className="home_container_content">
          <h1 className="home_main">We Empower Advisors</h1>
          <p className="home_para">
            <h6>
              As a financial advisor, your clients have placed their futures
            </h6>
            <h6> in your hands. Advisor.com provides solutions and guidance</h6>
            <h6> to give that future the attention it deserves.</h6>
          </p>
          <div className="home_button_container">
            <button
              className="home_advisor_button"
              onClick={() => history.push("/AdvisorRegister")}
            >
              Sign up as Advisor
            </button>
            <button
              className="home_client_button"
              onClick={() => history.push("/ClientLogin")}
            >
              Sign in as Client
            </button>
          </div>
        </div>

        <div className="home_container_image">
          <img
            src="https://bootstrapmade.com/demo/templates/Appland/assets/img/hero-img.png"
            alt="home_image"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
