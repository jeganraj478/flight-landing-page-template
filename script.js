// ===== Select DOM Elements =====
const searchInput = document.getElementById("searchInput");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// ===== Show Popup on Search Box Click =====
searchInput.addEventListener("click", () => {
  popup.style.display = "block";
});

// ===== Close Popup =====
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// ===== Close Popup if clicked outside content =====
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
