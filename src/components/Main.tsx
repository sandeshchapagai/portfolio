import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import mock10 from '../assets/images/bw1.jpg';
function Main() {

  return (
    <div className="container">

      <div className="about-section">
        <div className="image-wrapper">
          <img src={mock10} alt="Avatar" />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/sandeshchapagai" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sandeshchapagai/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Sandesh Chapagai</h1>
          <p>Mobile Application Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/sandeshchapagai" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sandeshchapagai/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;