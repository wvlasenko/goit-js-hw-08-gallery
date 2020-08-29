import images from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');

let indexOfImage = -1;

function createGalleryItem(image) {
  const itemContainer = document.createElement('li');
  itemContainer.classList.add('gallery__item');
  const itemLink = document.createElement('a');
  itemLink.classList.add('gallery__link');
  itemLink.href = `${image.original}`;
  const imageItem = document.createElement('img');
  imageItem.classList.add('gallery__image');
  imageItem.src = `${image.preview}`;
  imageItem.alt = `${image.description}`;
  imageItem.dataset.indexofimage = `${(indexOfImage += 1)}`;
  itemLink.append(imageItem);
  itemContainer.append(itemLink);
  return itemContainer;
}

const arrOfGalleryItems = images.map(image => createGalleryItem(image));
galleryContainer.append(...arrOfGalleryItems);
