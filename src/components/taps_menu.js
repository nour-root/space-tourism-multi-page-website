let taps_menu = (x) => {
  return `  <div
                  id="${x.name}"
                  class="relative cursor-pointer  hover:*:w-full"
                >
                  <div class="absolute w-0 transition-all duration-300 h-[2px] bg-white -bottom-2 left-0"></div>
                    ${x.name}
                </div>`;
};
export default taps_menu;
