import pagination_numbered from "./components/pagination_numbered";
import pagination_numbered_mobile from "./components/pagination_numbered_mobile";
import pagination_numbered_table from "./components/pagination_numbered_table";
import getDataDestination from "./service/getData.service";
let content_Pagination_numbered_desktop = document.getElementById(
  "Pagination-numbered-desktop"
);
let content_Pagination_numbered_table = document.getElementById(
  "Pagination-numbered-table"
);
let content_Pagination_numbered_mobile = document.getElementById(
  "Pagination-numbered-mobile"
);
//
const name_mobile = document.getElementById("name-mobile");
const description_mobile = document.getElementById("description-mobile");
const tech_img_mobile = document.getElementById("tech-img-mobile");
//
const name_table = document.getElementById("name-table");
const description_table = document.getElementById("description-table");
const tech_img_table = document.getElementById("tech-img-table");
//
const name = document.getElementById("name");
const description = document.getElementById("description");
const tech_img = document.getElementById("tech-img");
//
let dispalyData = (item) => {
  name_mobile.innerHTML = `${item.name}`;
  description_mobile.innerHTML = `${item.description}`;
  tech_img_mobile.src = `${item.images.landscape}`;
  //
  name_table.innerHTML = `${item.name}`;
  description_table.innerHTML = `${item.description}`;
  tech_img_table.src = `${item.images.portrait}`;
  //
  name.innerHTML = `${item.name}`;
  description.innerHTML = `${item.description}`;
  tech_img.src = `${item.images.portrait}`;
};
let syncPaginationStyles = (item_name) => {
  let allbtns = [
    ...content_Pagination_numbered_desktop.children,
    ...content_Pagination_numbered_table.children,
    ...content_Pagination_numbered_mobile.children,
  ];
  // Reset all buttons to default color
  allbtns
    .filter((btn) => btn.id !== item_name)
    .forEach((btn) => {
      btn.classList.remove("bg-white");
      btn.classList.add("text-white");
    });
  // Set the selected button to white on all screens
  allbtns
    .filter((btn) => btn.id === item_name)
    .forEach((btn) => {
      btn.classList.add("bg-white", "text-black");
      btn.classList.remove("text-white");
    });
};
let handlePaginationClick = (e) => {
  if (!e.target.id) return;
  let selectedName = e.target.getAttribute("id");
  console.log(selectedName);
  // Get data and update content
  getDataDestination().then(async (res) => {
    const data = await res.json();
    const selectedItem = data.technology.find((x) => x.name === selectedName);
    if (selectedItem) {
      dispalyData(selectedItem);
      syncPaginationStyles(selectedName);
    }
  });
};
let main = () => {
  getDataDestination().then(async (response) => {
    const data = await response.json();
    let default_Item = data.technology.find((x) => x.name === "Launch vehicle");
    content_Pagination_numbered_desktop.innerHTML = data.technology.map(
      (item, i) => {
        return pagination_numbered(item, ++i);
      }
    );
    content_Pagination_numbered_table.innerHTML = data.technology.map(
      (item, i) => {
        return pagination_numbered_table(item, ++i);
      }
    );
    content_Pagination_numbered_mobile.innerHTML = data.technology.map(
      (item, i) => {
        return pagination_numbered_mobile(item, ++i);
      }
    );
    if (default_Item) {
      dispalyData(default_Item);
      syncPaginationStyles(default_Item.name);
    }
    content_Pagination_numbered_desktop.addEventListener("click", (e) =>
      handlePaginationClick(e)
    );
    content_Pagination_numbered_table.addEventListener("click", (e) =>
      handlePaginationClick(e)
    );
    content_Pagination_numbered_mobile.addEventListener("click", (e) =>
      handlePaginationClick(e)
    );
  });
};
main();
