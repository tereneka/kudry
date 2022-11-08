let price = document.querySelector(".price");
let priceToggleBtns = price.querySelectorAll(".price__toggle-btn");
let priceTables = price.querySelectorAll(".price__table");

priceToggleBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("price__toggle-btn_state_closed");
    btn.classList.toggle("price__toggle-btn_state_opened");
    setTimeout(() => {
      priceTables[index].classList.toggle("price__table_opened");
    }, 400);
  });
});

let photoWorks = document
  .querySelector(".photo__grid_type_works")
  .querySelectorAll(".photo__item");
let photoInterior = document
  .querySelector(".photo__grid_type_interior")
  .querySelectorAll(".photo__item");
let popup = document.querySelector(".popup");
let photoFull = popup.querySelector(".popup__photo");
let popupCloseBtn = popup.querySelector(".popup__close-btn");

photoWorks.forEach((photo, index) => {
  photo.addEventListener("click", () => {
    console.log(photo.src);
    photoFull.src = photo.src;
    photoFull.alt = photo.alt;
    popup.classList.add("popup_opened");
  });
});

function closePopup() {
  popup.classList.remove("popup_opened");
}

popup.addEventListener("click", closePopup);

popupCloseBtn.addEventListener("click", closePopup);

photoFull.addEventListener("click", () => {
  event.stopPropagation();
});
