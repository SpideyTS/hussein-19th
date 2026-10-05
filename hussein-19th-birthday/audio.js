/**
 * Advanced ASMR Procedural Soundscape Engine (Web Audio API)
 * Ultra-crisp tactile sounds: vinyl needle drops, paper rustles, camera clicks,
 * tape peels, CRT television channel static, cassette deck clunks, and celebration snaps.
 */

class AsmrAudioEngine {
  constructor() {
    this.ctx = null;
    this.isEnabled = false;
    this.vinylNode = null;
    this.vinylGain = null;
    this.masterGain = null;

    const saved = localStorage.getItem('hussein_asmr_sound');
    if (saved === 'true') {
      this.isEnabled = true;
    }
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.75, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  enable() {
    this.init();
    this.isEnabled = true;
    localStorage.setItem('hussein_asmr_sound', 'true');
    this.playVinylNeedleDrop();
    this.startAmbientVinyl();
  }

  disable() {
    this.isEnabled = false;
    localStorage.setItem('hussein_asmr_sound', 'false');
    this.stopAmbientVinyl();
  }

  toggle() {
    if (this.isEnabled) {
      this.disable();
    } else {
      this.enable();
    }
    return this.isEnabled;
  }

  // --- Keypad Tap (Tactile micro click) ---
  playKeypadClick(frequency = 1200) {
    if (!this.isEnabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(frequency, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.035);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch (e) {}
  }

  // --- Vault Unlock / Heavy Brass Latch Release ---
  playVaultUnlock() {
    if (!this.isEnabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;

      // Heavy metallic mechanical release
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.18);

      gain.gain.setValueAtTime(0.38, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.22);

      setTimeout(() => {
        this.playPaperRustle(0.3);
      }, 100);
    } catch (e) {}
  }

  // --- Vinyl Needle Drop (Satisfying vintage record player drop) ---
  playVinylNeedleDrop() {
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // Soft thump
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(80, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.08);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.1);

      // Needle scratch across lead-in groove
      setTimeout(() => {
        if (!this.ctx) return;
        const dur = 0.2;
        const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * dur, this.ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++) {
          d[i] = (Math.random() * 2 - 1) * 0.15;
        }
        const src = this.ctx.createBufferSource();
        src.buffer = buf;
        const f = this.ctx.createBiquadFilter();
        f.type = 'highpass';
        f.frequency.value = 1400;

        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0.12, this.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);

        src.connect(f);
        f.connect(g);
        g.connect(this.masterGain);
        src.start();
      }, 50);
    } catch (e) {}
  }

  // --- Paper Rustle / Scrapbook Page Turning ---
  playPaperRustle(duration = 0.32) {
    if (!this.isEnabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const bufferSize = Math.floor(this.ctx.sampleRate * duration);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        data[i] = (b0 + b1 + b2) * 0.18;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1800, now);
      filter.frequency.exponentialRampToValueAtTime(750, now + duration);
      filter.Q.value = 1.3;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.24, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      noise.start(now);
      noise.stop(now + duration);
    } catch (e) {}
  }

  // --- Camera Shutter (Dual-click instant camera snap) ---
  playCameraShutter() {
    if (!this.isEnabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;

      // Click 1 (Mirror up)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'square';
      osc1.frequency.setValueAtTime(2600, now);
      gain1.gain.setValueAtTime(0.16, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
      osc1.connect(gain1);
      gain1.connect(this.masterGain);
      osc1.start(now);
      osc1.stop(now + 0.035);

      // Click 2 (Curtain close, 65ms later)
      setTimeout(() => {
        if (!this.ctx || !this.isEnabled) return;
        const t = this.ctx.currentTime;
        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(1150, t);
        gain2.gain.setValueAtTime(0.22, t);
        gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
        osc2.connect(gain2);
        gain2.connect(this.masterGain);
        osc2.start(t);
        osc2.stop(t + 0.065);
      }, 65);
    } catch (e) {}
  }

  // --- Washi Tape Peel (Sticky adhesive friction) ---
  playTapePeel() {
    if (!this.isEnabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const duration = 0.24;
      const bufferSize = Math.floor(this.ctx.sampleRate * duration);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.28;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(3400, now);
      filter.frequency.exponentialRampToValueAtTime(1600, now + duration);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.15, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      noise.start(now);
      noise.stop(now + duration);
    } catch (e) {}
  }

  // --- Cassette Deck Clunk (Walkman Play button press) ---
  playCassetteClick() {
    if (!this.isEnabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.12);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.14);
    } catch (e) {}
  }

  // --- TV Channel Static Buzz (CRT channel flip) ---
  playTvStatic() {
    if (!this.isEnabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const duration = 0.18;
      const bufSize = Math.floor(this.ctx.sampleRate * duration);
      const buf = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) {
        d[i] = (Math.random() * 2 - 1) * 0.22;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buf;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1800;
      filter.Q.value = 2.5;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);
      noise.start(now);
      noise.stop(now + duration);
    } catch (e) {}
  }

  // --- Tactile Bubble Pop (Sticker / button taps) ---
  playBubblePop() {
    if (!this.isEnabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(950, now + 0.05);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.06);
    } catch (e) {}
  }

  // --- Celebration Confetti Cannon Pop ---
  playConfettiPop() {
    if (!this.isEnabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // Cork pop
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(90, now + 0.12);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.14);

      setTimeout(() => {
        this.playPaperRustle(0.4);
      }, 80);
    } catch (e) {}
  }

  // --- Ambient Vinyl Dust Crackle ---
  startAmbientVinyl() {
    if (!this.isEnabled || !this.ctx || this.vinylNode) return;
    try {
      const bufferSize = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        if (Math.random() < 0.0022) {
          data[i] = (Math.random() * 2 - 1) * 0.55;
        } else {
          data[i] = (Math.random() * 2 - 1) * 0.015;
        }
      }

      this.vinylNode = this.ctx.createBufferSource();
      this.vinylNode.buffer = buffer;
      this.vinylNode.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 1000;

      this.vinylGain = this.ctx.createGain();
      this.vinylGain.gain.setValueAtTime(0.045, this.ctx.currentTime);

      this.vinylNode.connect(filter);
      filter.connect(this.vinylGain);
      this.vinylGain.connect(this.masterGain);

      this.vinylNode.start(0);
    } catch (e) {}
  }

  stopAmbientVinyl() {
    if (this.vinylNode) {
      try {
        this.vinylNode.stop();
        this.vinylNode.disconnect();
      } catch (e) {}
      this.vinylNode = null;
    }
  }
}

const asmr = new AsmrAudioEngine();
if (typeof window !== 'undefined') {
  window.asmr = asmr;
}
