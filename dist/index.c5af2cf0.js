class n extends HTMLElement{constructor(){super(),this.backgroundColor=this.changeBackgroundColor()}connectedCallback(){this.innerHTML=`\n    <div class="nav" style="background-color: ${this.backgroundColor};" > \x3c!--; #282828 --\x3e\n      <div class="nav_bar">\n        <a href="./index.html">\n          \x3c!--<img class="nav_img" src="../../images/Cohere-white.png" />--\x3e\n        </a>\n\n        <div class="nav_background">\n          <div class="close">\n            <span class="nav_background--close">&#10006;</span>\n          </div>\n          <ul class="nav_background--list">\n            <li class="nav_background--list-item">\n              <a class="nav-bar--link" href="./index.html">\n                Home\n              </a>\n            </li>\n            <li class="nav_background--list-item">\n              <a class="nav-bar--link" href="./aboutus.html">\n                About Us\n              </a>\n            </li>\n            <li class="nav_background--list-item">\n              <a class="nav-bar--link" href="https://news.wearecohere.org">\n              Blogs & News\n              </a>\n            </li>\n            <li class="nav_background--list-item">\n              <a class="nav-bar--link" href="./getinvolved.html">\n                Get Involved\n              </a>\n            </li>\n            <li class="nav_background--list-item">\n              <a class="nav-bar--link" href="https://cohere.enthuse.com/donate#!">\n                Donate\n              </a>\n            </li>\n          </ul>\n        </div>\n        <span class="nav_btn">&equiv;</span>\n\n        <ul class="nav-bar--list">\n          <li class="nav-bar--list-item">\n            <a class="nav-bar--link" href="./index.html"><h4>Home</h4></a>\n          </li>\n\n          <li class="">\n           <div class="col-md-1">\n              <h4 style="color:white;" class="nav-item dropdown">\n                <a class="nav-link dropdown-toggle" style="color:white;" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">\n                    About\n                </a>\n                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">\n                  <li><a class="dropdown-item u-text-mid" href="./aboutus.html">About Us</a></li>\n                  <li><a class="dropdown-item u-text-mid" href="./reports.html">Reports</a></li>\n                  <li><a class="dropdown-item u-text-mid" href="./team.html">Team</a></li>\n                </ul>\n              </h4>\n            </div>\n          </li>\n\n          <li class="nav-bar--list-item">\n            <a class="nav-bar--link" href="https://news.wearecohere.org"><h4>Blogs & News</h4></a>\n          </li>\n          \n          <li class="nav-bar--list-item">\n            <a class="nav-bar--link" href="./getinvolved.html"><h4>Get Involved</h4></a>\n          </li>\n          <li class="nav-bar--list-item">\n            <a class="nav-bar--link" href="https://cohere.enthuse.com/donate#!"><h4>Donate</h4></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    `,this.targetNavigation()}changeBackgroundColor(){const n=window.location.href.trim().toLocaleLowerCase();return n.includes("aboutus")?"#ff6865":n.includes("getinvolved")?"#ff9343":"#72ccca"}targetNavigation(){const n=document.querySelector(".nav_btn"),a=document.querySelector(".nav_background"),e=document.querySelector(".nav_background--close");n&&(n.addEventListener("click",(n=>{a.style.width="80%"})),document.addEventListener("keydown",(n=>{"Escape"===n.key&&(a.style.width="")})),e.addEventListener("click",(n=>{a.style.width=""})))}}customElements.define("navbar-component",n);
//# sourceMappingURL=index.c5af2cf0.js.map
