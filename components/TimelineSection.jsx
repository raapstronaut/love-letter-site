import RevealOnScroll from "@/components/RevealOnScroll";

export default function TimelineSection() {
  return (
    <section id="timeline">
      <RevealOnScroll delay={0}>
        <div className="section-title">
          <h2><span className="gradient-text">Cerita Kita</span></h2>
          <p>beberapa momen yang selalu punya tempat spesial buat aku.</p>
        </div>
      </RevealOnScroll>

      <div className="story-list">
        <RevealOnScroll delay={0}>
          <div className="large-story-card">
            <div className="story-text-side">
              <span className="story-badge">❤ Kenangan #1</span>
              <h3>Pertama kali ketemu</h3>
              <p>
                Moment ketika mata kita pertama kali bertemu, dan rasanya semua jadi
                sedikit lebih berbeda dari biasanya.
              </p>
              <div className="story-meta">
                <div className="meta-item">📅 14 Februari 2023</div>
                <div className="meta-item">📍 Coffee Shop Favorite</div>
              </div>
            </div>
            <div className="story-image-side">
              <img src="/images/story1.jpg" alt="Cerita pertama kita" />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <div className="large-story-card">
            <div className="story-text-side">
              <span className="story-badge">❤ Kenangan #2</span>
              <h3>First Date</h3>
              <p>
                Hari pertama kita jalan bareng yang sampai sekarang masih selalu aku
                inget, dari suasananya sampai hal-hal kecil yang bikin aku senyum sendiri.
              </p>
              <div className="story-meta">
                <div className="meta-item">📅 20 Maret 2023</div>
                <div className="meta-item">📍 Tempat favorit kita</div>
              </div>
            </div>
            <div className="story-image-side">
              <img src="/images/story2.jpg" alt="First date kita" />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={240}>
          <div className="large-story-card">
            <div className="story-text-side">
              <span className="story-badge">❤ Kenangan #3</span>
              <h3>Momen Paling Berkesan</h3>
              <p>
                Dari sekian banyak cerita yang kita punya, ada beberapa yang mungkin
                sederhana, tapi justru jadi yang paling susah dilupain.
              </p>
              <div className="story-meta">
                <div className="meta-item">📅 Isi tanggal di sini</div>
                <div className="meta-item">📍 Isi lokasi di sini</div>
              </div>
            </div>
            <div className="story-image-side">
              <img src="/images/story3.jpg" alt="Momen berkesan kita" />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}