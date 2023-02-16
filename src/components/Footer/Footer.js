import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div class="footer">
      <div class="contain">
        <div class="col">
          <h1>Developers</h1>
          <ul>
            <li>Mosh</li>
            <li>Mike</li>
            <li>John Smith</li>
            <li>Jayed Ahsan</li>
            <li>Jarif Kahn</li>
          </ul>
        </div>
        <div class="col">
          <h1>Creation</h1>
          <ul>
            <li>Chat-bot</li>
            <li>Social-site</li>
            <li>Software</li>
            <li>Games</li>
            <li>News-blogs</li>
          </ul>
        </div>
        <div class="col">
          <h1>About</h1>
          <ul>
            <li>Terms</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Education</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div class="col">
          <h1>Website</h1>
          <ul>
            <li>Codoxia</li>
            <li>Codo Code</li>
            <li>CodePotro</li>
            <li>CodeRunner</li>
            <li>Code-templates</li>
            <li>CodeKhan</li>
          </ul>
        </div>
        <div class="col">
          <h1>Support</h1>
          <ul>
            <li>Contact us</li>
            <li>Send Email</li>
            <li>Buy a phone</li>
          </ul>
        </div>
        <div class="col social">
          <h1>Social</h1>
          <img src="https://github.com/AhsanFarabi/A_Beautiful_Day/blob/master/1.png?raw=true" />
          <img src="https://github.com/AhsanFarabi/A_Beautiful_Day/blob/master/2.png?raw=true" />
          <img src="https://github.com/AhsanFarabi/A_Beautiful_Day/blob/master/3.png?raw=true" />
        </div>
        <div class="clearfix"></div>
        <footer class="foot">
          <p>
            {" "}
            Copyright © 2023 - All rights Reserved - Designed by Advisor.com{" "}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
