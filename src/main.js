let ShowModal = (id) => {
  document.getElementById("overlay").style.display = "block";
  document.body.classList.remove("relative");
  document.body.classList.add("fixed");
  document.getElementById(id).classList.remove("hidden");
  document.getElementById(id).style.transition = "none";
  requestAnimationFrame(function () {
    document.getElementById(id).style.transition = "all .3s ease";
    document.getElementById(id).style.left = "47%";
  });
  document.getElementById(id).style.pointerEvents = "auto";
};
let HidModal = (id) => {
  document.getElementById("overlay").style.display = "none";
  document.body.classList.add("relative");
  document.body.classList.remove("fixed");
  document.getElementById(id).style.transition = "all .3s";
  document.getElementById(id).style.left = "100%";
  document.getElementById(id).style.pointerEvent = "none";
};
window.ShowModal = ShowModal;
window.HidModal = HidModal;
