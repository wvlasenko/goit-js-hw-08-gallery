import images from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');
// let indexOfImage = -1;
const lightBox = document.querySelector('div.js-lightbox');
const lightBoxImage = document.querySelector('img.lightbox__image');
const closeBtn = document.querySelector(
  'button[data-action = "close-lightbox"]',
);

//Add preview gallary

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

  //   imageItem.dataset.indexofimage = `${(indexOfImage += 1)}`;
  itemLink.append(imageItem);
  itemContainer.append(itemLink);
  return itemContainer;
}

const arrOfGalleryItems = images.map(image => createGalleryItem(image));
galleryContainer.append(...arrOfGalleryItems);

// Add modal window
galleryContainer.addEventListener('click', event => {
  event.preventDefault();
  const itemRef = event.target;
  if (itemRef.nodeName !== 'IMG') {
    return;
  }
  const largImgeUrl = itemRef.dataset.source;

  lightBox.classList.add('is-open');
  lightBoxImage.src = largImgeUrl;
  lightBoxImage.alt = itemRef.dataset.alt;
  //   lightBoxImage.src = `${images.source}`;
  //   lightBoxImage.alt = `${images[largImgIndex].description}`;

  //   addWindowListener();
  // lightBoxImage.alt = largImgeUrl;
});

//Close modalwindov
closeBtn.addEventListener('click', closeModal);
function closeModal() {
  lightBox.classList.remove('is-open');
  lightBoxImage.src = '';
  lightBoxImage.alt = '';
}
