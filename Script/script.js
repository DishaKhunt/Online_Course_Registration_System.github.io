
document.querySelectorAll('.dropdown-submenu').forEach(item => {
    item.addEventListener('click', event => {
        event.stopPropagation();
        const submenu = item.querySelector('.sub-menu');
        // Close all other open submenus and remove active class
        document.querySelectorAll('.dropdown-submenu.active').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.sub-menu').style.display = 'none';
            }
        });
        // Toggle active class and display of clicked submenu
        item.classList.toggle('active');
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});