import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

// Функція для створення "li", "a", "img" у списку "gallery".
function createGalleryItem(item) {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  //   image.dataset.source = item.original;
  image.alt = item.description;

  link.appendChild(image);
  listItem.appendChild(link);

  // EventListener для кожного "li" при кліку
  listItem.addEventListener("click", (event) => {
    event.preventDefault();

    const lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionPosition: "bottom",
      captionDelay: 250
    });

    lightbox.open();
  });

  return listItem;
}

// Апенд зображень у список
function appendGalleryItems(items) {
  items.forEach((item) => {
    const galleryItem = createGalleryItem(item);
    galleryList.appendChild(galleryItem);
  });
}
appendGalleryItems(galleryItems);
