import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector(".gallery");

galleryList.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
galleryList.addEventListener('click', handleGalleryClick);

function handleGalleryClick(event) {

  if(event.target === event.currentTarget) {
    return
  }

  event.preventDefault();
  const item = event.target.closest('.gallery__item');
  const img = item.querySelector('.gallery__image');
  const lightbox = basicLightbox.create(`<img src="${img.dataset.source}" width="800" height="600">`);
  lightbox.show();
  
}

function createMarkup(items) {
  return items.map(item => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>
  `).join("");
}
