function openModal(src) {
  document.getElementById("lightboxModal").style.display = "block";
  document.getElementById("lightboxImage").src = src;
}

function closeModal() {
  document.getElementById("lightboxModal").style.display = "none";
}