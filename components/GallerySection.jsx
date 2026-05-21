"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const basePath =
    process.env.NODE_ENV === "production" ? "/love-letter-site" : "";

  const photos = [
  "/images/galeri1.jpg",
  "/images/galeri2.jpg",
  "/images/galeri3.jpg",
  "/images/galeri4.jpg",
  "/images/galeri5.jpg",
  "/images/galeri6.jpg",
  "/images/galeri7.jpg",
  "/images/galeri8.jpg",
  "/images/galeri9.jpg",
  "/images/galeri10.jpg",
  "/images/galeri11.jpg",
  "/images/galeri12.jpg",
  "/images/galeri13.jpg",
  "/images/galeri14.jpg",
  "/images/galeri15.jpeg",
  "/images/galeri16.jpeg",
  "/images/galeri17.jpeg",
  "/images/galeri18.jpeg",
];
  const currentPhoto = photos[currentIndex];

  const getImagePath = (image) => {
    if (!image) return "";
    return `${basePath}${image.startsWith("/") ? image : `/${image}`}`;
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="gallery">
      <RevealOnScroll delay={0}>
        <div className="section-title">
          <h2>
            <span className="gradient-text">Gallery Kita</span>
          </h2>
          <p>setiap kenangan kecil yang pernah kita simpan di sini.</p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={120}>
        <div className="single-gallery-wrapper">
          <button
            type="button"
            className="gallery-nav-btn gallery-nav-left"
            onClick={goToPrevious}
            aria-label="Foto sebelumnya"
          >
            ‹
          </button>

          <div className="single-gallery-card">
            <div className="single-gallery-image">
              <img
              src={getImagePath(currentPhoto)}
              alt={`Foto gallery ${currentIndex + 1}`}
              />
            </div>
          </div>

          <button
            type="button"
            className="gallery-nav-btn gallery-nav-right"
            onClick={goToNext}
            aria-label="Foto selanjutnya"
          >
            ›
          </button>
        </div>
      </RevealOnScroll>
    </section>
  );
}