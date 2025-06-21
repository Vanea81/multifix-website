const gallery = document.getElementById("gallery");
for (let i = 1; i <= 12; i++) {
  const img = document.createElement("img");
  img.src = `assets/images/project${i}.jpg`;
  img.alt = `Project ${i}`;
  gallery.appendChild(img);
}