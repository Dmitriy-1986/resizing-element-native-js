 function refresh() {
    const parent = document.querySelector('.parent');
    const children = parent.querySelectorAll('.child');
    const minSize = 10;

    const totalWidth = parent.offsetWidth;
    const firstChildWidth = children[0].offsetWidth;
    const secondChildWidth = children[1].offsetWidth;

    if (totalWidth < firstChildWidth + secondChildWidth + minSize) {
        children[0].classList.add('hidden'); /* Скрываем первый блок */
    } else {
        children[0].classList.remove('hidden'); /* Показываем первый блок */
    }
}

window.addEventListener('resize', refresh);
// Вызов refresh при загрузке страницы, чтобы установить начальное состояние
refresh();
