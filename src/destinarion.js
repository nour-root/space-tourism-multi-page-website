import images_items from "./components/images";
import taps_menu from "./components/taps_menu";
import getDataDestination from "./service/getData.service";
import images_items_table from "./components/images_table";
import images_items_mobile from "./components/images_mobile";
import gsap from "gsap";
const tap_menu = document.getElementById("taps-Menu");
let plant_name = document.getElementById("plant-name");
let description = document.getElementById("description");
let distance = document.getElementById("distance");
let travel_time = document.getElementById("travel-time");
let content_image = document.querySelector(".image");
//
const tap_menu_table = document.getElementById("taps-Menu-table");
let plant_name_table = document.getElementById("plant-name-table");
let description_table = document.getElementById("description-table");
let distance_table = document.getElementById("distance-table");
let travel_time_table = document.getElementById("travel-time-table");
let content_image_table = document.querySelector(".image-table");
//
let plant_name_mobile = document.getElementById("plant-name-mobile");
const tap_menu_mobile = document.getElementById("taps-Menu-mobile");
let description_mobile = document.getElementById("description-mobile");
let distance_mobile = document.getElementById("distance-mobile");
let travel_time_mobile = document.getElementById("travel-time-mobile");
let content_image_mobile = document.querySelector(".image-mobile");
//
let statistics = document.getElementById("statistics");
let statistics_table = document.getElementById("statistics-table");
let statistics_mobile = document.getElementById("statistics-mobile");
//
let showDetails = (item) => {
  plant_name.innerHTML = `${item.name}`;
  description.innerText = `${item.description}`;
  distance.innerText = `${item.distance}`;
  travel_time.innerText = `${item.travel}`;
  //
  plant_name_table.innerHTML = `${item.name}`;
  description_table.innerText = `${item.description}`;
  distance_table.innerText = `${item.distance}`;
  travel_time_table.innerText = `${item.travel}`;
  //
  plant_name_mobile.innerHTML = `${item.name}`;
  description_mobile.innerText = `${item.description}`;
  distance_mobile.innerText = `${item.distance}`;
  travel_time_mobile.innerText = `${item.travel}`;

  time_animated(item);
  text_animation();
};
let time_animated = (item) => {
  getDataDestination().then(async (res) => {
    const data = await res.json();
    let all_images = data.destinations.filter((x) => x.name !== item.name);
    let current_selector = data.destinations.filter(
      (x) => x.name === item.name
    );

    all_images.forEach((img) => {
      if ((item.images.png = `${img.images.png}`)) {
        document
          .getElementById(`img-${img.name}`)
          .classList.add("hidden", "scale-0");
        document.getElementById(`img-${img.name}`).classList.add("img-animate");
        //
        document
          .getElementById(`img-${img.name}-table`)
          .classList.add("hidden", "scale-0");
        document
          .getElementById(`img-${img.name}-table`)
          .classList.add("img-animate");
        //
        document
          .getElementById(`img-${img.name}-mobile`)
          .classList.add("hidden", "scale-0");
        document
          .getElementById(`img-${img.name}-mobile`)
          .classList.add("img-animate");
      }
    });

    if ((item.images.png = `${current_selector[0].images.png}`)) {
      document
        .getElementById(`img-${item.name}`)
        .classList.remove("hidden", "scale-0");
      document.getElementById(`img-${item.name}`).classList.add("img-animate");
      //
      document
        .getElementById(`img-${item.name}-table`)
        .classList.remove("hidden", "scale-0");
      document
        .getElementById(`img-${item.name}-table`)
        .classList.add("img-animate");
      //
      document
        .getElementById(`img-${item.name}-mobile`)
        .classList.remove("hidden", "scale-0");
      document
        .getElementById(`img-${item.name}-mobile`)
        .classList.add("img-animate");
    }
  });
};
let text_animation = () => {
  gsap.set([description, plant_name, statistics], {
    opacity: 0,
    filter: "blur(10px)",
    y: 10,
  });
  gsap.to(plant_name, {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.7,
    delay: 0.2,
    ease: "power2.out",
  });
  gsap.to(description, {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.7,
    delay: 0.3,
    ease: "power2.out",
  });
  gsap.to(statistics, {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.7,
    delay: 0.4,
    ease: "power2.out",
  });

  gsap.set([description_table, plant_name_table, statistics_table], {
    opacity: 0,
    filter: "blur(10px)",
    y: 10,
  });
  gsap.to(plant_name_table, {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.7,
    delay: 0.2,
    ease: "power2.out",
  });
  gsap.to(description_table, {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.7,
    delay: 0.3,
    ease: "power2.out",
  });
  gsap.to(statistics_table, {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.7,
    delay: 0.4,
    ease: "power2.out",
  });

  gsap.set(description_mobile, {
    opacity: 0,
    filter: "blur(10px)",
    x: 10,
  });
  gsap.set(statistics_mobile, {
    opacity: 0,
    filter: "blur(10px)",
    x: -10,
  });
  gsap.set(plant_name_mobile, {
    opacity: 0,
    filter: "blur(10px)",
    y: -10,
  });
  gsap.to(plant_name_mobile, {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 0.7,
    delay: 0.2,
    ease: "power2.out",
  });
  gsap.to(description_mobile, {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    duration: 0.7,
    delay: 0.3,
    ease: "power2.out",
  });
  gsap.to(statistics_mobile, {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    duration: 0.7,
    delay: 0.4,
    ease: "power2.out",
  });
};
const handlePaginationClick = (e) => {
  if (!e.target.id) return;
  let selectedName = e.target.getAttribute("id");
  // Get data and update content
  getDataDestination().then(async (res) => {
    const data = await res.json();
    const selectedItem = data.destinations.find((x) => x.name === selectedName);
    if (selectedItem) {
      showDetails(selectedItem);
      syncPaginationStyles(selectedName);
      text_animation();
    }
  });
};
const syncPaginationStyles = (selectedName) => {
  let alltaps = [
    ...tap_menu.children,
    ...tap_menu_table.children,
    ...tap_menu_mobile.children,
  ];
  alltaps.forEach((tap) => {
    tap.classList.remove("Active");
  });
  //
  alltaps
    .filter((tap) => tap.id === selectedName)
    .forEach((tap) => {
      tap.classList.add("Active");
    });
  //
};
//
const main = () => {
  getDataDestination().then(async (res) => {
    const data = await res.json();
    content_image.innerHTML = data.destinations
      .map((img) => {
        return images_items(img);
      })
      .join("");
    content_image_table.innerHTML = data.destinations
      .map((img) => {
        return images_items_table(img);
      })
      .join("");
    content_image_mobile.innerHTML = data.destinations
      .map((img) => {
        return images_items_mobile(img);
      })
      .join("");

    tap_menu.innerHTML = data["destinations"]
      .map((x) => {
        return taps_menu(x);
      })
      .join("");

    tap_menu_table.innerHTML = data["destinations"]
      .map((x) => {
        return taps_menu(x);
      })
      .join("");

    tap_menu_mobile.innerHTML = data["destinations"]
      .map((x) => {
        return taps_menu(x);
      })
      .join("");

    //
    const currentItem = data.destinations.find((x) => x.name === "Moon");
    if (currentItem) {
      showDetails(currentItem);
      syncPaginationStyles(currentItem.name);
    }
    tap_menu.addEventListener("click", (e) => {
      handlePaginationClick(e);
    });
    tap_menu_table.addEventListener("click", (e) => {
      handlePaginationClick(e);
    });
    tap_menu_mobile.addEventListener("click", (e) => {
      handlePaginationClick(e);
    });
  });
};
main();
showDetails();
