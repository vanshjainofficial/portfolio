import React from "react";
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://cart-zilla-sable.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={mock10} className="zoom" alt="Filmate AI" width="100%" />
                    </a>
                    <a href="https://cart-zilla-sable.vercel.app/" target="_blank" rel="noreferrer">
                        <h2>Cartzila - Flash Sale</h2>
                    </a>
                    <p>
                        Cartzilla 🔥 is a flash sale web app built with React, Vite, and REST API integration, featuring a live countdown timer, dynamic products, and cart management.
                    </p>
                </div>

                <div className="project">
                    <a href="https://video-chat-app-vj8067202-gmailcoms-projects.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={mock09} className="zoom" alt="High Speed Chase" width="100%" />
                    </a>
                    <a href="https://video-chat-app-vj8067202-gmailcoms-projects.vercel.app/" target="_blank" rel="noreferrer">
                        <h2>Vansh's Video Chat App</h2>
                    </a>
                    <p>
Video calling and chat app (1:1) built with React.js, WebRTC, and Socket.io, including full backend integration.
                    </p>
                </div>

                <div className="project">
                    <a href="https://react-invoice-vj.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={mock08} className="zoom" alt="Astro Raiders" width="100%" />
                    </a>
                    <a href="https://react-invoice-vj.vercel.app/" target="_blank" rel="noreferrer">
                        <h2>React Invoice Generator</h2>
                    </a>
                    <p>
Invoice Generator built with React and Vite for fast, responsive invoice creation.
It Features dynamic item management, automatic calculations, and PDF export using html2canvas and jsPDF.
                    </p>
                </div>

                <div className="project">
                    <a href="https://vanshjainofficial.github.io/" target="_blank" rel="noreferrer">
                        <img src={mock07} className="zoom" alt="Datum" width="100%" />
                    </a>
                    <a href="https://vanshjainofficial.github.io/" target="_blank" rel="noreferrer">
                        <h2>Vansh Game Portal</h2>
                    </a>
                    <p>
🎮 Vansh Game Portal is a lightweight, no-login gaming hub with 440+ free, browser-based games.
Website built with HTML, CSS, and JavaScript, it’s fast, ad-free, and works on mobile and desktop.
                    </p>
                </div>

                <div className="project">
                    <a href="https://vansh-blockchain-simv3.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={mock06} className="zoom" alt="WeManage" width="100%" />
                    </a>
                    <a href="https://vansh-blockchain-simv3.vercel.app/" target="_blank" rel="noreferrer">
                        <h2>Vansh Blockchain Simulator</h2>
                    </a>
                    <p>
A minimal JavaScript blockchain using elliptic for key pair generation and digital signatures.
Supports creating and signing transactions with sender, recipient, and amount details.
                    </p>
                </div>

                <div className="project">
                    <a href="https://vanshjainofficial.github.io/snwproject/" target="_blank" rel="noreferrer">
                        <img src={mock05} className="zoom" alt="COVID-19 Dashboard" width="100%" />
                    </a>
                    <a href="https://vanshjainofficial.github.io/snwproject/" target="_blank" rel="noreferrer">
                        <h2>Elegant HTML & CSS Webpage</h2>
                    </a>
                    <p>
A simple webpage built with HTML and styled using CSS.
Clean, lightweight, and easy to customize.
Perfect for basic web projects or learning web design fundamentals.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Project;