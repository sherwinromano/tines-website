import {
  NavlinkContent,
  NavlinkLink,
  NavlinkResourcesContent,
  NavlinkCompanyContent,
} from "./components/header-link-content.js";

customElements.define("wc-navlink-content", NavlinkContent);
customElements.define("wc-navlink-link", NavlinkLink);
customElements.define("wc-navlink-resources-content", NavlinkResourcesContent);
customElements.define("wc-navlink-company-content", NavlinkCompanyContent);

const searchIcon = document.querySelector("#search-icon");
const searchContent = document.querySelector("#search-content");
const sidebarMenu = document.querySelector("#sidebar-menu");
const sidebarIcon = document.querySelector("#sidebar-menu > img");
const sidebarContent = document.querySelector("#sidebar-content");

searchIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  searchContent.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!searchContent.classList.contains("hidden")) {
    if (!searchContent.contains(e.target) && e.target !== searchIcon) {
      searchContent.classList.add("hidden");
    }
  }
});

sidebarMenu.addEventListener("click", () => {
  sidebarContent.classList.toggle("hidden");

  if (!sidebarContent.classList.contains("hidden")) {
    sidebarIcon.setAttribute("src", "assets/sidebar-icons/x-mark.svg");
    document.body.style = "overflow: hidden";
  } else {
    sidebarIcon.setAttribute("src", "assets/sidebar-icons/bars.svg");
    document.body.style = "overflow: auto";
  }
});

// ?? Opens only one accordion

document
  .querySelectorAll("aside#sidebar-content details")
  .forEach((details) => {
    details.addEventListener("toggle", function () {
      if (details.open) {
        document
          .querySelectorAll("aside#sidebar-content details")
          .forEach((other) => {
            if (other !== details) other.open = false;
          });
      }
    });
  });

const companyLogoCopy = document.querySelectorAll("#slider-wrapper img");

companyLogoCopy.forEach((img) => {
  const copy = img.cloneNode(true);
  document.querySelector("#slider-wrapper").appendChild(copy);
});
