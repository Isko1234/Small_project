let btns = document.querySelectorAll(".plus");
console.log(btns);
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let num = btn.nextElementSibling;
    let number = +num.textContent + 1;
    num.innerHTML = number;
  });
});

let overALL = document.querySelector(".ovprice");
let button = document.querySelector(".calculate_overallprice");
button.addEventListener("click", () => {
  let prices = document.querySelectorAll(".price");
  let countrs = document.querySelectorAll(".number");
  let overALLPrice = 0;
  prices.forEach((price, index) => {
    overALLPrice += +price.textContent * +countrs[index].textContent;
  });
  overALL.innerHTML = overALLPrice;
});

let bts = document.querySelectorAll(".minus");
console.log(btns);
bts.forEach((btn) => {
  btn.addEventListener("click", () => {
    let num = btn.previousElementSibling;
    let number;
    if (+num.textContent > 1) {
      number = +num.textContent - 1;
    } else {
      number = +num.textContent;
    }
    num.innerHTML = number;
  });
});
