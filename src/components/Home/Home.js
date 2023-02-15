import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/*contains the starting heading of the home*/}
      <div>
        <h1 className="MAIN">Welcome To Advisor.com</h1>
        <h2 className="SUB">
          View all of your accounts, Track Your Investments, Review Your
          Documents At One Place...{" "}
        </h2>
      </div>
      {/*2 para of the home*/}

      <div className="aregister_container">
        <div className="aregister_form_container">
          <form action="">
            <h3 className="MAIN_2">
              Looking For Financial Services For Your Business?
            </h3>
            <h5 className="Experts">Come To The Experts!! </h5>
            <button type="submit">JOIN NOW</button>
          </form>
        </div>
      </div>
      {/*Contains the Advisor and Client blocks with rispective sign in and sign up*/}

      <div className="BLOCK_3">
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
        </div>

        <div className="Aregister_container">
          <div className="Bregister_form_container">
            <form action="">
              <h3>CLIENT ,</h3>
              <h5 className="Log">Log In Into My Account</h5>
              <button type="submit">Sign In</button>
            </form>
          </div>
        </div>
      </div>
      {/*contains the about page,contact page of the home*/}
      <div className="Aregister_container">
        <div className="Cregister_form_container">
          <form action="">
            <h1 className="About"> About Page</h1>
            <h6 className="Project">
              Project Details: This project maintains the database of the
              Investment produced by the clients which is processed and analysed
              by the Expert Advisors. Visitor's can sign up as new Advisors and
              manage their new own databases and implicitly work over the client
              progress and details. This project provides a clean,responsive and
              better performance which enhances the UI Experience...
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
              transmitted in any form, or by any means, electronic or otherwise,
              including photocopying reprinting or recording for any purpose,
              without the express prior written permission of Incedo INC.
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
      </div>
    </>
  );
};

export default Home;
