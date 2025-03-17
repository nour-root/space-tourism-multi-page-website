let taps_menu = (x, name) => {
  return `  <div
                  id="tap"
                  class="${
                    x.name === name ? "Active" : ""
                  } relative cursor-pointer  hover:*:w-full"
                  aria-valuetext="${x.name}"
                >
                  <div class="absolute w-0 transition-all duration-200 h-[2px] bg-white -bottom-2 left-0"></div>
                    ${x.name}
                </div>`;
};
export default taps_menu;
