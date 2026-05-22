"use client";

import { useRef, useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function AboutSection() {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState("");
  const [playingSong, setPlayingSong] = useState("");

  const basePath =
    process.env.NODE_ENV === "production" ? "/love-letter-site" : "";

  const songs = [
    {
      title: "Enchanted",
      artist: "Taylor Swift",
      file: `${basePath}/music/song1.mp3`,
    },
    {
      title: "Sempurna",
      artist: "Andra and The Backbone",
      file: `${basePath}/music/song2.mp3`,
    },
    {
      title: "About You",
      artist: "The 1975",
      file: `${basePath}/music/song3.mp3`,
    },
  ];

  const handleToggleSong = async (song) => {
    const audio = audioRef.current;
    if (!audio) return;

    const isSameSong = currentSong === song.file;
    const isPlayingThisSong = playingSong === song.file;

    try {
      if (isSameSong && isPlayingThisSong) {
        audio.pause();
        setPlayingSong("");
        return;
      }

      if (!isSameSong) {
        audio.pause();
        audio.src = song.file;
        audio.load();
        setCurrentSong(song.file);
      }

      await audio.play();
      setPlayingSong(song.file);
    } catch (error) {
      console.error("Audio error:", error);
    }
  };

  return (
    <section id="about">
      <RevealOnScroll delay={0}>
        <div className="section-title">
          <h2>
            <span className="gradient-text">About Us</span>
          </h2>
          <p>
            sedikit tentang kita dan beberapa hal yang selalu bikin semuanya
            terasa spesial.
          </p>
        </div>
      </RevealOnScroll>

      <div className="about-card-wrapper">
        <RevealOnScroll delay={0}>
          <div className="about-card">
            <div className="about-image">
              <img src={`${basePath}/images/foto2.jpg`} alt="Foto kita 1" />
            </div>

            <div className="about-text">
              <h3>Dari Hal Sederhana</h3>
              <p>
                Kita memulai dari hal yang sederhana, cuma satu kelompok tugas,
                yang perlahan berubah menjadi cerita yang punya banyak makna.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <div className="about-card">
            <div className="about-image">
              <img src={`${basePath}/images/foto3.jpeg`} alt="Foto kita 2" />
            </div>

            <div className="about-text">
              <h3>Yang Kita Punya</h3>
              <p>
                Hubungan kita engga selalu manis dan kalem, tapi di balik jahil,
                usil, dan saling ngeledek, ada rasa sayang dan peduli yang bikin
                kita terasa aman.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={180}>
        <div className="music-section mini-music-section">
          <div className="music-title mini-music-title">
            <h3>Play Song 🎵</h3>
            <p>beberapa lagu kecil buat nemenin halaman ini.</p>
          </div>

          <div className="mini-music-row">
            {songs.map((song) => {
              const isActive = playingSong === song.file;

              return (
                <div
                  key={song.file}
                  className={`mini-music-card ${
                    isActive ? "mini-music-card-active" : ""
                  }`}
                >
                  <div className="mini-music-info">
                    <h4>{song.title}</h4>
                    <p>{song.artist}</p>
                  </div>

                  <button
                    type="button"
                    className="mini-music-btn"
                    onClick={() => handleToggleSong(song)}
                  >
                    {isActive ? "❚❚ Pause" : "▶ Play"}
                  </button>
                </div>
              );
            })}
          </div>

          <audio
            ref={audioRef}
            loop
            preload="auto"
            style={{ display: "none" }}
            onEnded={() => setPlayingSong("")}
            onPause={() => setPlayingSong("")}
          />
        </div>
      </RevealOnScroll>
    </section>
  );
}