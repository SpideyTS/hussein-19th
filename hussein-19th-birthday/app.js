/**
 * Core Application Controller
 * Handles PIN verification, dynamic memory rendering, interactive gadgets, lightbox, and celebration confetti.
 */

document.addEventListener('DOMContentLoaded', () => {
  const scrapbookData = window.scrapbookData;
  const asmr = window.asmr;

  if (!scrapbookData || !asmr) {
    console.error("Required data or audio module not loaded.");
    return;
  }

  initVault(scrapbookData, asmr);
  initAudioToggle(asmr);
  renderScrapbook(scrapbookData, asmr);
  initScrollObserver(asmr);
  initLightbox();
});

/* ==============================================================
   VAULT UNLOCK CONTROLLER (PIN: 2711)
   ============================================================== */
let enteredPin = "";

function initVault(scrapbookData, asmr) {
  const vaultScreen = document.getElementById('vault-screen');
  const pinDots = document.querySelectorAll('.pin-dot');
  const keyBtns = document.querySelectorAll('.key-btn[data-num]');
  const deleteBtn = document.getElementById('key-delete');
  const targetPin = scrapbookData.passcode;

  keyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const num = btn.getAttribute('data-num');
      if (enteredPin.length < 4) {
        enteredPin += num;
        asmr.playKeypadClick(1000 + enteredPin.length * 200);
        updatePinDots();

        if (enteredPin.length === 4) {
          checkPin();
        }
      }
    });
  });

  if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      if (enteredPin.length > 0) {
        enteredPin = enteredPin.slice(0, -1);
        asmr.playKeypadClick(800);
        updatePinDots();
      }
    });
  }

  function updatePinDots() {
    pinDots.forEach((dot, index) => {
      if (index < enteredPin.length) {
        dot.classList.add('filled');
        dot.classList.remove('error');
      } else {
        dot.classList.remove('filled', 'error');
      }
    });
  }

  function checkPin() {
    if (enteredPin === targetPin) {
      asmr.enable();
      updateAudioButtonUI(true);
      asmr.playVaultUnlock();

      setTimeout(() => {
        vaultScreen.classList.add('unlocked');
        setTimeout(() => {
          vaultScreen.style.display = 'none';
        }, 850);
      }, 300);
    } else {
      pinDots.forEach(dot => dot.classList.add('error'));
      setTimeout(() => {
        enteredPin = "";
        updatePinDots();
      }, 450);
    }
  }
}

/* ==============================================================
   FLOATING AUDIO TOGGLE
   ============================================================== */
function initAudioToggle(asmr) {
  const toggleBtn = document.getElementById('audio-toggle-btn');
  if (!toggleBtn) return;

  updateAudioButtonUI(asmr.isEnabled);

  toggleBtn.addEventListener('click', () => {
    const isNowOn = asmr.toggle();
    updateAudioButtonUI(isNowOn);
    if (isNowOn) {
      asmr.playPaperRustle(0.2);
    }
  });
}

function updateAudioButtonUI(isOn) {
  const toggleBtn = document.getElementById('audio-toggle-btn');
  const label = document.getElementById('audio-label');
  if (!toggleBtn || !label) return;

  if (isOn) {
    toggleBtn.classList.add('active');
    label.textContent = "ASMR ON";
  } else {
    toggleBtn.classList.remove('active');
    label.textContent = "SOUND OFF";
  }
}

/* ==============================================================
   RENDER SCRAPBOOK & INTERACTIVE GADGETS
   ============================================================== */
function renderScrapbook(scrapbookData, asmr) {
  const container = document.getElementById('chapters-container');
  if (!container) return;

  let html = '';

  scrapbookData.chapters.forEach(ch => {
    const hasText = ch.text && ch.text.length > 0;
    html += `
      <section class="memory-chapter" id="${ch.id}" data-theme="${ch.theme || 'warm'}">
        <div class="chapter-badge-row">
          <span class="chapter-number-pill">Chapter ${ch.number} · ${ch.tag || 'Memory'}</span>
          <span class="chapter-date-tag">${ch.date}</span>
        </div>

        <h2 class="chapter-title">${ch.title}</h2>
        <div class="chapter-subtitle">${ch.subtitle}</div>

        ${hasText ? `
          <div class="chapter-prose">
            ${ch.text.map(p => `<p>${p}</p>`).join('')}
          </div>
        ` : ''}

        ${renderChapterGadgets(ch)}
      </section>
    `;
  });

  html += renderFinale(scrapbookData);

  container.innerHTML = html;

  attachGadgetEventListeners(asmr);
}

function renderChapterGadgets(ch) {
  let gadgets = '';

  // Ch 01: First Meeting (Heartstopper & Harry Potter)
  if (ch.interactiveType === 'first_meeting') {
    gadgets += `
      <div class="first-meeting-gadget">
        <div class="ig-dm-bubble" onclick="window.asmr?.playBubblePop()">
          <div class="ig-avatar">IG</div>
          <div class="ig-content">
            <div class="user">@hussain started following you</div>
            <div class="msg">"I like Harry Potter too ⚡"</div>
          </div>
        </div>
        <div class="hp-parchment-quote" onclick="window.asmr?.playPaperRustle(0.2)">
          “Words are, in my not-so-humble opinion, our most inexhaustible source of magic.”
          <span class="tag">🍂 Heartstopper & Harry Potter · September 1, 2022</span>
        </div>
      </div>
    `;
  }

  // Ch 02: KFC Receipt Artifact
  if (ch.interactiveType === 'kfc_receipt') {
    gadgets += `
      <div class="kfc-receipt" onclick="window.asmr?.playPaperRustle(0.25)">
        <div class="header">★ KFC ORDER #0901 ★</div>
        <div class="kfc-item-row">
          <span>1x Fried Chicken</span>
          <span>SR 22.00</span>
        </div>
        <div class="kfc-item-row">
          <span>1x White Rice (Why?? 💀)</span>
          <span>SR 8.00</span>
        </div>
        <div class="kfc-item-row">
          <span>1x Park Grass Karaoke Session</span>
          <span>PRICELESS</span>
        </div>
        <div class="total-row">
          <span>TOTAL VIBE</span>
          <span>100% CHAOS</span>
        </div>
      </div>
    `;
  }

  // Ch 03: Y2K Walkman Player
  if (ch.interactiveType === 'walkman_player') {
    gadgets += `
      <div class="walkman-gadget" onclick="window.asmr?.playCassetteClick(); window.open('${ch.song.spotifyUrl}', '_blank')">
        <div class="walkman-window">
          <div class="cassette-reel"></div>
          <div class="cassette-label-box">
            <div class="track">SILVER TONGUES</div>
            <div class="artist">Louis Tomlinson · Tape 01</div>
          </div>
          <div class="cassette-reel"></div>
        </div>
        ${renderSongCard(ch.song)}
      </div>
    `;
  }

  // Ch 05: Step Counter Odometer
  if (ch.stats) {
    gadgets += `
      <div class="step-odometer-box" onclick="window.asmr?.playBubblePop()">
        <div class="odometer-item">
          <div class="val">${ch.stats.steps}</div>
          <div class="lbl">Steps Walked</div>
        </div>
        <div class="odometer-item">
          <div class="val">${ch.stats.cars}</div>
          <div class="lbl">Cars Available</div>
        </div>
        <div class="odometer-item">
          <div class="val">1</div>
          <div class="lbl">${ch.stats.walk}</div>
        </div>
      </div>
    `;
  }

  // Ch 06: Quiet Embrace
  if (ch.interactiveType === 'quiet_embrace') {
    gadgets += `
      <div class="quiet-hug-card" onclick="window.asmr?.playBubblePop()">
        <div class="quiet-hug-heart">🤍</div>
        <div class="quiet-hug-quote">
          “The first real hug from a friend I had ever had in my life.”
        </div>
      </div>
    `;
  }

  // Ch 08: School Timer
  if (ch.interactiveType === 'school_countdown') {
    gadgets += `
      <div class="school-timer-box" onclick="window.asmr?.playKeypadClick(1400); window.open('${ch.countdown.spotifyUrl}', '_blank')">
        <div class="school-timer-tag">Hallway Break Clock</div>
        <div class="school-timer-digits">00:03... 15 🔔</div>
        <div class="school-timer-tag">Playing: 15 by Taylor Swift (Tap to listen)</div>
      </div>
    `;
  }

  // Ch 10: Falling Apart (ONLY PHOTO & SONG, NO TEXT)
  if (ch.id === 'ch10') {
    if (ch.photo) {
      gadgets += renderPolaroid(ch.photo);
    }
    if (ch.song) {
      gadgets += renderSongCard(ch.song);
    }
    return gadgets;
  }

  // Ch 11: Apartment Buzzer
  if (ch.interactiveType === 'apartment_buzzer') {
    gadgets += `
      <div class="apartment-buzzer-card">
        <div>
          <h5 style="font-family: var(--font-mono); color: #FFF;">APARTMENT 4B · AHMED</h5>
          <p style="font-size: 0.75rem; color: var(--text-muted);">Re-adding each other on Instagram</p>
        </div>
        <button class="buzzer-btn" id="buzz-btn">PRESS TO BUZZ</button>
      </div>
    `;
  }

  // Ch 12: Salman's House Weekly Stamp
  if (ch.interactiveType === 'weekend_stamp') {
    gadgets += `
      <div class="weekend-calendar-stamp" onclick="window.asmr?.playBubblePop()">
        <div class="stamp-day"><span>FRI 01</span><div class="check">✓</div></div>
        <div class="stamp-day"><span>FRI 02</span><div class="check">✓</div></div>
        <div class="stamp-day"><span>FRI 03</span><div class="check">✓</div></div>
        <div class="stamp-day"><span>FRI 04</span><div class="check">✓</div></div>
        <div class="stamp-day"><span>REPEAT</span><div class="check">♾️</div></div>
      </div>
    `;
  }

  // Ch 13: Bold Quote Poster
  if (ch.interactiveType === 'bold_quote_poster') {
    gadgets += `
      <div class="bold-quote-poster" onclick="window.asmr?.playBubblePop()">
        <div class="text">${ch.quote}</div>
      </div>
    `;
  }

  // Ch 14: iPhone Lockscreen Mockup for Free Will Quote
  if (ch.photo && ch.photo.isPhoneMockup) {
    gadgets += `
      <div class="iphone-frame">
        <div class="iphone-screen">
          <img src="${ch.photo.src}" alt="${ch.photo.caption}" class="iphone-img polaroid-img-clickable" />
        </div>
      </div>
      <div class="lockscreen-highlight-banner" onclick="window.asmr?.playBubblePop()">
        “أنا عندي عقل وأقدر اتخذ قراراتي بنفسي” · You chose me.
      </div>
    `;
  }

  // Ch 15: Golden Milestone
  if (ch.interactiveType === 'golden_milestone') {
    gadgets += `
      <div class="golden-milestone-badge" onclick="window.asmr?.playBubblePop()">
        <div class="icon">⭐</div>
        <div class="title">BEST FRIENDS FOR LIFE</div>
        <div class="sub">PERMANENT · UNBREAKABLE · SINCE 2023</div>
      </div>
    `;
  }

  // Ch 16: Interactive Retro CRT Television (Riyadh Shows)
  if (ch.interactiveType === 'vintage_crt_tv') {
    gadgets += `
      <div class="crt-tv-container">
        <div class="crt-screen" id="crt-screen">
          <div class="crt-channel-badge" id="crt-badge">CH 01 · GLEE</div>
          <div class="crt-show-title" id="crt-title">Glee 🎤</div>
          <div class="crt-show-desc" id="crt-desc">The chaos and midnight singing marathons</div>
        </div>
        <div class="crt-controls">
          <button class="crt-btn active" data-ch="0">Glee</button>
          <button class="crt-btn" data-ch="1">Gossip Girl</button>
          <button class="crt-btn" data-ch="2">TSITP</button>
        </div>
      </div>
    `;
  }

  // Standard Songs (e.g. Ch 02, Ch 07)
  if (ch.song && ch.interactiveType !== 'walkman_player' && ch.id !== 'ch10') {
    gadgets += renderSongCard(ch.song);
  }
  if (ch.songs) {
    gadgets += ch.songs.map(s => renderSongCard(s)).join('');
  }

  // Regular Photo Polaroid
  if (ch.photo && !ch.photo.isPhoneMockup && ch.id !== 'ch10') {
    gadgets += renderPolaroid(ch.photo);
  }

  // Ch 17: Korea Gallery
  if (ch.gallery) {
    gadgets += `
      <div class="korea-passport-stamp" onclick="window.asmr?.playBubblePop()">
        ✈️ SEOUL ARRIVAL · JUL 2026 · ENTRY PERMIT
      </div>
      <div class="korea-grid">
        ${ch.gallery.map(p => renderPolaroid(p)).join('')}
      </div>
    `;
  }

  return gadgets;
}

function renderSongCard(song) {
  return `
    <a href="${song.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="song-card" onclick="window.asmr?.playPaperRustle(0.15)">
      <div class="song-info">
        <div class="song-disc-icon">♫</div>
        <div class="song-text">
          <h5>${song.title}</h5>
          <p>${song.artist} ${song.note ? `· ${song.note}` : ''}</p>
        </div>
      </div>
      <div class="spotify-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
        Spotify
      </div>
    </a>
  `;
}

function renderPolaroid(photo) {
  const rot = photo.rotation || 0;
  return `
    <div class="polaroid-card" data-rotation="${rot}" style="transform: rotate(${rot}deg)">
      <div class="washi-tape" onclick="event.stopPropagation(); window.asmr?.playTapePeel()"></div>
      <div class="polaroid-img-wrapper">
        <img src="${photo.src}" alt="${photo.caption || 'Memory photograph'}" class="polaroid-img polaroid-img-clickable" loading="lazy" />
      </div>
      <div class="polaroid-caption">${photo.caption || ''}</div>
      <div class="tap-hint">Tap to zoom</div>
    </div>
  `;
}

function renderFinale(scrapbookData) {
  const f = scrapbookData.finale;
  return `
    <section class="finale-section" id="finale">
      <div class="finale-badge">
        <span class="chapter-number-pill">THE FINALE · TIME CAPSULE</span>
      </div>

      <div class="grand-letter-card">
        <div class="grand-letter-tape" onclick="event.stopPropagation(); window.asmr?.playTapePeel()"></div>
        <h2 class="grand-letter-title">${f.title}</h2>
        <div class="grand-letter-body">
          ${f.letterParagraphs.map(p => `<p>${p}</p>`).join('')}
        </div>
        <div class="grand-letter-lyric">
          ${f.lyric}
        </div>
        <div class="grand-letter-signature">
          ${f.signature}
          <span>${f.signOffName}</span>
        </div>
      </div>

      <div class="celebrate-btn-container">
        <button class="celebrate-btn" id="celebrate-btn">🎉 CELEBRATE 19 YEARS 🎉</button>
      </div>

      <div class="finale-birthday-banner">
        <div class="finale-birthday-text">
          Happy 19th Birthday
          <span>Hussein</span>
        </div>
        <div class="finale-time-stamp">
          OCTOBER 6, 2026 · ETERNALLY ARCHIVED
        </div>
      </div>
    </section>
  `;
}

/* ==============================================================
   ATTACH INTERACTIVE GADGET LISTENERS
   ============================================================== */
function attachGadgetEventListeners(asmr) {
  // CRT TV Channel Flipper with TV static sound
  const crtBtns = document.querySelectorAll('.crt-btn');
  const shows = [
    { badge: "CH 01 · GLEE", title: "Glee 🎤", desc: "The chaos and midnight singing marathons" },
    { badge: "CH 02 · GOSSIP GIRL", title: "Gossip Girl 🍸", desc: "XOXO drama marathons and endless theories" },
    { badge: "CH 03 · TSITP", title: "The Summer I Turned Pretty 🌊", desc: "Debating every single scene until sunrise" }
  ];

  crtBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      asmr.playTvStatic();
      crtBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const index = parseInt(btn.getAttribute('data-ch'), 10);
      const data = shows[index];

      const badge = document.getElementById('crt-badge');
      const title = document.getElementById('crt-title');
      const desc = document.getElementById('crt-desc');

      if (badge && title && desc && data) {
        badge.textContent = data.badge;
        title.textContent = data.title;
        desc.textContent = data.desc;
      }
    });
  });

  // Apartment Buzzer
  const buzzBtn = document.getElementById('buzz-btn');
  if (buzzBtn) {
    buzzBtn.addEventListener('click', () => {
      asmr.playKeypadClick(400);
      buzzBtn.textContent = "BUZZING... 🔊";
      setTimeout(() => {
        buzzBtn.textContent = "DOOR UNLOCKED ✓";
      }, 600);
    });
  }

  // Celebration Confetti Cannon with sound pop
  const celebrateBtn = document.getElementById('celebrate-btn');
  if (celebrateBtn) {
    celebrateBtn.addEventListener('click', () => {
      asmr.playConfettiPop();
      fireConfetti();
    });
  }
}

/* ==============================================================
   LIGHTBOX MODAL FOR PHOTOS
   ============================================================== */
function initLightbox() {
  let modal = document.getElementById('lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'lightbox-modal';
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close-btn" id="lightbox-close">✕</button>
        <img src="" alt="" class="lightbox-img" id="lightbox-img" />
        <div class="lightbox-caption" id="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
      if (e.target.id === 'lightbox-modal' || e.target.id === 'lightbox-close') {
        modal.classList.remove('active');
        window.asmr?.playPaperRustle(0.15);
      }
    });
  }

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('polaroid-img-clickable')) {
      const src = e.target.getAttribute('src');
      const caption = e.target.getAttribute('alt') || '';
      const imgEl = document.getElementById('lightbox-img');
      const capEl = document.getElementById('lightbox-caption');

      if (imgEl && capEl && src) {
        imgEl.src = src;
        capEl.textContent = caption;
        modal.classList.add('active');
        window.asmr?.playCameraShutter();
      }
    }
  });
}

/* ==============================================================
   CONFETTI CANNON
   ============================================================== */
function fireConfetti() {
  const colors = ['#EA580C', '#F97316', '#FBBF24', '#F43F5E', '#8B5CF6', '#10B981'];
  for (let i = 0; i < 70; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-particle';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.animationDuration = (2 + Math.random() * 2) + 's';
    el.style.animationDelay = (Math.random() * 0.4) + 's';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4000);
  }
}

/* ==============================================================
   INTERSECTION OBSERVER FOR SCROLL SOUND
   ============================================================== */
function initScrollObserver(asmr) {
  let lastTriggeredId = "";

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.id !== lastTriggeredId) {
        lastTriggeredId = entry.target.id;
        asmr.playPaperRustle(0.18);
      }
    });
  }, {
    threshold: 0.35
  });

  document.querySelectorAll('.memory-chapter').forEach(el => observer.observe(el));
}
