let ShowModal = (id) => {
  document.getElementById(id).style.transition = "none";
  requestAnimationFrame(function () {
    document.getElementById(id).style.transition = "all .3s ease";
    document.getElementById(id).style.right = "0%";
  });
  document.getElementById(id).style.pointerEvents = "auto";
};
let HidModal = (id) => {
  document.getElementById(id).style.transition = "all .3s";
  document.getElementById(id).style.right = "-100%";
  document.getElementById(id).style.pointerEvent = "none";
};
window.ShowModal = ShowModal;
window.HidModal = HidModal;
