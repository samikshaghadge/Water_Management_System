const ul = document.querySelector(".navbar_ul");
const burger_menu = document.querySelector(".burger-menu");

burger_menu.addEventListener
(
    "click",
    (event) =>
    {
        ul.classList.toggle("hide-burger-menu");
        event.stopPropagation();
    }
);

window.addEventListener
(
    "click",
    () =>
    {
        ul.classList.add("hide-burger-menu");
    }
);