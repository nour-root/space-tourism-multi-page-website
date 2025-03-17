let ShowModal = (id) => {
  document.getElementById("overlay").style.display = "block";
  document.body.classList.remove("relative");
  document.body.classList.add("fixed");
  document.body.classList.add("over");
  document.getElementById(id).classList.remove("hidden");
  requestAnimationFrame(() => {
    document.getElementById(id).style.transition = "transform .3s";
    document.getElementById(id).style.transform = "translateX(0%)";
  });
};
let HidModal = (id) => {
  document.getElementById("overlay").style.display = "none";
  document.body.classList.add("relative");
  document.body.classList.remove("fixed");
  requestAnimationFrame(() => {
    document.getElementById(id).style.transition = "transform .3s";
    document.getElementById(id).style.transform = "translateX(100%)";
  });
  document.getElementById(id).classList.add("hidden");
};
window.ShowModal = ShowModal;
window.HidModal = HidModal;
