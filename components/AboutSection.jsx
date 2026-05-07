"use client";

import { useRef, useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function AboutSection() {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState("");
  const [playingSong, setPlayingSong] = useState("");

  const songs = [
    {
      title: "everything u are",
      artist: "Hindia",
      file: "/music/song1.mp3",
      image: "/images/song1.jpg",
    },
    {
      title: "Message In A Bottle",
      artist: "Taylor Swift",
      file: "/music/song2.mp3",
      image: "/images/song2.jpg",
    },
    {
      title: "About You",
      artist: "The 1975",
      file: "/music/song3.mp3",
      image: "/images/song3.jpg",
    },
  ];

  const handleToggleSong = (song) => {
    const audio = audioRef.current;
    if (!audio) return;

    const isSameSong = currentSong === song.file;
    const isPlayingThisSong = playingSong === song.file;

    if (isSameSong && isPlayingThisSong) {
      audio.pause();
      setPlayingSong("");
      return;
    }

    if (isSameSong && !isPlayingThisSong) {
      audio.play().catch(() => {});
      setPlayingSong(song.file);
      return;
    }

    setCurrentSong(song.file);
    setPlayingSong(song.file);

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.load();
        audioRef.current.play().catch(() => {});
      }
    }, 0);
  };

  return (
    <section id="about">
      <RevealOnScroll delay={0}>
        <div className="section-title">
          <h2><span className="gradient-text">About Us</span></h2>
          <p>sedikit tentang kita dan beberapa hal yang selalu bikin semuanya terasa spesial.</p>
        </div>
      </RevealOnScroll>

      <div className="about-card-wrapper">
        <RevealOnScroll delay={0}>
          <div className="about-card">
            <div className="about-image">
              <img src="/images/foto2.jpg" alt="Foto kita 1" />
            </div>
            <div className="about-text">
              <h3>Our Little Story</h3>
              <p>
                nanti bagian ini bisa kamu isi dengan cerita singkat tentang kalian.
                misalnya gimana awal semuanya berjalan, hal kecil yang paling kamu suka,
                atau kenapa hubungan ini punya tempat yang spesial.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <div className="about-card">
            <div className="about-image">
              <img src="/images/foto3.jpg" alt="Foto kita 2" />
            </div>
            <div className="about-text">
              <h3>Why It Matters</h3>
              <p>
                bagian ini bisa kamu isi dengan hal yang lebih personal.
                bisa tentang rasa syukur, momen yang paling berkesan,
                atau alasan kenapa semua perjalanan ini berarti buat kamu.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={180}>
        <div className="music-section">
          <div className="music-title">
            <h3>Lagu Kita 🎵</h3>
            <p>beberapa lagu kecil yang punya cerita sendiri.</p>
          </div>

          <div className="music-cards music-cards-pretty">
            {songs.map((song, index) => {
              const isActive = playingSong === song.file;

              return (
                <RevealOnScroll delay={index * 100} key={index}>
                  <div className={`music-card music-card-pretty ${isActive ? "music-card-active" : ""}`}>
                    <div className="music-cover">
                      <img src={song.image} alt={song.title} />
                    </div>

                    <div className="music-info music-info-pretty">
                      <h4>{song.title}</h4>
                      <p>{song.artist}</p>
                    </div>

                    <button
                      className="music-btn"
                      onClick={() => handleToggleSong(song)}
                    >
                      {isActive ? "❚❚ Pause" : "▶ Play"}
                    </button>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          <audio ref={audioRef} loop style={{ display: "none" }}>
            {currentSong && <source src={currentSong} type="audio/mpeg" />}
          </audio>
        </div>
      </RevealOnScroll>
    </section>
  );
}