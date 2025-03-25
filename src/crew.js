import Pagination from "./components/Pagination";
import getDataDestination from "./service/getData.service";
const rank_mobile = document.getElementById("rank-mobile");
const name_mobile = document.getElementById("name-mobile");
const description_mobile = document.getElementById("description-crew-mobile");
const crew_img_mobile = document.getElementById("crew-img-mobile");
//
const rank_table = document.getElementById("rank-table");
const name_table = document.getElementById("name-table");
const description_table = document.getElementById("description-crew-table");
const crew_img_table = document.getElementById("crew-img-table");
//
const rank = document.getElementById("rank");
const name = document.getElementById("name");
const description = document.getElementById("description-crew");
const crew_img = document.getElementById("crew-img");
//
let Pagination_desktop = document.getElementById("Pagination-desktop");
let Pagination_table = document.getElementById("Pagination-table");
let Pagination_mobile = document.getElementById("Pagination-mobile");
//
let show_rest_data = (item) => {
  rank.innerHTML = `${item.role}`;
  name.innerHTML = `${item.name}`;
  description.innerHTML = `${item.bio}`;
  crew_img.src = `${item.images.png}`;
  //
  rank_table.innerHTML = `${item.role}`;
  name_table.innerHTML = `${item.name}`;
  description_table.innerHTML = `${item.bio}`;
  crew_img_table.src = `${item.images.png}`;
  //
  rank_mobile.innerHTML = `${item.role}`;
  name_mobile.innerHTML = `${item.name}`;
  description_mobile.innerHTML = `${item.bio}`;
  crew_img_mobile.src = `${item.images.webp}`;
};

const syncPaginationStyles = (selectedName) => {
  // Get all buttons from desktop, table, and mobile
  const allButtons = [
    ...Pagination_desktop.children,
    ...Pagination_table.children,
    ...Pagination_mobile.children,
  ];
  // Reset all buttons to default color
  allButtons.forEach((btn) =>
    btn.classList.replace("bg-white", "bg-[rgba(151,151,151,.5)]")
  );
  // Set the selected button to white on all screens
  allButtons
    .filter((btn) => btn.id === selectedName)
    .forEach((btn) =>
      btn.classList.replace("bg-[rgba(151,151,151,.5)]", "bg-white")
    );
};

const handlePaginationClick = (e) => {
  if (!e.target.id) return;
  let selectedName = e.target.getAttribute("id");
  // Get data and update content
  getDataDestination().then(async (res) => {
    const data = await res.json();
    const selectedItem = data.crew.find((x) => x.name === selectedName);
    if (selectedItem) {
      show_rest_data(selectedItem);
      syncPaginationStyles(selectedName);
    }
  });
};

const main = () => {
  getDataDestination().then(async (res) => {
    const data = await res.json();
    Pagination_desktop.innerHTML = data["crew"]
      .map((a) => {
        return Pagination(a);
      })
      .join("");
    Pagination_table.innerHTML = data["crew"]
      .map((b) => {
        return Pagination(b);
      })
      .join("");
    Pagination_mobile.innerHTML = data["crew"]
      .map((c) => {
        return Pagination(c);
      })
      .join("");
    //
    const defaultMember = data.crew.find((x) => x.name === "Douglas Hurley");
    if (defaultMember) {
      show_rest_data(defaultMember);
      syncPaginationStyles(defaultMember.name);
    }
    // Attach event listeners once
    Pagination_desktop.addEventListener("click", (e) =>
      handlePaginationClick(e)
    );
    Pagination_table.addEventListener("click", (e) => handlePaginationClick(e));
    Pagination_mobile.addEventListener("click", (e) =>
      handlePaginationClick(e)
    );
  });
};
main();
