"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function GallerySection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="gallery">
      <RevealOnScroll delay={0}>
        <div className="section-title">
          <h2><span className="gradient-text">Gallery Kita</span></h2>
          <p>Setiap kenangan kita tersimpan disini, selamanya</p>
        </div>
      </RevealOnScroll>

      <div className="gallery-grid">
        <RevealOnScroll delay={0}>
          <div className="gallery-card">
            <img src="/images/foto1.jpg" alt="Foto 1" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="gallery-card">
            <img src="/images/foto2.jpg" alt="Foto 2" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="gallery-card">
            <img src="/images/foto3.jpg" alt="Foto 3" />
          </div>
        </RevealOnScroll>

        {showMore && (
          <>
            <RevealOnScroll delay={0}>
              <div className="gallery-card">
                <img src="/images/foto4.jpg" alt="Foto 4" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="gallery-card">
                <img src="/images/foto5.jpg" alt="Foto 5" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="gallery-card">
                <img src="/images/foto6.jpg" alt="Foto 6" />
              </div>
            </RevealOnScroll>
          </>
        )}
      </div>

      <RevealOnScroll delay={160}>
        <div className="gallery-actions">
          <button
            className="gallery-more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Sembunyikan" : "Lihat Selengkapnya"}
          </button>
        </div>
      </RevealOnScroll>
    </section>
  );
}