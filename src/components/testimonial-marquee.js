export class TestimonialMarquee extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const description = this.getAttribute("description") || "";
    const heading = this.getAttribute("heading") || "";
    const subheading = this.getAttribute("subheading") || "";
    const icon = this.getAttribute("icon") || "";
    const image = this.getAttribute("image") || "";
    const colors = this.getAttribute("colors") || "";
    const textColor = this.getAttribute("textColor") || "";

    const element = `
            <div class="${
              colors && colors
            } xs:p-5 md:p-8 rounded-2xl flex justify-between gap-4 h-full">
                <div class="${
                  image ? "xs:w-full md:w-1/2" : "w-full"
                } flex flex-col justify-between xs:gap-10 md:gap-14">
                    <div class="flex flex-col gap-3 ${
                      image ? "w-full" : "xs:w-full md:w-[80%]"
                    }">
                      ${
                        description &&
                        `<h1 class="${
                          textColor && textColor
                        } font-noto-serif text-2xl leading-8">${description}</h1>`
                      }
                    ${
                      heading &&
                      `<h1 class="${
                        textColor && textColor
                      } font-noto-serif text-5xl">${heading}</h1>`
                    }
                    ${
                      subheading &&
                      `<p class="${textColor} font-inter w-1/2 leading-5">${subheading}</p>`
                    }
                    </div>
                    
                    <div class="flex justify-between ${
                      image ? "self-start" : "self-end"
                    }">
                       
                        ${
                          icon &&
                          `<img class="w-[5rem]" src="${icon}" alt="Testimonial grid company icon" width="16"/>`
                        }
                    </div>
                </div>
                ${
                  image &&
                  `<img class="xs:hidden lg:block w-[40%] object-cover rounded-lg border border-[#F486B8]" src="${image}" alt="Testimonial grid image" width="120"/>`
                }
            </div>
        `;

    this.innerHTML = element;
  }
}
