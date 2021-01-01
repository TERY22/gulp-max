let user_icon = document.querySelector('.user-header__icon');
item_icon.addEventListener("click", function(e) {
    let user_menu = document.querySelector('.user-header__menu');
    user_menu.classList.toggle('_active');
});