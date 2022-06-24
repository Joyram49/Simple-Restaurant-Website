const menu = document.querySelector(".menu");
menu.addEventListener("click", (e) => {
  const target = document.querySelectorAll(".target");
  [...target].forEach((item) => item.classList.toggle("change"));
});

const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;
setInterval(() => {
  i++;
  const iconActive = document.querySelector(".section-1-icons .change");
  iconActive.classList.remove("change");
  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    iconActive.nextElementSibling.classList.add("change");
  }
}, 4000);
