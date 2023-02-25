import './style.scss';

const burger = document.querySelector('.watch-header__burger');
const headerNav = document.querySelector('.watch-header__nav');
const footerItems = document.querySelectorAll('.watch-footer__item');
const footerItemsLists = document.querySelectorAll('.watch-footer__item_list');

document.addEventListener('click', (e) => {
    const withinNav = e.composedPath().includes(headerNav);

    if (!withinNav && headerNav.classList.contains('burger__list')) {
        headerNav.classList.remove('burger__list');
    }
});

burger.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    headerNav.classList.toggle('burger__list');
    burger.classList.toggle('active');
});

footerItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (footerItemsLists[index].classList.contains('list-mobile')) {
            footerItemsLists[index].classList.remove('list-mobile');
            return;
        }

        footerItemsLists.forEach((i) => i.classList.remove('list-mobile'));
        footerItemsLists[index].classList.add('list-mobile');
    });
});
