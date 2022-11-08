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
