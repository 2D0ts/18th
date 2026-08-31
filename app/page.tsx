'use client';

import { ArrowDown, Heart, MapPin, MoonStar, Sparkles } from 'lucide-react';

const letterParagraphs = [
  'And just like that another month have passed, and kahit once lang tayo nagkita this August, I’m still grateful that we got to spend even a little time together. Kahit mabilis lang din yung date natin, still memorable since we were together and may na explore nanaman tayo HAHAHHAHAH.',
  'Honestly, kaya rin gusto kitang makita noon was because I missed you so much. Kahit saglit lang, seeing you again made that day special for me. Ano din yon buff para sa defense HAHAHAHAHHAHAH.',
  'I know this month wasn’t full of adventures or maraming pictures and memories, pero it doesn’t mean that it was any less meaningful. Sometimes, love is also found in waiting, missing each other, and still choosing one another even when life gets busy.',
  'Thank you for staying with me through another month. Eighteen months na tayo, but I still miss you, look forward to seeing you againn, and feel happy whenever I’m with you at syempre busogg hehehe. I hope we get to create more memories soon. Lalo na its your birth month ulitt. Anyways yun lang naman.',
];

export default function Home() {
  const scrollToLetter = () => {
    document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />

        <nav className="topbar" aria-label="Monthsary details">
          <span className="brand-mark">J <Heart size={12} fill="currentColor" /> B</span>
          <span className="date-pill">01 · 09 · 2026</span>
        </nav>

        <div className="hero-copy">
          <p className="eyebrow"><MoonStar size={15} /> a little night made for you</p>
          <div className="month-count" aria-label="18 months">
            <span>18</span>
            <small>months</small>
          </div>
          <h1 id="hero-title">Still choosing you,<br /><em>under every city light.</em></h1>
          <p className="hero-note">Happy monthsary, Bubbyy. Even our shortest moments shine the brightest.</p>
          <button className="read-button" type="button" onClick={scrollToLetter}>
            Read my letter <ArrowDown size={17} />
          </button>
        </div>

        <div className="scroll-whisper" aria-hidden="true">
          <span /> scroll through our little night
        </div>
      </section>

      <section className="memory-section" aria-labelledby="memory-title">
        <div className="section-label"><Sparkles size={14} /> August, in one small moment</div>
        <div className="memory-layout">
          <div className="memory-copy">
            <p className="chapter">01 / THE QUICK DATE</p>
            <h2 id="memory-title">It didn’t have to be long<br />to mean <em>everything.</em></h2>
            <p>
              We only met once this August. It was quick, simple, and over too soon—but I wanted
              to see you because I missed you. Sometimes one moment with the right person is enough
              to light up an entire month.
            </p>
          </div>

          <figure className="memory-card">
            <div className="memory-image" aria-hidden="true" />
            <figcaption>
              <span><MapPin size={14} /> Somewhere beneath the city lights</span>
              <strong>One quick date. One favorite person.</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="pinboard-section" aria-labelledby="pinboard-title">
        <div className="pinboard-intro">
          <p className="section-label"><Heart size={14} fill="currentColor" /> little pieces of us</p>
          <h2 id="pinboard-title">Pinned to my heart.</h2>
          <p>Two photos, one favorite person, and a thousand reasons to keep choosing you.</p>
        </div>

        <div className="pinboard" aria-label="A board of our photos and notes">
          <figure className="polaroid polaroid-one">
            <span className="pushpin blue-pin" aria-hidden="true" />
            <img src="/us-1.jpg" alt="Bubbyy and me sharing a playful moment together" />
            <figcaption>my favorite view ♡</figcaption>
          </figure>

          <aside className="sticky-note note-one">
            <span aria-hidden="true">18</span>
            months of choosing each other
          </aside>

          <figure className="polaroid polaroid-two">
            <span className="pushpin gold-pin" aria-hidden="true" />
            <img src="/us-2.jpg" alt="Bubbyy and me smiling together at night" />
            <figcaption>us, always & always</figcaption>
          </figure>

          <aside className="sticky-note note-two">
            even the shortest dates become my favorite memories
            <Heart size={16} fill="currentColor" />
          </aside>
        </div>
      </section>

      <section className="letter-section" id="letter" aria-labelledby="letter-title">
        <div className="letter-sky" aria-hidden="true" />
        <article className="letter-card">
          <div className="letter-heading">
            <span className="tiny-heart"><Heart size={15} fill="currentColor" /></span>
            <p>For my favorite person</p>
            <h2 id="letter-title">For my Bubbyy</h2>
          </div>

          <div className="letter-body">
            <p className="opening">Happy 18th monthsary, Bubbyy!</p>
            {letterParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p>
              Happy 18th monthsary to us! Iloveyouuu mwaaaa!!!
            </p>
            <div className="signature">
              <span>From your one and only,</span>
              <strong>lovelove</strong>
            </div>
          </div>
        </article>
      </section>

      <footer>
        <Heart size={14} fill="currentColor" />
        <span>18 months & counting</span>
        <span className="footer-line" />
        <span>03.01.25 — forever</span>
      </footer>
    </main>
  );
}
