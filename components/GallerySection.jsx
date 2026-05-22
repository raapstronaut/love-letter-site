"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
  const timeout = setTimeout(() => {
    goToNext();
  }, 4500);

  return () => clearTimeout(timeout);
}, [currentIndex]);

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
            <div
              className="single-gallery-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {photos.map((photo, index) => (
                <div className="single-gallery-slide" key={`${photo}-${index}`}>
                  <img
                    src={getImagePath(photo)}
                    alt={`Foto gallery ${index + 1}`}
                  />
                </div>
              ))}
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