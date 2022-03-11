const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selected-img');
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const selectedIndex = null;

imageIndexes.forEach((i) => {
  const image = document.createElement('img');
  image.src = `/images/cartman-${i}.jpg`;
  image.alt = `This is a test for alts ${i}`;
  image.classList.add('gallery-image');

  image.addEventListener('click', () => {
    // popup stuff
    popup.style.transform = `translateY(0)`;
    selectedImage.src = `/images/cartman-${i}.jpg`;
    image.alt = `This is a test for alts ${i}`;
  });
  gallery.appendChild(image);
});

popup.addEventListener('click', () => {
  popup.style.transform = `translateY(-100%)`;
  popup.src = '';
  popup.alt = '';
});
