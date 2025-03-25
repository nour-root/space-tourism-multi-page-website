let images_items = (img) => {
  return `<img id="img-${img.name}" class="plant-img hidden transform scale-0 rotate-0" src="${img.images.png}" alt="" />`;
};
export default images_items;
