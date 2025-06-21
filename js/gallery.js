const gallery = document.getElementById("gallery");
const imageCount = 12;

for (let i = 1; i <= imageCount; i++) {
  const img = document.createElement("img");
  img.src = `images/photo${i}.jpg`;
  img.alt = `Project photo ${i}`;
  gallery.appendChild(img);
}