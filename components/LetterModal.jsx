"use client";

import { useEffect, useState } from "react";

export default function LetterModal() {
  const [opened, setOpened] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!hidden) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <div className="letter-scene">
      <div className={`mail ${opened ? "is-open" : ""}`}>
        <div className="mail-card">
          <div className="mail-letter">
            <div className="mail-letter-paper">
              <span className="mail-pill">Happy Birthday 💜</span>
              <h2>Untuk Kamu</h2>
              <p>
                Selamat ulang tahun yaa, sayang. Semoga di umur yang baru ini
                kamu selalu dikelilingi banyak hal baik, sehat terus, bahagia
                terus, dan semua yang kamu semogakan bisa pelan-pelan tercapai.
              </p>
              <p>
                Website kecil ini aku bikin sebagai tempat kecil buat nyimpen
                beberapa cerita, kenangan, dan hal-hal sederhana yang telah kita
                lalui.
              </p>
              <p>
                Terima kasih yaa udah hadir dan jadi salah satu bagian paling
                berarti di hidup aku.
              </p>

              <button
                className="mail-enter-btn"
                onClick={() => setHidden(true)}
              >
                Masuk
              </button>
            </div>
          </div>

          <div className="mail-body"></div>
          <div className="mail-side-left"></div>
          <div className="mail-side-right"></div>
          <div className="mail-flap"></div>

          {!opened && (
            <button
              className="mail-open-btn"
              onClick={() => setOpened(true)}
            >
              Buka Surat
            </button>
          )}
        </div>
      </div>
    </div>
  );
}