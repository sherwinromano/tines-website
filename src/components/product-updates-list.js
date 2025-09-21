export class ProductUpdates extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const image = this.getAttribute("image") || "";
    const title = this.getAttribute("title") || "";
    const about = this.getAttribute("about") || "";
    const date = this.getAttribute("date") || "";

    const element = `
            <a href="#" class="flex items-center gap-4">
                ${
                  image &&
                  `<img class="xs:hidden sm:block w-[6rem]" src="${image}" alt="Product update illustration" width="30"/>`
                }
                <div class="flex flex-col gap-2 pb-5 border-b border-[#ccc] w-full">
                    ${
                      title &&
                      `<h1 class="font-noto-serif text-[1.3rem] leading-5">${title}</h1>`
                    }
                    <div class="flex font-inter">
                        ${
                          about &&
                          `<p class="border-r border-[#252525] pr-4 font-semibold text-sm text-[#252525]">${about}</p>`
                        }
                        ${
                          date &&
                          `<p class="pl-4 text-[#676767] text-sm">${date}</p>`
                        }
                    </div>
                </div>
            </a>
        `;

    this.innerHTML = element;
  }
}
