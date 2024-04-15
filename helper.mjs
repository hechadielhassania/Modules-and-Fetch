async function fetchImages() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }
    const data = await response.json();
    const imageContainer = document.getElementById("imageContainer");
    data.forEach(photo => {
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("col-md-4", "mb-3");
      const image = document.createElement("img");
      image.src = photo.url;
      image.alt = photo.title;
      imageDiv.appendChild(image);
      imageContainer.appendChild(imageDiv);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchImages();