"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function TimelineSection() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentOtherIndex, setCurrentOtherIndex] = useState(0);

  const basePath =
    process.env.NODE_ENV === "production" ? "/love-letter-site" : "";

  const stories = [
    {
      title: "First Date",
      date: "10 Agustus 2024",
      location: "Bukit Pemancar",
      image: "/images/firstdate.JPG",
      featured: true,
      summary:
        "Momen kita pertama kali jalan berdua, yang awalnya awkward banget, tapi justru jadi kenangan yang nggak bisa dilupain.",
      detail:
        "Kita berangkat sebelum Isya ke Bukit Pemancar. Sampe sana kita pesan makanan dan minuman, terus mulai cerita tentang diri masing-masing walaupun masih awkward banget. Tapi justru dari awkward itu semuanya jadi terasa lucu kalau diingat lagi. Kita sempet foto-foto, ngobrol hal random. dengan satu momen itu yang ternyata jadi awal dari banyak cerita setelahnya.",
    },
    {
      title: "Kita Pacaran",
      date: "18 Februari 2026",
      location: "Kontrakan Mamas",
      image: "/images/pacaran.jpeg",
      featured: true,
      summary:
        "Hari ketika cerita yang pelan-pelan tumbuh akhirnya menjadi status yang lebih jelas.",
      detail:
        "H-1 sebelum puasa, sorenya mas ngajak adek main ke kontrakan sambil ngerjain tugas adek. Malemnya abis kita makan, mas tiba-tiba ngasih surprise ke adek pakai bunga sambil nembak adek. Lucunya (kampret juga si), adek minta ulang karena mas kelihatan awkward banget, apalagi sambil direkam. Tapi justru bagian itu yang bikin momennya jadi nggak kaku dan susah dilupain.",
    },
    {
      title: "Ngelukis di McD",
      date: "12 Agustus 2024",
      location: "Mekdi Kedaton",
      image: "/images/lukis.JPG",
      summary:
        "Keluar malam-malam ke Mekdi buat ngelukis gantungan kunci, terus bikin video tiktok bareng.",
      detail:
        "Malem itu kita keluar ke Mekdi buat makan sambil ngelukis gantungan kunci Stitch sama Angel. Setelah selesai ngelukis, kita juga bikin video tiktok random (mana alay lagi). dan jadi salah satu momen kecil yang punya tempat sendiri di cerita kita.",
    },
    {
      title: "Bikin Gelang Couple",
      date: "26 Agustus 2024",
      location: "Momoyo",
      image: "/images/gelang.jpeg",
      summary:
        "Bukan cuma soal gelangnya, tapi tentang waktu yang kita habiskan buat bikin sesuatu bareng.",
      detail:
        "Kita ke Momoyo Legundi buat bikin gelang dari manik-manik yang adek beli. Mas bikin tulisan “Mutyaa”, adek bikin “R”, awalnya semuanya masih lucu-lucu aja. Sampe tiba-tiba dari dimensi sebelah ada yang gebrak meja, bikin kaget bjirr terus mana suasananya langsung hening sama awkward lagi. Ini sebenernya momen manis bikin gelang couple, tapi malah ada gebrakan random yang tiba-tiba. Justru karena itu, momennya jadi makin susah dilupain.",
    },
    {
      title: "Main ke Metro",
      date: "16 September 2024",
      location: "Metro",
      image: "/images/metro.JPG",
      summary:
        "Main ke Metro, beli somay langganan, nonton di BES Cinema, pulangnya makan Seafood Tumpah.",
      detail:
        "Hari itu kita main ke Metro. Kita berangkat dari balam jam 10 untuk ngejer film di jam 12. Sebelum nonton di BES Cinema, kita beli somay langganan mas. Mas lupa kita nonton apa,  yang jelas bioskopnya rame banget, dapat seat paling depan, udah gitu kursinya keras banget. Pulangnya kita makan Seafood Tumpah di Metro. Mungkin harinya nggak sempurna, tapi justru detail random kayak gitu yang bikin momennya gampang diingat.",
    },
    {
      title: "Ulang Tahun Mas",
      date: "14 Mei 2025",
      location: "IchibanSushi",
      image: "/images/ultah mas.png",
      summary:
        "Adek jemput mas di Koji, abis itu kita makan ramen yang enak banget.",
      detail:
        "Malem itu kita ngerayain ulang tahun mas. Adek jemput mas di Koji sambil ngasih kado yang isinya banyak banget, ada 20 kado bjirr. Abis itu kita keluar buat makan ramen, dan ramennya ternyata enak banget. Pas pulang, mas buka satu-satu kadonya, dan yap ada yang isinya random bener yaitu SEMVAKKK.",
    },
    {
      title: "Ulang Tahun Adek",
      date: "23 Mei 2025",
      location: "Solaria",
      image: "/images/ultah adek.jpg",
      summary:
        "Ngerayain ulang tahun adek, makan di Solaria pake hack Tiktok, terus foto-foto sebelum pulang.",
      detail:
        "Jarak 9 hari dari ultah mas. Gantian, kali ini adek yang ulang tahun. Kita makan di Solaria sambil nyobain hack Tiktok. Setelah itu mas anter adek ke kos Umi, terus kita sempat foto-foto bareng. Kadon yang mas mungkin masih kurang greget harusnya ada BH nya, tapi hari itu tetap jadi salah satu momen kecil yang seru buat diinget.",
    },
    {
      title: "Ke Pantai",
      date: "04 Juni 2025",
      location: "Pantai Rio",
      image: "/images/pantai.jpeg",
      summary: "Ke Rio by The Beach after mas presentasi tubes.",
      detail:
        "Kita ke Rio by The Beach abis mas presentasi tubes, walaupun kita kena skem sama radit. Di pantai, waktu sore kita sempat tiduran di kursi kayu, ngobrol, istirahat, lalu main air pas mau magrib. Harinya capek tapi seru. Yang paling ngeselin, pas pulang adek malah tidur (emang kebo sih) di jalan dan nggak nemenin mas. Tapi tetap aja, momen itu jadi salah satu hari yang punya suasana sendiri.",
    },
    {
      title: "Maskeran Bareng",
      date: "05 Agustus 2025",
      location: "Koji",
      image: "/images/maskeran.jpeg",
      summary:
        "Karena kunci Koji ilang, kita ke kos amin, maskeran bareng, dan berakhir kita main game dari hp",
      detail:
        "Waktu itu kita abis pulang main, tapi karena kunci Koji hilang, akhirnya kita mampir di kos Amin. Di sana kita maskeran bareng pakai masker adek. Momen yang awalnya biasa aja malah jadi random abis mas pake jilbab sama ciput. Setelah itu kita main game di HP, karena mas jago jadi mas yang menang. Ini salah satu momen yang lucu banget karena benar-benar nunjukin sisi kita yang apa adanya.",
    },
    {
      title: "Karang Indah Mall",
      date: "01 Oktober 2025",
      location: "Karang Indah Mall",
      image: "/images/karang.jpeg",
      summary:
        "Main ke Karang Indah Mall buat nyobain masak mie self service tapi mie mas gaenak.",
      detail:
        "Malem malem kita main ke Karang Indah Mall buat nyobain masak mie self service. Di sana adek gak mau masakin mas, dasar. Akhirnya mas masak sendiri, tapi malah kebanyakan air dan jadi gaenak udah gitu hambar banget. Untung mie adek sedikit lebih enak dari punya mas, jadi masih ada yang berhasil hari itu.",
    },
    {
      title: "MilkyVerse",
      date: "21 Desember 2025",
      location: "Milkyverse",
      image: "/images/milky.jpeg",
      summary:
        "Awalnya mas gamau karena kek buat anak kecil, tapi ternyata jadi salah satu momen paling seru.",
      detail:
        "Kita ke Milkyverse yang ada di Ciplaz. Awalnya mas gamau karena tempatnya kek buat bocil, ya emang iyasi. Tapi begitu kita masuk, malah jadi seru banget. Kita main parkour, trampolin, panahan, sampe ke kolam busa. Capeknya brutal, sampe mas mau jackpot karena kebanyakan lompat-lompat, tapi justru itu yang bikin momennya berkesan. Setelah itu kita bikin video Tiktok, mas agak malu, tapi jujur ini salah satu momen paling seru yang pernah kita punya.",
    },
    {
      title: "Otw KKN",
      date: "06 Januari 2026",
      location: "Itera",
      image: "/images/kkn.jpeg",
      summary:
        "Jadwal KKN kita beda, tapi kita masih sempat ketemu walopun cuma sebentar.",
      detail:
        "Waktu berangkat KKN, jadwal kita beda. Mas berangkat duluan, baru besoknya adek. Abis acara pembukaan KKN, suasananya lagi hectic banget karena mas masih harus ke kos teman dulu buat ambil banner KKN. Untungnya kita masih sempet ketemu di GK1 walopun cuma sebentar terus fotbar, karena mas juga udah ditunggu bis KKN. Mungkin singkat, tapi tetap jadi salah satu momen kecil sebelum kita sama-sama masuk ke cerita KKN masing-masing.",
    },
    {
      title: "Bukber di Metro",
      date: "08 Maret 2026",
      location: "Metro",
      image: "/images/bukber.jpeg",
      summary: "Bukber bareng di Metro sambil keliling naik Astrea.",
      detail:
        "Waktu bulan puasa, adek ada tugas StuKot yang kebetulan banget di Metro. Mas nyusul adek abis buka puasa, walaupun awalnya adek sempet gamau karena naik astrea. tapi abis itu kita keliling sambil makan daging Grill. untung masakan mas lebih enak daripada masakan adek, hihihi. Abis makan, kita jalan-jalan lagi, terus pulangnya mampir beli roti di Momoyo. Sederhana, tapi lengkap: ada jalan-jalannya, ada makannya, ada dramanya, dan ada kita.",
    },
    {
      title: "Photobooth",
      date: "07 Mei 2026",
      location: "Momenku",
      image: "/images/photobooth.jpeg",
      summary: "Photobooth pake jahim masing-masing prodi",
      detail:
        "Setelah dua tahun punya jahim, baru kemarin kita foto bareng pake jahim masing-masing. Kita berangkat sebelum magrib ke photobooth Momenku. mana hasil fotonya kureng lagi, tapi justru itu yang bikin lucu kalo diingat lagi. Abis photobooth, kita beli risol, terus makan es krim. Baru setelah itu kita lanjut nonton film AIN di TM. Harinya ngalir aja, tapi isinya banyak hal kecil yang bikin momen itu tetap berasa.",
    },
    {
      title: "Ulang Tahun Mas",
      date: "14 Mei 2026",
      location: "Zozo Garden",
      image: "/images/ultah mas2.jpeg",
      summary:
        "Adek nyusul ke kontrakan, lalu kita ke Zozo Garden buat ngerayain ulang tahun mas.",
      detail:
        "Abis magrib adek nyusul mas ke kontrakan, terus kita pergi ke Zozo Garden. Sampe sana kita tinggal nunggu makanan karena udah di reservasi. Ternyata ga cuma makan biasa, tiba-tiba ada surprise ulang tahun dari adek + staff yang ikut nyanyiin. Disitu mas maluuu wkwkwk, tapi happy banget si. adek ngadoin mas sepatu, jam tangan, dan bucket bunga buatan adek sendiri yang keren banget. Pulangnya juga khas kita: adek nganterin mas ke kontrakan, lalu mas nganterin adek pulang ke kos adek. Ribet muter-muter, tapi tetap jadi bagian lucu dari hari itu.",
    },
    {
      title: "To Be Continued",
      date: "Masih berlanjut",
      location: "Cerita kita",
      image: "/images/tbc.jpeg",
      summary:
        "Masih ada cerita yang belum kebuka, mungkin karena semestanya belum siap… atau kitanya aja yang belum ada foto bagus.",
      detail:
        "Bagian ini sengaja belum ditulis sampe selesai. Bukan karena ceritanya kosong, tapi karena masih ada momen yang belum datang, belum ketebak, atau mungkin belum sempat difoto dengan angle yang bener. Jadi untuk sekarang, biarin halaman ini jadi ruang kecil yang nyimpen tanda tanya. Siapa tahu nanti isinya jadi momen yang paling random, paling lucu, atau malah paling susah dilupain.",
    },
  ];

  const featuredStories = stories.filter((story) => story.featured);
  const otherStories = stories.filter((story) => !story.featured);
  const currentOtherStory = otherStories[currentOtherIndex];

  const getImagePath = (image) => {
    if (!image) return "";
    return `${basePath}${image.startsWith("/") ? image : `/${image}`}`;
  };

  const goToPreviousOtherStory = () => {
    setCurrentOtherIndex((prevIndex) =>
      prevIndex === 0 ? otherStories.length - 1 : prevIndex - 1
    );
  };

  const goToNextOtherStory = () => {
    setCurrentOtherIndex((prevIndex) =>
      prevIndex === otherStories.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="timeline" className="story-book-section">
      <RevealOnScroll delay={0}>
        <div className="section-title">
          <h2>
            <span className="gradient-text">Cerita Kita</span>
          </h2>
          <p>
            beberapa momen yang selalu punya tempat spesial, dari yang sederhana
            sampe yang susah dilupain.
          </p>
        </div>
      </RevealOnScroll>

      <div className="story-book-wrapper">
        <div className="featured-story-grid">
          {featuredStories.map((story, index) => (
            <RevealOnScroll
              delay={index * 120}
              key={`${story.title}-${story.date}`}
            >
              <article className="featured-story-card">
                <div className="featured-story-image">
                  <img src={getImagePath(story.image)} alt={story.title} />
                </div>

                <div className="featured-story-content">
                  <h3>{story.title}</h3>
                  <p>{story.summary}</p>

                  <div className="story-meta">
                    <div className="meta-item">📅 {story.date}</div>
                    <div className="meta-item">📍 {story.location}</div>
                  </div>

                  <button
                    type="button"
                    className="story-read-button"
                    onClick={() => setSelectedStory(story)}
                  >
                    Baca Cerita
                  </button>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={160}>
          <div className="other-stories-title">
          </div>
        </RevealOnScroll>

        {currentOtherStory && (
          <RevealOnScroll delay={220}>
            <div className="other-story-slider-wrapper">
              <button
                type="button"
                className="other-story-nav other-story-nav-left"
                onClick={goToPreviousOtherStory}
                aria-label="Cerita sebelumnya"
              >
                ‹
              </button>

              <button
                type="button"
                className="other-story-slide-card"
                onClick={() => setSelectedStory(currentOtherStory)}
              >
                <div className="other-story-slide-image">
                  <img
                    src={getImagePath(currentOtherStory.image)}
                    alt={currentOtherStory.title}
                  />
                </div>

                <div className="other-story-slide-content">
                  <h4>{currentOtherStory.title}</h4>
                  <p>{currentOtherStory.summary}</p>

                  <div className="story-meta">
                    <div className="meta-item">📅 {currentOtherStory.date}</div>
                    <div className="meta-item">
                      📍 {currentOtherStory.location}
                    </div>
                  </div>

                  <span className="other-story-slide-link">Baca cerita →</span>
                </div>
              </button>

              <button
                type="button"
                className="other-story-nav other-story-nav-right"
                onClick={goToNextOtherStory}
                aria-label="Cerita selanjutnya"
              >
                ›
              </button>
            </div>
          </RevealOnScroll>
        )}
      </div>

      {selectedStory && (
        <div
          className="story-modal-backdrop"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="story-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="story-modal-close"
              onClick={() => setSelectedStory(null)}
              aria-label="Tutup cerita"
            >
              ×
            </button>

            <div className="story-modal-image">
              <img
                src={getImagePath(selectedStory.image)}
                alt={selectedStory.title}
              />
            </div>

            <div className="story-modal-content">
              <span className="story-label">❤ Cerita Kita</span>
              <h3>{selectedStory.title}</h3>

              <div className="story-meta">
                <div className="meta-item">📅 {selectedStory.date}</div>
                <div className="meta-item">📍 {selectedStory.location}</div>
              </div>

              <p>{selectedStory.detail}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}