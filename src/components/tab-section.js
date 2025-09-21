export class TabSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute("title") || "";
    const contentImage = this.getAttribute("content-image") || "";
    const contentHeading = this.getAttribute("content-heading") || "";
    const contentSubheading = this.getAttribute("content-subheading") || "";
    const contentDescription = this.getAttribute("content-description") || "";
    const contentIcon = this.getAttribute("content-icon") || "";
    const contentBgColor = this.getAttribute("bg-color") || "";
    const contentBorderColor = this.getAttribute("border-color") || "";
    const textColor = this.getAttribute("text-color") || "";

    const element = `
        <div class="text-[${textColor}] relative w-full flex ${
      contentHeading == "Report" || contentHeading == "Collaborate"
        ? ""
        : "group"
    }">
            <div class="${
              (contentBgColor, contentBorderColor)
            } border p-4 flex rounded-lg min-w-[12rem] min-h-[5rem] cursor-pointer">
                <p class="font-noto-serif text-base">${title}</p>
            </div>
            <div class="${contentBgColor} ${contentBorderColor} border hidden group-hover:flex gap-5 absolute h-fit min-w-[50rem] p-4 top-full mt-5 rounded-lg">
                ${
                  contentImage &&
                  `<img class="w-full rounded-lg object-cover" src="${contentImage}" alt="" width="300"/>`
                }
                <div class="flex flex-col justify-between w-full relative">
                    <div class="flex flex-col gap-4">
                        <h1 class="font-noto-serif font-medium text-3xl">${contentHeading}</h1>
                        <h2 class="font-inter font-semibold leading-5">${contentSubheading}</h2>
                        <p class="font-inter text-sm">${contentDescription}</p>
                    </div>
                    ${
                      contentIcon &&
                      `<img class="mt-9 w-[9rem]" src="${contentIcon}" alt="Tab section content illustration" width="100"/>`
                    }
                    <div class="${contentBgColor} absolute -right-[2.25rem] top-[50%] grid place-items-center border ${contentBorderColor} rounded-full p-3">
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M-2.62268e-07 6C-2.80374e-07 5.58579 0.335786 5.25 0.75 5.25L11.3879 5.25L7.23017 1.29062C6.93159 1.00353 6.92228 0.528746 7.20937 0.230167C7.49647 -0.0684112 7.97125 -0.077721 8.26983 0.209374L13.7698 5.45937C13.9169 5.60078 14 5.79599 14 6C14 6.20401 13.9169 6.39922 13.7698 6.54062L8.26983 11.7906C7.97125 12.0777 7.49647 12.0684 7.20938 11.7698C6.92228 11.4713 6.93159 10.9965 7.23017 10.7094L11.3879 6.75L0.75 6.75C0.335786 6.75 -2.44163e-07 6.41421 -2.62268e-07 6Z" fill="${textColor}"/>
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    `;

    this.innerHTML = element;
  }
}
