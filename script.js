// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});

// Elements
const bgVideo = document.getElementById('bgVideo');
const audioToggleBtn = document.getElementById('audioToggleBtn');
const audioIcon = document.getElementById('audioIcon');
const openModalBtn = document.getElementById('openModalBtn');
const triggerModalSecondary = document.getElementById('triggerModalSecondary');
const closeModalBtn = document.getElementById('closeModalBtn');
const videoModal = document.getElementById('videoModal');
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');

// Audio Toggle Functionality
audioToggleBtn.addEventListener('click', () => {
  if (bgVideo.muted) {
    bgVideo.muted = false;
    audioIcon.setAttribute('data-lucide', 'volume-2');
  } else {
    bgVideo.muted = true;
    audioIcon.setAttribute('data-lucide', 'volume-x');
  }
  lucide.createIcons();
});

// Modal Controls
function openModal() {
  videoModal.classList.remove('hidden');
}

function closeModal() {
  videoModal.classList.add('hidden');
}

openModalBtn.addEventListener('click', openModal);
triggerModalSecondary.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the card
videoModal.addEventListener('click', (e) => {
  if (e.target === videoModal) {
    closeModal();
  }
});

// Video File Upload / Drag-and-Drop Handler
function loadVideoFile(file) {
  if (!file || !file.type.startsWith('video/')) {
    alert('Please upload a valid video file.');
    return;
  }

  const fileURL = URL.createObjectURL(file);
  bgVideo.src = fileURL;
  bgVideo.play();
  closeModal();
}

fileInput.addEventListener('change', (e) => {
  if (e.target.files && e.target.files[0]) {
    loadVideoFile(e.target.files[0]);
  }
});

// Drag and drop event listeners
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
    loadVideoFile(e.dataTransfer.files[0]);
  }
});
