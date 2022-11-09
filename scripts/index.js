let price = document.querySelector(".price");
let priceToggleBtns = price.querySelectorAll(".price__toggle-btn");
let priceTables = price.querySelectorAll(".price__table");

priceToggleBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("price__toggle-btn_state_closed");
    btn.classList.toggle("price__toggle-btn_state_opened");
    priceTables[index].classList.toggle("price__table_opened");
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

photoWorks.forEach((photo) => {
  photo.addEventListener("click", () => {
    photoFull.src = photo.src;
    photoFull.alt = photo.alt;
    popup.classList.add("popup_opened");
    photoFull.classList.add("popup__photo_opened");
  });
});

photoInterior.forEach((photo) => {
  photo.addEventListener("click", () => {
    photoFull.src = photo.src;
    photoFull.alt = photo.alt;
    popup.classList.add("popup_opened");
    photoFull.classList.add("popup__photo_opened");
  });
});

function closePopup() {
  photoFull.classList.remove("popup__photo_opened");
  setTimeout(() => {
    popup.classList.remove("popup_opened", "pop");
  }, 500);
}

popup.addEventListener("click", closePopup);

popupCloseBtn.addEventListener("click", closePopup);

photoFull.addEventListener("click", (evt) => {
  evt.stopPropagation();
});
