const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    // document.body.style.overflow = 'hidden';
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menu.addEventListener('click', e => {
    if (e.target === overlay) {
        menu.classList.remove('active');
    }
});

document.addEventListener('keydown', e => {
    if (e.code = 'Escape' && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

function onGridImageClick(e) {
    if (!e.target.classList.contains('grid_img')) {
        return;
    }
    console.log(e.target);
    console.log(e.currentTarget);
    const instance = basicLightbox.create(`
    <img src="${e.target.src}">
`)

instance.show();
}
const gallery = document.querySelector('.gallery__grid');
console.log(gallery);
gallery.addEventListener('click', onGridImageClick);
