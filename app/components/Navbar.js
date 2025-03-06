"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "../styles.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo with Link (Corrected) */}
      <Link href="/" legacyBehavior>
        <a className="nav-logo">DroneVision</a>
      </Link>

      {/* Desktop Nav Links */}
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      {/* Hamburger Icon (Mobile) */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu (Fixed) */}
      {isOpen && (
        <div className="mobile-menu">
          <ul>
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
            <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
