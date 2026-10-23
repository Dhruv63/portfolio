// Web Audio API & HTML5 Audio Cinematic Soundtrack & Interactive Sound FX
// Features 'Spill Your Time (Live)' with smooth gain ramping and mechanical interaction clicks

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.audio = null;
    this.trackSource = null;
    this.trackGain = null;
    this.isMuted = true;
    this.isInitialized = false;
    this.trackPath = '/audio/spill-your-time.mp3';
    this.targetVolume = 0.15; // Subtle, atmospheric ambient background level
  }

  setVolume(volume) {
    this.targetVolume = Math.max(0, Math.min(1, volume));
    if (!this.isMuted) {
      if (this.ctx && this.trackGain) {
        this.trackGain.gain.setTargetAtTime(this.targetVolume, this.ctx.currentTime, 0.2);
      } else if (this.audio) {
        this.audio.volume = this.targetVolume;
      }
    }
  }

  init() {
    if (this.isInitialized) return;

    try {
      // Initialize HTML5 Audio element for the soundtrack
      this.audio = new Audio(this.trackPath);
      this.audio.loop = true;
      this.audio.preload = 'auto';

      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
        this.trackGain = this.ctx.createGain();
        this.trackGain.gain.setValueAtTime(0, this.ctx.currentTime);

        this.trackSource = this.ctx.createMediaElementSource(this.audio);
        this.trackSource.connect(this.trackGain);
        this.trackGain.connect(this.ctx.destination);
      } else {
        this.audio.volume = 0;
      }

      this.isInitialized = true;
    } catch (e) {
      console.warn('SoundEngine initialization note:', e);
      // Fallback direct audio object
      if (!this.audio) {
        this.audio = new Audio(this.trackPath);
        this.audio.loop = true;
      }
      this.isInitialized = true;
    }
  }

  toggle() {
    this.init();

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isMuted = !this.isMuted;

    if (this.isMuted) {
      // Smooth fade-out over 400ms
      if (this.ctx && this.trackGain) {
        this.trackGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.15);
        setTimeout(() => {
          if (this.isMuted && this.audio) {
            this.audio.pause();
          }
        }, 500);
      } else if (this.audio) {
        this.audio.pause();
      }
    } else {
      // Smooth fade-in up to subtle ambient target volume
      if (this.audio) {
        const playPromise = this.audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              if (this.ctx && this.trackGain) {
                this.trackGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
                this.trackGain.gain.setTargetAtTime(this.targetVolume, this.ctx.currentTime, 0.4);
              } else {
                this.audio.volume = this.targetVolume;
              }
            })
            .catch((err) => {
              console.warn('Audio play deferred until user interaction:', err);
            });
        }
      }
      this.playClick(440, 0.04);
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
      // Audio context state safely ignored
    }
  }
}

export const soundEngine = new SoundEngine();
