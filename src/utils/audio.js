// Web Audio API Procedural Cinematic Atmosphere & Interactive Sound FX
// Zero external files, 100% reliable, respects browser autoplay constraints

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.droneGain = null;
    this.osc1 = null;
    this.osc2 = null;
    this.filter = null;
    this.isMuted = true;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();

    // Low-pass filter for warm cinematic tone
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(140, this.ctx.currentTime);

    // Master drone gain
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0, this.ctx.currentTime);

    // Connect to speakers
    this.filter.connect(this.droneGain);
    this.droneGain.connect(this.ctx.destination);

    // Low fundamental drone oscillator (55Hz - A1)
    this.osc1 = this.ctx.createOscillator();
    this.osc1.type = 'sine';
    this.osc1.frequency.setValueAtTime(55, this.ctx.currentTime);
    this.osc1.connect(this.filter);
    this.osc1.start();

    // Subtle sub-harmonic warmth (82.4Hz - E2)
    this.osc2 = this.ctx.createOscillator();
    this.osc2.type = 'triangle';
    this.osc2.frequency.setValueAtTime(82.4, this.ctx.currentTime);
    const osc2Gain = this.ctx.createGain();
    osc2Gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    this.osc2.connect(osc2Gain);
    osc2Gain.connect(this.filter);
    this.osc2.start();
  }

  toggle() {
    this.init();
    if (!this.ctx) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isMuted = !this.isMuted;

    if (this.isMuted) {
      this.droneGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.3);
    } else {
      this.droneGain.gain.setTargetAtTime(0.06, this.ctx.currentTime, 1.2);
      this.playClick(440, 0.05);
    }

    return !this.isMuted;
  }

  playClick(freq = 520, duration = 0.04) {
    if (this.isMuted || !this.ctx) return;
    try {
      const clickOsc = this.ctx.createOscillator();
      const clickGain = this.ctx.createGain();
      clickOsc.type = 'sine';
      clickOsc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      clickOsc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + duration);

      clickGain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      clickGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      clickOsc.connect(clickGain);
      clickGain.connect(this.ctx.destination);

      clickOsc.start();
      clickOsc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio context may be closed or suspended
    }
  }
}

export const soundEngine = new SoundEngine();
