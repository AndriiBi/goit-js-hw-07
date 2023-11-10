import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");

galleryItems.forEach(item => {
    const listItem = document.createElement("li");
    const image = document.createElement("img");

    image.src = item.preview;
    image.alt = item.description;

    listItem.appendChild(image);
    galleryList.appendChild(listItem);
});

console.log(galleryItems);
