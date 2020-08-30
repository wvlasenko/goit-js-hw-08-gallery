import images from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');
const lightBox = document.querySelector('div.js-lightbox');
// const lightBoxOverlay = document.querySelector('div.lightbox__overlay');
const lightBoxOverlay = document.querySelector('div.lightbox__content');
const lightBoxImage = document.querySelector('img.lightbox__image');
const closeBtn = document.querySelector(
  'button[data-action = "close-lightbox"]',
);
const arrOfGalleryItems = images.map(image => createGalleryItem(image));

galleryContainer.append(...arrOfGalleryItems);
galleryContainer.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
lightBoxOverlay.addEventListener('click', onOverlayClick);

function createGalleryItem(image) {
  const itemContainer = document.createElement('li');
  itemContainer.classList.add('gallery__item');
  const itemLink = document.createElement('a');
  itemLink.classList.add('gallery__link');

  itemLink.href = `${image.original}`;
  const imageItem = document.createElement('img');
  imageItem.classList.add('gallery__image');
  imageItem.src = `${image.preview}`;
  imageItem.dataset.source = `${image.original}`;
  imageItem.alt = `${image.description}`;
  itemLink.append(imageItem);
  itemContainer.append(itemLink);
  return itemContainer;
}

function openModal(event) {
  event.preventDefault();
  window.addEventListener('keydown', onEscPress);
  const itemRef = event.target;
  if (itemRef.nodeName !== 'IMG') {
    return;
  }
  const largImgeUrl = itemRef.dataset.source;

  lightBox.classList.add('is-open');
  lightBoxImage.src = largImgeUrl;
  lightBoxImage.alt = itemRef.dataset.alt;
}

function closeModal() {
  window.removeEventListener('keydown', onEscPress);
  lightBox.classList.remove('is-open');
  lightBoxImage.src = '';
  lightBoxImage.alt = '';
}

function onOverlayClick(event) {
  // console.log(event.target);
  if (event.target === event.currentTarget) {
    closeModal();
  }
}
function onEscPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}
