"use client";
import "../styles.css";
import { useState, useEffect } from "react";
import { FaCamera, FaVideo, FaCalendar } from "react-icons/fa6";

export default function Portfolio() {
  const categories = [
    { name: "Still Shots", icon: <FaCamera className="glowing-icon" size={200} color="#00a2ff" /> },
    { name: "Videos", icon: <FaVideo className="glowing-icon" size={200} color="#00a2ff" /> },
    { name: "Events", icon: <FaCalendar className="glowing-icon" size={200} color="#00a2ff" /> },
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
          {categories[currentIndex].icon}
          <h2 className="category-title">{categories[currentIndex].name}</h2>
        </div>
        <button className="scroller-button" onClick={nextCategory}>⟩</button>
      </div>
    </main>
  );
}