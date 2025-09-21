import {
  NavlinkContent,
  NavlinkLink,
  NavlinkResourcesContent,
  NavlinkCompanyContent,
} from "./components/header-link-content.js";
import {
  TestimonialRatings,
  GridSection,
  MerfFeatures,
} from "./components/testimonial-and-grid-contents.js";
import { TestimonialMarquee } from "./components/testimonial-marquee.js";
import { ProductUpdates } from "./components/product-updates-list.js";
import { TabSection } from "./components/tab-section.js";

customElements.define("wc-navlink-content", NavlinkContent);
customElements.define("wc-navlink-link", NavlinkLink);
customElements.define("wc-navlink-resources-content", NavlinkResourcesContent);
customElements.define("wc-navlink-company-content", NavlinkCompanyContent);

customElements.define("wc-testimonial-child", TestimonialMarquee);
customElements.define("wc-testimonial-ratings", TestimonialRatings);
customElements.define("wc-grid-child", GridSection);
customElements.define("wc-merf-features", MerfFeatures);

customElements.define("wc-product-update-list", ProductUpdates);

customElements.define("wc-tab-section", TabSection);

const companyLogoCopy = document.querySelectorAll("#slider-wrapper img");

companyLogoCopy.forEach((img) => {
  const copy = img.cloneNode(true);
  document.querySelector("#slider-wrapper").appendChild(copy);
});
