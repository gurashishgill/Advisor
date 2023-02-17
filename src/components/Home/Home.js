import React from "react";
import Footer from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="row mx-0 mt-5" style={{ "paddingLeft": '60px' }} >

          <div class="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up">
            <div>
              <h1 className="home_main">We empower independent advisors</h1>
              <p className="home_para">As a financial advisor, your clients have placed their futures in your hands. Advisor.com provides solutions and guidance to give that future the attention it deserves.</p>
              <div className="home_button_container">
                <button className="home_advisor_button">
                  Sign up as Advisor
                </button>
                <button className="home_client_button">
                  Sign up as Client
                </button>
              </div>
            </div>
          </div>

          <div class="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="fade-up">
            <img src="https://bootstrapmade.com/demo/templates/Appland/assets/img/hero-img.png" class="img-fluid" alt="" />
          </div>




        </div>
      </div>

















      {/*

      <div className="home_container">
        {/*contains the starting heading of the home*/}
      {/*} <div className="home_heading">
          <div className="home_heading_container">
            <h1 className="home_main">We empower independent advisors</h1>
            <div className="home_sub">
              <p>
                As a financial advisor, your clients have placed their futures
                in your hands. Advisor.com provides solutions and guidance to
                give that future the attention it deserves.{" "}
              </p>
              <div className="home_button_container">
                <button className="home_advisor_button">
                  Sign up as Advisor
                </button>
                <button className="home_client_button">
                  Sign up as Client
                </button>
              </div>
            </div>
          </div>
        </div>

        */}
      {/*2 para of the home*/}

      {/*
         <div className="home_heading_2">
          <div className="home_heading_2_container">
            <div className="home_card_left">
              <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
              <div className="home_card_content">
                <h1>About Us</h1>
                <h4>Project Details</h4>
                <p>
                  This project maintains the database of the Investment produced
                  by the clients which is processed and analysed by the Expert
                  Advisors. Visitor's can sign up as new Advisors and manage
                  their new own databases and implicitly work over the client
                  progress and details. This project provides a clean,responsive
                  and better performance which enhances the UI Experience...
                </p>
                <h4>Scope</h4>
                <p>
                  👉 Implement Role based Authentication on the App based on the
                  user entitelments
                </p>
                <p>
                  👉 Provide Advisor Ability to Manage and Analyze over the
                  data.
                </p>
                <p>👉 Create a data model based on the information.</p>
                <p>
                  👉Records any number of entries and manages data accordingly.
                </p>
              </div>
            </div>

            <div className="home_card_right">
              <img src="https://media.istockphoto.com/id/1372286955/photo/contact-us.jpg?b=1&s=170667a&w=0&k=20&c=f-szSkE-FyP2zI4rkajWw7jCQrU1VUlsa6jDZm5xScQ=" />
              <div className="home_card_content">
                <h1>Contact Us</h1>
                <h4>Mentors</h4>
                <p>👉 Ankit Jha- ankit.jha@incedoinc.com</p>
                <p>👉 Harshit Gupta- harshit.gupta@incedoinc.com</p>

                <h4>Team Members</h4>
                <p>👉 Gurashish Gill- gurashish.gill@incedoinc.com</p>
                <p>👉 Ishan Sharma- ishaan.sharma@incedoinc.com</p>
                <p>👉 Harsh Mohan - harsh.mohan@incedoinc.com</p>
                <p>👉 Kiran Panwar- kiran.panwar@incedoinc.com</p>
                <p>👉 Daniya Afaq- daniya.afaq@incedoinc.com</p>
                <p>👉 Sakshit Goel- sakshit.goel@incedoinc.com</p>
                <p>👉 Utkarsh Mishra- utkarsh.mishra@incedoinc.com</p>
              </div>
            </div>

            <div className="home_card_left2">
              <img src="https://img.freepik.com/free-vector/pharmaceutical-policy-clipboard-researchers-tiny-people-pharmaceutical-policy-pharmaceutical-lobby-drugs-production-control-concept-pinkish-coral-bluevector-vector-isolated-illustration_335657-1605.jpg?w=2000" />
              <div className="home_card_content">
                <h1>Policy</h1>
                <h4>Copyright 2023-24 INCEDO INC.</h4>
                <p>
                  All Right Reserved.No part of this Document may be
                  reproduced,stored in a retrieval system, distributed or
                  transmitted in any form, or by any means, electronic or
                  otherwise, including photocopying reprinting or recording for
                  any purpose, without the express prior written permission of
                  Incedo INC.
                </p>
                <h4>Requests</h4>
                <p>
                  For Information Requests or for obtaining permission for the
                  use of this work,please submit a written Request to marketing
                  and Communications, INCEDO INC Plot No.248 Udyog Vihar, Phase
                  4,Gurgaon-122015.Email-Communications@incedoinc.com
                </p>
              </div>
            </div>
          </div>
        </div>
         /*}
        {/* <div className="aregister_container">
          <div className="aregister_form_container">
            <form action="">
              <h3 className="MAIN_2">
                Looking For Financial Services For Your Business?
              </h3>
              <h5 className="Experts">Come To The Experts!! </h5>
              <button type="submit">JOIN NOW</button>
            </form>
          </div>
        </div> */}
      {/*Contains the Advisor and Client blocks with rispective sign in and sign up*/}

      {/* <div className="BLOCK_3">
          <div className="Aregister_container">
            <div className="Aregister_form_container">
              <form action="">
                <h3>ADVISOR ,</h3>
                <h5 className="Log">Log In Into My Account</h5>
                <button type="submit">Sign In</button>
                <h6 className="new">Don't Have An Account,</h6>
                <a href="https://www.google.com/">Sign Up</a>
              </form>
            </div>
          </div> */}

      {/* <div className="Aregister_container">
            <div className="Bregister_form_container">
              <form action="">
                <h3>CLIENT ,</h3>
                <h5 className="Log">Log In Into My Account</h5>
                <button type="submit">Sign In</button>
              </form>
            </div>
          </div>
        </div> */}
      {/*contains the about page,contact page of the home*/}
      {/* <div className="Aregister_container">
          <div className="Cregister_form_container">
            <form action="">
              <h1 className="About"> About Page</h1>
              <h6 className="Project">
                Project Details: This project maintains the database of the
                Investment produced by the clients which is processed and
                analysed by the Expert Advisors. Visitor's can sign up as new
                Advisors and manage their new own databases and implicitly work
                over the client progress and details. This project provides a
                clean,responsive and better performance which enhances the UI
                Experience...
              </h6>
              <h6 className="Scope">Scope:</h6>
              <h6 className="Scope Info">
                1: Implement Role based Authentication on the App based on the
                user entitelments
              </h6>
              <h6 className="Scope Info">
                2: Provide Advisor Ability to Manage and Analyze over the data.{" "}
              </h6>
              <h6 className="Scope Info">
                3: Create a data model based on the information.{" "}
              </h6>
              <h6 className="Scope Info">
                4: Records any number of entries and manages data accordingly.{" "}
              </h6>

              <h1 className="Contact">Contact</h1>
              <h6 className="Mentors">Mentors:</h6>
              <h6 className="Mentor_Info">
                1: Ankit Jha- ankit.jha@incedoinc.com
              </h6>
              <h6 className="Mentor_Info">
                1: Harshit Gupta- harshit.gupta@incedoinc.com
              </h6>
              <h6 className="Team_Members">Team Members:</h6>
              <h6 className="Mentor_Info">
                1: Gurashish Gill- gurashish.gill@incedoinc.com
              </h6>
              <h6 className="Mentor_Info">
                2: Ishaan Sharma- ishaan.sharma@incedoinc.com
              </h6>
              <h6 className="Mentor_Info">
                3: Harsh Mohan - harsh.mohan@incedoinc.com
              </h6>
              <h6 className="Mentor_Info">
                4: Kiran Panwar- kiran.panwar@incedoinc.com
              </h6>
              <h6 className="Mentor_Info">
                5: Daniya Afaq- daniya.afaq@incedoinc.com
              </h6>
              <h6 className="Mentor_Info">
                6: Sakshit Goel- sakshit.goel@incedoinc.com
              </h6>
              <h6 className="Mentor_Info">
                7: Utkarsh Mishra- utkarsh.mishra@incedoinc.com
              </h6>
              <h1 className="Policy">Policy Page</h1>
              <h6 className="Copyright">Copyright 2023-24 INCEDO INC.</h6>
              <h6 className="Copyright_Info">
                All Right Reserved.No part of this Document may be
                reproduced,stored in a retrieval system, distributed or
                transmitted in any form, or by any means, electronic or
                otherwise, including photocopying reprinting or recording for
                any purpose, without the express prior written permission of
                Incedo INC.
              </h6>
              <h6 className="Request">REQUESTS</h6>
              <h6 className="Request_Info">
                For Information Requests or for obtaining permission for the use
                of this work,please submit a written Request to marketing and
                Communications, INCEDO INC Plot No.248 Udyog Vihar, Phase
                4,Gurgaon-122015.Email-Communications@incedoinc.com
              </h6>
            </form>
          </div>
        </div> */}
      {/*</div>
      {/*<Footer /> */ }
    </>
  );
};

export default Home;
