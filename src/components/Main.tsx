import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnI191t0Ani99WH29zx9kxYrranvv4RKKAvdkgp1OA1P9Iun-exQIrHeK8juY5oI_PmbrfQBf9A5FBWmxZsPrHxi3qorCFXNSm6jVvV1MqmGK3Kt9Ifox0x77fm9QHIgsqavO16sPmtIDZE4k2wCxGQmdp0IDfnbQZNnsvBBkYC82EQo4yAPHRwIzo_XU/s1090/-png-%C3%97--06-08-2025_04_30_AM.png" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/vanshjainofficial/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/thisisvanshjain/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1 class="full-name">Vansh Jain</h1>
          <p>Student</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/vanshjainofficial/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/thisisvanshjain/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
