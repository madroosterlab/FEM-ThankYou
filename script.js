const rate1 = document.querySelector(".rate1");
const rate2 = document.querySelector(".rate2");
const rate3 = document.querySelector(".rate3");
const rate4 = document.querySelector(".rate4");
const rate5 = document.querySelector(".rate5");
const thankyouContainer = document.querySelector(".thankyou-card");
const ratingContainer = document.querySelector(".rating-card");
const submit = document.querySelector(".submit-button");
const rating = document.querySelector(".rating");

submit.addEventListener("click", () => {
  if (rating.innerText !== "0") {
    console.log(rating.innerText);
    ratingContainer.style.display = "none";
    thankyouContainer.style.display = "block";
  }
});

rate1.addEventListener("click", () => {
  rate3.style.backgroundColor = "#262e38";
  rate4.style.backgroundColor = "#262e38";
  rate5.style.backgroundColor = "#262e38";
  rate2.style.backgroundColor = "#262e38";
  rate1.style.backgroundColor = "white";
  rating.innerText = 1;
});
rate2.addEventListener("click", () => {
  rate3.style.backgroundColor = "#262e38";
  rate4.style.backgroundColor = "#262e38";
  rate5.style.backgroundColor = "#262e38";
  rate1.style.backgroundColor = "#262e38";
  rate2.style.backgroundColor = "white";
  rating.innerText = 2;
});
rate3.addEventListener("click", () => {
  rate1.style.backgroundColor = "#262e38";
  rate4.style.backgroundColor = "#262e38";
  rate5.style.backgroundColor = "#262e38";
  rate2.style.backgroundColor = "#262e38";
  rate3.style.backgroundColor = "white";
  rating.innerText = 3;
});
rate4.addEventListener("click", () => {
  rate3.style.backgroundColor = "#262e38";
  rate1.style.backgroundColor = "#262e38";
  rate5.style.backgroundColor = "#262e38";
  rate2.style.backgroundColor = "#262e38";
  rate4.style.backgroundColor = "white";
  rating.innerText = 4;
});
rate5.addEventListener("click", () => {
  rate3.style.backgroundColor = "#262e38";
  rate4.style.backgroundColor = "#262e38";
  rate1.style.backgroundColor = "#262e38";
  rate2.style.backgroundColor = "#262e38";
  rate5.style.backgroundColor = "white";
  rating.innerText = 5;
});
