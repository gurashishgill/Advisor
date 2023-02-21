import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <>
      <div className="home_container">
        <div className="home_container_content">
          <h1 className="home_main">We Empower Independent Advisors</h1>
          <p className="home_para">
            As a financial advisor, your clients have placed their futures in
            your hands. Advisor.com provides solutions and guidance to give that
            future the attention it deserves.
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
