"use client";
import "../styles.css";
import { useState, useEffect } from "react";
import { FaBuilding, FaCamera, FaHouse, FaCar, FaGlobe } from "react-icons/fa6";

export default function Services() {
  const categories = [
    { name: "Real Estate", icon: <FaHouse size={200} color="#00a2ff" /> },
    { name: "Commercial", icon: <FaBuilding size={200} color="#00a2ff" /> },
    { name: "Insurance", icon: <FaCar size={200} color="#00a2ff" /> },
    { name: "Events", icon: <FaCamera size={200} color="#00a2ff" /> },
    { name: "Web Design", icon: <FaGlobe size={200} color="#00a2ff" /> }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCategory = () => setCurrentIndex((currentIndex + 1) % categories.length);
  const prevCategory = () => setCurrentIndex((currentIndex - 1 + categories.length) % categories.length);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") nextCategory();
      if (event.key === "ArrowLeft") prevCategory();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <main className="portfolio-container">
      <div className="category-scroller">
        <button className="scroller-button" onClick={prevCategory}>⟨</button>
        <div className="category-display centered">
          <div className="glowing-icon-container">
            {categories[currentIndex].icon}
          </div>
          <h2 className="category-title">{categories[currentIndex].name}</h2>
        </div>
        <button className="scroller-button" onClick={nextCategory}>⟩</button>
      </div>
    </main>
  );
}
