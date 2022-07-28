class Navbar extends HTMLElement {
  constructor() {
    super();
    this.backgroundColor = this.changeBackgroundColor();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="container-fluid" style="background-color: ${this.backgroundColor};" > <!--; #282828 -->
      <div class="d-flex flex-row justify-content-end align-items-center">
          <!-- Donate Button -->
          <div class="col-md-1">
              <a href="https://cohere.enthuse.com/donate#!/" style="text-decoration: none!important;"><h4 style="color: white;">Donate</h4></a>
          </div>

          <!-- Dropdown Menu-->
          <div class="col-md-1">
              <h4 style="color:white;" class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" style="color:white;" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Menu
                  </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item u-text-mid" href="./aboutus.html">About Us</a></li>
                <li><a class="dropdown-item u-text-mid" href="./getinvolved.html">Get Involved</a></li>
                <li><a class="dropdown-item u-text-mid" href="./reports.html">Reports</a></li>
                <li><a class="dropdown-item u-text-mid" href="./team">Team</a></li>
                <li><a class="dropdown-item u-text-mid" href="https://news.wearecohere.org">News</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item u-text-mid" href="./index.html">Home</a></li>
                </ul>
              </h4>
          </div>
      </div>
    </div>
    `;
  }

  changeBackgroundColor() {
    const currentUrl = window.location.href.trim().toLocaleLowerCase();

    if (currentUrl.includes("aboutus")) {
      return "#ff6865";
    } else if (currentUrl.includes("getinvolved")) {
      return "#ff9343";
    } else {
      return "#72ccca";
    }
  }
}

customElements.define("navbar-component", Navbar);
