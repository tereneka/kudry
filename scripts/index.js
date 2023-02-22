// аккордион для прайса
const priceElement = document.querySelector(".price");
const priceToggleBtnElements =
  priceElement.querySelectorAll(".price__toggle-btn");
const priceTableElements = priceElement.querySelectorAll(".price__table");

priceToggleBtnElements.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("price__toggle-btn_opened");
    if (priceTableElements[index].hasAttribute("style")) {
      priceTableElements[index].removeAttribute("style");
    } else {
      priceTableElements[index].setAttribute(
        "style",
        `height: ${priceTableElements[index].scrollHeight}px;
      `
      );
    }
  });
});

// fullscreen для фотографий
const photoWorkElements = document
  .querySelector(".photo__grid_type_works")
  .querySelectorAll(".photo__item");
const photoInteriorElements = document
  .querySelector(".photo__grid_type_interior")
  .querySelectorAll(".photo__item");
const popupElement = document.querySelector(".popup");
const popupContainerElement = popupElement.querySelector(".popup__container");
const popupPhotoElement = popupElement.querySelector(".popup__photo");
const popupCloseBtnElement = popupElement.querySelector(".popup__close-btn");

photoWorkElements.forEach((photo) => {
  photo.addEventListener("click", () => {
    popupPhotoElement.src = photo.src;
    popupPhotoElement.alt = photo.alt;
    popupElement.classList.add("popup_opened");
    popupContainerElement.classList.add("popup__container_opened");
  });
});

photoInteriorElements.forEach((photo) => {
  photo.addEventListener("click", () => {
    popupPhotoElement.src = photo.src;
    popupPhotoElement.alt = photo.alt;
    popupElement.classList.add("popup_opened");
    popupContainerElement.classList.add("popup__container_opened");
  });
});

function closePopup(e) {
  if (e.target !== popupPhotoElement) {
    popupContainerElement.classList.remove("popup__container_opened");
    setTimeout(() => {
      popupElement.classList.remove("popup_opened");
    }, 500);
  }
}

popupElement.addEventListener("click", closePopup);

// управление шириной блока команды
const cardsWrapperElement = document.querySelector(".cards__wrapper");
const cardsItemElements = cardsWrapperElement.querySelectorAll(".cards__item");
const mediaQueryWidth =
  (cardsItemElements.length * cardsItemElements[0].clientWidth) / 0.8;
const mediaQueryList = window.matchMedia(`(min-width: ${mediaQueryWidth}px)`);

function cangeScreen() {
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
