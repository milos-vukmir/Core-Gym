const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 300) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  links.classList.toggle("active");
});

document.querySelectorAll(".link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    links.classList.remove("active");
  })
);

document.addEventListener("scroll", () => {
  const topBtn = document.querySelector("#top-btn");

  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

  topBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});