// Initialize Icons
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }
});

const bgVideo = document.getElementById('bgVideo');
const audioToggleBtn = document.getElementById('audioToggleBtn');
const audioIcon = document.getElementById('audioIcon');
const audioPrompt = document.getElementById('audioPrompt');

// 1. Immediately force muted autoplay so the video begins running instantly
bgVideo.muted = true;
const playPromise = bgVideo.play();

if (playPromise !== undefined) {
  playPromise.catch((err) => {
    console.warn("Autoplay deferred by browser:", err);
  });
}

// 2. Audio activation on first interaction
function activateAudio() {
  bgVideo.muted = false;
  bgVideo.play();

  // Update button icon to unmuted
  if (audioIcon) {
    audioIcon.setAttribute('data-lucide', 'volume-2');
    if (window.lucide) lucide.createIcons();
  }

  // Hide the helper notice
  if (audioPrompt) {
    audioPrompt.classList.add('hidden');
  }

  // Remove one-time listeners
  window.removeEventListener('click', activateAudio);
  window.removeEventListener('touchstart', activateAudio);
  window.removeEventListener('keydown', activateAudio);
}

// Listen for the very first user interaction to turn sound on
window.addEventListener('click', activateAudio);
window.addEventListener('touchstart', activateAudio);
window.addEventListener('keydown', activateAudio);

// 3. Manual mute/unmute toggle in navbar
audioToggleBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Avoid triggering document-level listeners repeatedly
  
  if (bgVideo.muted) {
    bgVideo.muted = false;
    audioIcon.setAttribute('data-lucide', 'volume-2');
    if (audioPrompt) audioPrompt.classList.add('hidden');
  } else {
    bgVideo.muted = true;
    audioIcon.setAttribute('data-lucide', 'volume-x');
  }

  if (window.lucide) lucide.createIcons();
});
