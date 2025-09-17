export class NavlinkContent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute("title") || "Default title";
    const description =
      this.getAttribute("description") || "Default description";
    const image = this.getAttribute("image") || "Default image";

    this.innerHTML = `
                <div class="flex justify-between pb-4 gap-8">
                    <div class="flex flex-col gap-2">
                      <h2 class="font-noto-serif text-3xl w-fit">${title}</h2>
                      <p class="font-normal text-base w-fit">
                        ${description}
                      </p>
                    </div>
                    ${
                      image
                        ? `
                        <img
                      src="${image}"
                      alt="Illustration image"
                      width="120"
                    />
                        `
                        : ""
                    }
                    
                </div>
            `;
  }
}

export class NavlinkLink extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const linkAttr = this.getAttribute("links") || "[]";
    let links = [];

    try {
      links = JSON.parse(linkAttr);
    } catch (e) {
      console.error("Invalid attribute", e);
    }

    this.innerHTML = `
                ${links
                  .map(
                    (link) => `
                    <a href="#" class="${
                      link.label === "Product"
                        ? "flex items-center gap-3 py-3"
                        : "flex items-center gap-3 py-3 border-b border-[#5ABE89]"
                    }">
                        ${
                          link.icon
                            ? `<img src="${link.icon}" alt="Link icon" width="20" />`
                            : ""
                        }
                        <span class="text-base">${link.label}</span>
                    </a>
                    `
                  )
                  .join("")}
            `;
  }
}

export class NavlinkResourcesContent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const linkAttr = this.getAttribute("links") || "[]";
    let links = [];

    try {
      links = JSON.parse(linkAttr);
    } catch (e) {
      console.error("Invalid attribute", e);
    }

    this.innerHTML = `
                ${links
                  .map(
                    (link) => `
                    <a href="#" class="${
                      link.title === "Customer center"
                        ? "flex items-center gap-3 py-3"
                        : "flex items-center gap-3 py-3 border-b border-[#FD975D]"
                    }">
                        ${
                          link.icon
                            ? `<img src="${link.icon}" alt="Link icon" width="18" class="self-start mt-1" />`
                            : ""
                        }
                        <div class="flex flex-col gap-2">
                            <h3 class="text-base">${link.title}</h3>
                            <p class="text-base font-normal leading-tight">${
                              link.text
                            }</p>
                        </div>
                        
                    </a>
                    `
                  )
                  .join("")}
            `;
  }
}

export class NavlinkCompanyContent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const linkAttr = this.getAttribute("links") || "[]";
    let links = [];

    try {
      links = JSON.parse(linkAttr);
    } catch (e) {
      console.error("Invalid attribute", e);
    }

    this.innerHTML = `
                ${links
                  .map(
                    (link) => `
                    <a href="#" class="${
                      link.title === "Newsroom"
                        ? "flex items-center gap-3 py-3"
                        : "flex items-center gap-3 py-3 border-b border-[#F486B8]"
                    }">
                        ${
                          link.icon
                            ? `<img src="${link.icon}" alt="Link icon" width="18" class="self-start mt-1" />`
                            : ""
                        }
                        
                            <h3 class="text-base">${link.title}</h3>
                           
                        
                    </a>
                    `
                  )
                  .join("")}
            `;
  }
}
