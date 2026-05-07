"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [greeting, setGreeting] = useState("Evening");

  useEffect(() => {
    const hour = new Date().getHours();
    let value = "Night";

    if (hour >= 5 && hour < 12) {
      value = "Morning";
    } else if (hour >= 12 && hour < 17) {
      value = "Afternoon";
    } else if (hour >= 17 && hour < 21) {
      value = "Evening";
    }

    setGreeting(value);
  }, []);

  return (
    <section id="home" className="hero-home">
      <div className="top-strip"></div>
      <div className="stars"></div>
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      <div className="hero-content">
        <h1>
          Haii Sayanggg,
          <br />
          <span className="gradient-text">Good</span>{" "}
          <span className="gradient-text">{greeting}</span> 💜
        </h1>

        <p>
          Website kecil ini di bikin untuk tempat buat nyimpen beberapa cerita,
          kenangan, dan hal-hal sederhana yang telah kita lalui.
        </p>

        <a href="#timeline" className="hero-btn">Lihat Cerita Kita</a>
      </div>
    </section>
  );
}