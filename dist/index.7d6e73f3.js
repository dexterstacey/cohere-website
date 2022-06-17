class Navbar extends HTMLElement {
    constructor(){
        super();
        this.backgroundColor = this.changeBackgroundColor();
    }
    connectedCallback() {
        this.innerHTML = `
    <div class="nav" style="background-color: ${this.backgroundColor};" > <!--; #282828 -->
      <div class="nav_bar">
      <img class="nav_img" src="./images/Cohere-white.png" />
        <ul class="nav-bar--list">
          <li class="nav-bar--list-item">
            <a class="nav-bar--link" href="./index.html"><h4>Home</h4></a>
          </li>
          <li class="nav-bar--list-item">
            <a class="nav-bar--link" href="./aboutus.html"><h4>About</h4></a>
          </li>
          <li class="nav-bar--list-item">
            <a class="nav-bar--link" href="https://news.wearecohere.org"><h4>Blogs & News</h4></a>
          </li>
          <li class="nav-bar--list-item">
            <a class="nav-bar--link" href="./getinvolved.html"><h4>Get Involved</h4></a>
          </li>
          <li class="nav-bar--list-item">
            <a class="nav-bar--link" href="https://cohere.enthuse.com/donate#!/><h4>Donate</h4></a>
          </li>
        </ul>
      </div>
    </div>
    `;
    }
    changeBackgroundColor() {
        const currentUrl = window.location.href.trim().toLocaleLowerCase();
        if (currentUrl.includes("aboutus")) return "#ff6865";
        else if (currentUrl.includes("getinvolved")) return "#ff9343";
        else return "#72ccca";
    }
}
customElements.define("navbar-component", Navbar);

//# sourceMappingURL=index.7d6e73f3.js.map
