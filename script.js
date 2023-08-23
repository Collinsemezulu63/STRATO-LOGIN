let Nav = document.querySelector("nav"),
  Bars = document.querySelector(".bars"),
  Line1 = document.querySelector(".line1"),
  Line2 = document.querySelector(".line2"),
  Line3 = document.querySelector(".line3");
Bars.addEventListener("click", () => {
  Nav.classList.toggle("active");
  Line1.classList.toggle("line1-active");
  Line2.classList.toggle("line2-active");
  Line3.classList.toggle("line3-active");
});
