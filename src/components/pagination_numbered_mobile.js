let pagination_numbered_mobile = (pag, i) => {
  return ` <div id="${pag.name}"
                    class="w-[40px] h-[40px] cursor-pointer  rounded-full border-[.1px] border-gray-600 text-lg flex justify-center items-center"
                  >
                    ${i}
                  </div>`;
};
export default pagination_numbered_mobile;
