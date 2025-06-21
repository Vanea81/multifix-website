
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");
  for (let i = 1; i <= 30; i++) {
    const img = document.createElement("img");
    img.src = `gallery/photo${i}.jpg`;
    img.alt = `Work ${i}`;
    img.onerror = () => img.remove(); // remove if file doesn't exist
    gallery.appendChild(img);
  }
});
