"use client";

import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Satellite } from "lucide-react";

export default function Home() {
  return (
    <main className="hero-container">
      <div className="hero-video-container">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/drone-footage.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Aerial Perspectives</h1>
        <p className="hero-subtitle">Capturing the world from above</p>

        <div className="hero-buttons">
          <a href="/portfolio" className="hero-button hero-button-primary">
            <FontAwesomeIcon icon={faImages} className="button-icon" /> <span>Portfolio</span>
          </a>
          <a href="/services" className="hero-button hero-button-secondary">
            <Satellite className="button-icon" size={30} /> <span>Services</span>
          </a>
          <a href="/contact" className="hero-button hero-button-secondary">
            <FontAwesomeIcon icon={faEnvelope} className="button-icon" /> <span>Contact Me</span>
          </a>
        </div>
      </div>
    </main>
  );
}