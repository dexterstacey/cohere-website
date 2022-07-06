class Navbar extends HTMLElement {
    constructor(){
        super();
        this.backgroundColor = this.changeBackgroundColor();
    }
    connectedCallback() {
        this.innerHTML = `
    <div class="nav" style="background-color: ${this.backgroundColor};" > <!--; #282828 -->
      <div class="nav_bar">
        <a href="./index.html">
          <img class="nav_img" src="../../images/Cohere-white.png" />
        </a>

        <div class="nav_background">
          <div class="close">
            <span class="nav_background--close">&#10006;</span>
          </div>
          <ul class="nav_background--list">
            <li class="nav_background--list-item">
              <a class="nav-bar--link" href="./index.html">
                Home
              </a>
            </li>
            <li class="nav_background--list-item">
              <a class="nav-bar--link" href="./aboutus.html">
                About Us
              </a>
            </li>
            <li class="nav_background--list-item">
              <a class="nav-bar--link" href="https://news.wearecohere.org">
              Blogs & News
              </a>
            </li>
            <li class="nav_background--list-item">
              <a class="nav-bar--link" href="./getinvolved.html">
                Get Involved
              </a>
            </li>
            <li class="nav_background--list-item">
              <a class="nav-bar--link" href="https://cohere.enthuse.com/donate#!">
                Donate
              </a>
            </li>
          </ul>
        </div>
        <img class="nav_btn" src="../../images/menu.png" />

        <ul class="nav-bar--list">
          <li class="nav-bar--list-item">
            <a class="nav-bar--link" href="./index.html"><h4>Home</h4></a>
          </li>

          <li class="">
           <div class="col-md-1">
              <h4 style="color:white;" class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" style="color:white;" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item u-text-mid" href="./aboutus.html">About Us</a></li>
                  <li><a class="dropdown-item u-text-mid" href="./reports.html">Reports</a></li>
                </ul>
              </h4>
            </div>
          </li>

          <li class="nav-bar--list-item">
            <a class="nav-bar--link" href="https://news.wearecohere.org"><h4>Blogs & News</h4></a>
          </li>
          
          <li class="nav-bar--list-item">
            <a class="nav-bar--link" href="./getinvolved.html"><h4>Get Involved</h4></a>
          </li>
          <li class="nav-bar--list-item">
            <a class="nav-bar--link" href="https://cohere.enthuse.com/donate#!"><h4>Donate</h4></a>
          </li>
        </ul>
      </div>
    </div>
    `;
        this.targetNavigation();
    }
    changeBackgroundColor() {
        const currentUrl = window.location.href.trim().toLocaleLowerCase();
        if (currentUrl.includes("aboutus")) return "#ff6865";
        else if (currentUrl.includes("getinvolved")) return "#ff9343";
        else return "#72ccca";
    }
    targetNavigation() {
        const targetNode = document.querySelector(".nav_btn");
        const navBackground = document.querySelector(".nav_background");
        const closeBtn = document.querySelector(".nav_background--close");
        if (targetNode) {
            targetNode.addEventListener("click", (e)=>{
                navBackground.style.width = "80%";
            });
            document.addEventListener("keydown", (e)=>{
                if (e.key === "Escape") navBackground.style.width = "";
            });
            closeBtn.addEventListener("click", (e)=>{
                navBackground.style.width = "";
            });
        }
    }
}
customElements.define("navbar-component", Navbar);

//# sourceMappingURL=aboutus.7d6e73f3.js.map
