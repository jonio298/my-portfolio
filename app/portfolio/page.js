"use client";
import "../styles.css";
import Image from "next/image";
import { useState } from "react";

export default function Portfolio() {
  const [videoIndex, setVideoIndex] = useState(0);

  // Example video sources (replace with actual URLs if hosting externally)
  const videos = ["/drone-footage.mp4", "/drone-footage2.mp4", "/drone-footage3.mp4"];

  const nextVideo = () => setVideoIndex((videoIndex + 1) % videos.length);
  const prevVideo = () => setVideoIndex((videoIndex - 1 + videos.length) % videos.length);

  return (
    <main className="portfolio-container">
      {/* Title */}
      {/* <h1 className="portfolio-title">My Drone Photography</h1> */}

      {/* Image Gallery */}
      <div className="image-grid">
        <Image src="/images/drone1.jpg" alt="Drone Shot 1" width={500} height={300} className="image-item" />
        <Image src="/images/drone2.jpg" alt="Drone Shot 2" width={500} height={300} className="image-item" />
        <Image src="/images/drone3.jpg" alt="Drone Shot 3" width={500} height={300} className="image-item" />
      </div>
    
      {/* Video Section */}
      {/* <h2 className="portfolio-title mt-10">Aerial Videos</h2> */}
      <div className="video-container">
        {/* <button onClick={prevVideo} className="hero-button hero-button-secondary">⟨</button> */}
        <video className="video-slider" key={videoIndex} src={videos[videoIndex]} controls />
        {/* <button onClick={nextVideo} className="hero-button hero-button-secondary">⟩</button> */}
      </div>
    </main>
  );
}
