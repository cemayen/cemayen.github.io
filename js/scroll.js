
let cel = document.getElementById("celular");
window.addEventListener("scroll", function () {
  var value = window.scrollY;
  celular.style.top = -value * -0.52 + "px";
});
let texto = document.getElementById("helice");
window.addEventListener("scroll", function () {
  var value = window.scrollY;
  helice.style.top = -value * 0.52 + "px";
});
let compu = document.getElementById("computador");
window.addEventListener("scroll", function () {
  var value = window.scrollY;
  computador.style.left = -value * 0.52 + "px";
});