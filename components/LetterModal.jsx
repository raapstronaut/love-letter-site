"use client";

import { useEffect, useState } from "react";

export default function LetterModal() {
  const [opened, setOpened] = useState(false);
  const [hidden, setHidden] = useState(false);

  const basePath =
    process.env.NODE_ENV === "production" ? "/love-letter-site" : "";

  useEffect(() => {
    document.body.style.overflow = hidden ? "" : "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <div className="letter-modal-scene">
      {!opened ? (
        <div className="letter-asset-wrap">
          <img
            className="letter-asset-img"
            src={`${basePath}/images/letter.svg`}
            alt="Surat"
          />

          <button
            type="button"
            className="letter-asset-heart"
            onClick={() => setOpened(true)}
            aria-label="Buka surat"
          >
            ❤
          </button>

          <p className="letter-asset-hint">klik hati merahnya</p>
        </div>
      ) : (
        <div className="letter-paper-view">
          <div className="letter-paper-sheet">
            <span className="letter-paper-pill">Happy Birthday 💌</span>

<h2>Untuk Adek</h2>

<p>
  Selamat ulang tahun yang ke-22 yaa sayanggg. Semoga di umur yang baru ini, adek selalu dikelilingi hal-hal baik, sehat terus, bahagia terus, dan semua yang sedang adek usahakan bisa pelan-pelan sampai ke tujuan.
</p>

<p>
  Mas tahu umur 22 bukan berarti semuanya harus langsung jelas atau sempurna. Tapi mas berharap, di tahun ini adek bisa lebih banyak nemuin alasan buat tenang, lebih kuat ngejalanin hal-hal yang lagi diperjuangin, dan tetap jadi diri adek yang mas kenal.
</p>

<p>
  Website kecil ini mas bikin bukan karena semuanya harus mewah, tapi karena ada banyak hal tentang kita yang rasanya sayang kalau cuma lewat begitu aja.
</p>

<p>
  Semoga waktu adek buka website ini, adek bisa ngerasa kalau setiap bagian
  kecil dari cerita kita tetap punya tempatnya sendiri.
</p>

<button
  type="button"
  className="letter-paper-button"
  onClick={() => setHidden(true)}
>
  Masuk ke Website
</button>
          </div>
        </div>
      )}
    </div>
  );
}