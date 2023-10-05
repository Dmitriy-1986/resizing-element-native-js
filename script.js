function refresh() {
    const parent = document.querySelector('.parent');
    const children = parent.querySelectorAll('.child');
    const minSize = 10;

    const totalWidth = parent.offsetWidth;
    const firstChildWidth = children[0].offsetWidth;
    const secondChildWidth = children[1].offsetWidth;

    if (totalWidth < firstChildWidth + secondChildWidth + minSize) {
        // Если места не хватает, скрываем первый элемент
        children[0].style.display = 'none';
    } else {
        // Если места достаточно, отображаем оба элемента
        children[0].style.display = 'block';
    }
}

window.addEventListener('resize', refresh);