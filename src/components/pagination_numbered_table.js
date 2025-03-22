let pagination_numbered_table = (pag, i) => {
  return ` <div id="${pag.name}"
                    class="w-[56px] h-[56px] cursor-pointer  rounded-full border-[.1px] border-gray-600 text-2xl flex justify-center items-center"
                  >
                    ${i}
                  </div>`;
};
export default pagination_numbered_table;
