// аккордион для прайса
let priceElement = document.querySelector(".price");
let priceToggleBtnElements =
  priceElement.querySelectorAll(".price__toggle-btn");
let priceTableElements = priceElement.querySelectorAll(".price__table");

priceToggleBtnElements.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("price__toggle-btn_state_closed");
    btn.classList.toggle("price__toggle-btn_state_opened");
    if (priceTableElements[index].hasAttribute("style")) {
      priceTableElements[index].removeAttribute("style");
    } else {
      priceTableElements[index].setAttribute(
        "style",
        `height: ${priceTableElements[index].scrollHeight}px;
      transition: all 0.5s ease-in-out;
      `
      );
    }
  });
});

// fullscreen для фотографий
let photoWorkElements = document
  .querySelector(".photo__grid_type_works")
  .querySelectorAll(".photo__item");
let photoInteriorElements = document
  .querySelector(".photo__grid_type_interior")
  .querySelectorAll(".photo__item");
let popupElement = document.querySelector(".popup");
let popupContainerElement = popupElement.querySelector(".popup__container");
let photoFullElement = popupElement.querySelector(".popup__photo");
let popupCloseBtnElement = popupElement.querySelector(".popup__close-btn");

photoWorkElements.forEach((photo) => {
  photo.addEventListener("click", () => {
    photoFullElement.src = photo.src;
    photoFullElement.alt = photo.alt;
    popupElement.classList.add("popup_opened");
    popupContainerElement.classList.add("popup__container_opened");
  });
});

photoInteriorElements.forEach((photo) => {
  photo.addEventListener("click", () => {
    photoFullElement.src = photo.src;
    photoFullElement.alt = photo.alt;
    popupElement.classList.add("popup_opened");
    popupContainerElement.classList.add("popup__container_opened");
  });
});

function closePopup() {
  popupContainerElement.classList.remove("popup__container_opened");
  setTimeout(() => {
    popupElement.classList.remove("popup_opened");
  }, 500);
}

popupElement.addEventListener("click", closePopup);

popupCloseBtnElement.addEventListener("click", closePopup);

photoFullElement.addEventListener("click", (evt) => {
  evt.stopPropagation();
});

// управление шириной блока команды
const cardsWrapperElement = document.querySelector(".cards__wrapper");
const cardsItemElements = cardsWrapperElement.querySelectorAll(".cards__item");
const mediaQueryWidth =
  (cardsItemElements.length * cardsItemElements[0].clientWidth) / 0.8;
const mediaQueryList = window.matchMedia(`(min-width: ${mediaQueryWidth}px)`);

function cangeScreen() {
  console.log("screen");
  if (mediaQueryList.matches && mediaQueryWidth <= 1440) {
    cardsWrapperElement.classList.add("cards__wrapper_fullwidth");
    cardsItemElements.forEach((item) => {
      item.classList.add("cards__item_fullwidth");
    });
  } else {
    cardsWrapperElement.classList.remove("cards__wrapper_fullwidth");
    cardsItemElements.forEach((item) => {
      item.classList.remove("cards__item_fullwidth");
    });
  }
}
window.addEventListener("load", cangeScreen);
mediaQueryList.addEventListener("change", cangeScreen);
