// ?? Below in the Loved by our customers heading
export class TestimonialRatings extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const icon = this.getAttribute("icon") || "";
    const ratings = this.getAttribute("ratings") || "";

    const element = `
            <div class="flex items-center gap-3 font-inter">
                ${
                  icon
                    ? `<img src=${icon} alt="Company icon" width="100" />`
                    : ""
                }
                ${ratings ? `<p class="text-sm text-white">${ratings}</p>` : ""}
                <div class="flex gap-2">
                    <svg width="16" height="16" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86804 0.88614C9.54694 0.114125 8.45329 0.114125 8.13219 0.88614L6.3014 5.28791L1.54932 5.66888C0.715863 5.7357 0.377908 6.77581 1.01291 7.31976L4.63349 10.4212L3.52735 15.0584C3.33334 15.8717 4.21812 16.5145 4.93167 16.0787L9.00011 13.5937L13.0686 16.0787C13.7821 16.5145 14.6669 15.8717 14.4729 15.0584L13.3667 10.4212L16.9873 7.31976C17.6223 6.77581 17.2844 5.7357 16.4509 5.66888L11.6988 5.28791L9.86804 0.88614Z" fill="white"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86804 0.88614C9.54694 0.114125 8.45329 0.114125 8.13219 0.88614L6.3014 5.28791L1.54932 5.66888C0.715863 5.7357 0.377908 6.77581 1.01291 7.31976L4.63349 10.4212L3.52735 15.0584C3.33334 15.8717 4.21812 16.5145 4.93167 16.0787L9.00011 13.5937L13.0686 16.0787C13.7821 16.5145 14.6669 15.8717 14.4729 15.0584L13.3667 10.4212L16.9873 7.31976C17.6223 6.77581 17.2844 5.7357 16.4509 5.66888L11.6988 5.28791L9.86804 0.88614Z" fill="white"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86804 0.88614C9.54694 0.114125 8.45329 0.114125 8.13219 0.88614L6.3014 5.28791L1.54932 5.66888C0.715863 5.7357 0.377908 6.77581 1.01291 7.31976L4.63349 10.4212L3.52735 15.0584C3.33334 15.8717 4.21812 16.5145 4.93167 16.0787L9.00011 13.5937L13.0686 16.0787C13.7821 16.5145 14.6669 15.8717 14.4729 15.0584L13.3667 10.4212L16.9873 7.31976C17.6223 6.77581 17.2844 5.7357 16.4509 5.66888L11.6988 5.28791L9.86804 0.88614Z" fill="white"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86804 0.88614C9.54694 0.114125 8.45329 0.114125 8.13219 0.88614L6.3014 5.28791L1.54932 5.66888C0.715863 5.7357 0.377908 6.77581 1.01291 7.31976L4.63349 10.4212L3.52735 15.0584C3.33334 15.8717 4.21812 16.5145 4.93167 16.0787L9.00011 13.5937L13.0686 16.0787C13.7821 16.5145 14.6669 15.8717 14.4729 15.0584L13.3667 10.4212L16.9873 7.31976C17.6223 6.77581 17.2844 5.7357 16.4509 5.66888L11.6988 5.28791L9.86804 0.88614Z" fill="white"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.86804 0.88614C9.54694 0.114125 8.45329 0.114125 8.13219 0.88614L6.3014 5.28791L1.54932 5.66888C0.715863 5.7357 0.377908 6.77581 1.01291 7.31976L4.63349 10.4212L3.52735 15.0584C3.33334 15.8717 4.21812 16.5145 4.93167 16.0787L9.00011 13.5937L13.0686 16.0787C13.7821 16.5145 14.6669 15.8717 14.4729 15.0584L13.3667 10.4212L16.9873 7.31976C17.6223 6.77581 17.2844 5.7357 16.4509 5.66888L11.6988 5.28791L9.86804 0.88614Z" fill="white"/>
                    </svg>
                </div>
                <span class="text-white text-sm">4.8</span>
            </div>
        `;
    this.innerHTML = element;
  }
}

// ?? Grid v2 section child
export class GridSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const heading = this.getAttribute("heading") || "Default heading";
    const subheading = this.getAttribute("subheading") || "";
    const description = this.getAttribute("description") || "";
    const image = this.getAttribute("image") || "";

    const element = `
            <div class="flex flex-col justify-between p-7 border border-white rounded-lg gap-24 h-full">
                <div class="flex flex-col font-noto-serif text-white">
                    <h2 class="text-[1.50rem] leading-5">${subheading}</h2>
                    <h1 class="font-bold xs:text-[1.80rem] sm:text-[1.95rem] lg:text-[2rem]">${heading}</h1>
                </div>
                <div class="flex items-end justify-between gap-8">
                    <div class="flex flex-col font-inter text-white">
                        ${
                          description &&
                          `<p class="text-base leading-5">${description}</p>`
                        }
                        <a href="#" class="flex gap-2 text-sm mt-5">
                            Learn more
                            <img src="./assets/arrow-long-right-white.svg" alt="Arrow long right white icon" width="16"/>
                        </a>
                    </div>
                    ${
                      image &&
                      `<img class="xs:hidden md:block" src="${image}" alt="Illustration image" width="150"/>`
                    }
                </div>
            </div>
        `;

    this.innerHTML = element;
  }
}

export class MerfFeatures extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const icon = this.getAttribute("icon") || "";
    const title = this.getAttribute("title") || "";

    const element = `
            <div class="flex items-center gap-2"> 
                ${
                  icon &&
                  `<div class="border border-white rounded-full py-[8px] px-[9px] flex">
                    <img  src="${icon}" alt="Merf features icon" width="14"/>
                  </div>`
                }
                ${
                  title &&
                  `<p class="text-base text-white font-inter">${title}</p>`
                }
            </div>
        `;

    this.innerHTML = element;
  }
}
