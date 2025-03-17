import taps_menu from "./components/taps_menu";
import getDataDestination from "./service/getData.service";
const tap_menu = document.getElementById("taps-Menu");
let plant_name = document.getElementById("plant-name");
let description = document.getElementById("description");
let distance = document.getElementById("distance");
let travel_time = document.getElementById("travel-time");
let plant_img = document.getElementById("plant-img");
//
const tap_menu_table = document.getElementById("taps-Menu-table");
let plant_name_table = document.getElementById("plant-name-table");
let description_table = document.getElementById("description-table");
let distance_table = document.getElementById("distance-table");
let travel_time_table = document.getElementById("travel-time-table");
let plant_img_table = document.getElementById("plant-img-table");
//
let plant_img_mobile = document.getElementById("plant-img-mobile");
let plant_name_mobile = document.getElementById("plant-name-mobile");
const tap_menu_mobile = document.getElementById("taps-Menu-mobile");
let description_mobile = document.getElementById("description-mobile");
let distance_mobile = document.getElementById("distance-mobile");
let travel_time_mobile = document.getElementById("travel-time-mobile");
let showDetails = () => {
  tap_menu.addEventListener("click", (e) => {
    let value = e.target.ariaValueText;
    getDataDestination().then(async (res) => {
      const data = await res.json();
      data["destinations"].forEach((x) => {
        if (x.name === value) {
          tap_menu.innerHTML = data["destinations"]
            .map((x) => {
              return taps_menu(x, value);
            })
            .join("");
          plant_name.innerHTML = `${x.name}`;
          description.innerText = `${x.description}`;
          distance.innerText = `${x.distance}`;
          travel_time.innerText = `${x.travel}`;
          plant_img.src = `${x.images.png}`;
        }
      });
    });
  });
};
let showDetails_table = () => {
  tap_menu_table.addEventListener("click", (e) => {
    let value = e.target.ariaValueText;
    getDataDestination().then(async (res) => {
      const data = await res.json();
      data["destinations"].forEach((x) => {
        if (x.name === value) {
          tap_menu_table.innerHTML = data["destinations"]
            .map((x) => {
              return taps_menu(x, value);
            })
            .join("");
          plant_name_table.innerHTML = `${x.name}`;
          description_table.innerText = `${x.description}`;
          distance_table.innerText = `${x.distance}`;
          travel_time_table.innerText = `${x.travel}`;
          plant_img_table.src = `${x.images.png}`;
        }
      });
    });
  });
};
let showDetails_mobile = () => {
  tap_menu_mobile.addEventListener("click", (e) => {
    let value = e.target.ariaValueText;
    getDataDestination().then(async (res) => {
      const data = await res.json();
      data["destinations"].forEach((x) => {
        if (x.name === value) {
          tap_menu_mobile.innerHTML = data["destinations"]
            .map((x) => {
              return taps_menu(x, value);
            })
            .join("");
          plant_name_mobile.innerHTML = `${x.name}`;
          description_mobile.innerText = `${x.description}`;
          distance_mobile.innerText = `${x.distance}`;
          travel_time_mobile.innerText = `${x.travel}`;
          plant_img_mobile.src = `${x.images.png}`;
        }
      });
    });
  });
};
const main = () => {
  getDataDestination().then(async (res) => {
    const data = await res.json();
    data["destinations"].forEach((x) => {
      if (x.name === "Moon") {
        tap_menu.innerHTML = data["destinations"]
          .map((x) => {
            return taps_menu(x, "Moon");
          })
          .join("");
        plant_name.innerHTML = `${x.name}`;
        description.innerText = `${x.description}`;
        distance.innerText = `${x.distance}`;
        travel_time.innerText = `${x.travel}`;
        plant_img.src = `${x.images.webp}`;
        //
        tap_menu_table.innerHTML = data["destinations"]
          .map((x) => {
            return taps_menu(x, "Moon");
          })
          .join("");
        plant_name_table.innerHTML = `${x.name}`;
        description_table.innerText = `${x.description}`;
        distance_table.innerText = `${x.distance}`;
        travel_time_table.innerText = `${x.travel}`;
        plant_img_table.src = `${x.images.png}`;
        //
        tap_menu_mobile.innerHTML = data["destinations"]
          .map((x) => {
            return taps_menu(x, "Moon");
          })
          .join("");
        plant_name_mobile.innerHTML = `${x.name}`;
        description_mobile.innerText = `${x.description}`;
        distance_mobile.innerText = `${x.distance}`;
        travel_time_mobile.innerText = `${x.travel}`;
        plant_img_mobile.src = `${x.images.webp}`;
      }
    });
  });
};
main();
showDetails();
showDetails_table();
showDetails_mobile();
