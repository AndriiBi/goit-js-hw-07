import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector(".gallery");

// Function to create a gallery item
function createGalleryItem(item) {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.dataset.source = item.original;
  image.alt = item.description;

  link.appendChild(image);
  listItem.appendChild(link);

 // Add a click event listener to each gallery item
 listItem.addEventListener('click', (event) => {
    event.preventDefault();

    // Create a Lightbox instance with the large image source
    const lightbox = basicLightbox.create(`
      <img src="${item.original}" width="800" height="600">
    `);

    // Show the Lightbox
    lightbox.show();
  });

  return listItem;
}

// Function to append gallery items to the list
function appendGalleryItems(items) {
  items.forEach(item => {
    const galleryItem = createGalleryItem(item);
    galleryList.appendChild(galleryItem);
  });
}

// Call the function to append gallery items to the list
appendGalleryItems(galleryItems);
