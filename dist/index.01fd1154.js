class e extends HTMLElement{constructor(){super(),this.backgroundColor=this.changeBackgroundColor()}connectedCallback(){this.innerHTML=`\n    <div class="container-fluid" style="background-color: ${this.backgroundColor};" > \x3c!--; #282828 --\x3e\n      <div class="d-flex flex-row justify-content-end align-items-center">\n          \x3c!-- Donate Button --\x3e\n          <div class="col-md-1">\n              <a href="https://cohere.enthuse.com/donate#!/" style="text-decoration: none!important;"><h4 style="color: white;">Donate</h4></a>\n          </div>\n\n          \x3c!-- Dropdown Menu--\x3e\n          <div class="col-md-1">\n              <h4 style="color:white;" class="nav-item dropdown">\n                  <a class="nav-link dropdown-toggle" style="color:white;" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">\n                      Menu\n                  </a>\n                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">\n                <li><a class="dropdown-item u-text-mid" href="./aboutus.html">About Us</a></li>\n                <li><a class="dropdown-item u-text-mid" href="./getinvolved.html">Get Involved</a></li>\n                <li><a class="dropdown-item u-text-mid" href="./reports.html">Reports</a></li>\n                <li><a class="dropdown-item u-text-mid" href="https://news.wearecohere.org">News</a></li>\n                <li><hr class="dropdown-divider"></li>\n                <li><a class="dropdown-item u-text-mid" href="./index.html">Home</a></li>\n                </ul>\n              </h4>\n          </div>\n      </div>\n    </div>\n    `}changeBackgroundColor(){const e=window.location.href.trim().toLocaleLowerCase();return e.includes("aboutus")?"#ff6865":e.includes("getinvolved")?"#ff9343":"#72ccca"}}customElements.define("navbar-component",e);
//# sourceMappingURL=index.01fd1154.js.map
