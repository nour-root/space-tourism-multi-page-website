let pagination_numbered = (pag, i) => {
  return ` <div id="${pag.name}"
                  class="w-[80px] h-[80px] cursor-pointer  rounded-full border-[.1px] border-gray-600 text-3xl flex justify-center items-center"
                >
                  ${i}
                </div>`;
};
export default pagination_numbered;
