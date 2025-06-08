import React from "react";
import "../assets/styles/Timeline.scss";

function Offerings() {
  return (
    <div id="offerings">
      <div className="offerings-container">
        <h1 className="section-title">My Offerings</h1>

        <div className="offering-grid">
<div className="offering-card">
  <h2 className="offering-title">Full-Stack Web Development</h2>
  <p className="offering-description">
    From crafting intuitive front-end interfaces using React, HTML5, and CSS3 to building scalable backend systems with Node.js, Express, and MongoDB/PostgreSQL — I develop full-stack solutions that are fast, secure, and production-ready. I’m experienced in RESTful API development, user authentication, form validation, and deploying apps on platforms like Vercel, Netlify, and Render.
  </p>
</div>


          <div className="offering-card">
            <h2 className="offering-title">Graphic Design</h2>
            <p className="offering-description">
              I design captivating logos, banners, and user interfaces that elevate brand identity and drive user engagement. My work blends aesthetics with functionality, delivering strong visual impact across both web and print mediums.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offerings;
