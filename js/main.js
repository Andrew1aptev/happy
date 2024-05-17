const burgerBtn = document.querySelector(".burger-button");
const headerRow = document.querySelector(".header__row");

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger-button--active");
    headerRow.classList.toggle("header__row--active");
})