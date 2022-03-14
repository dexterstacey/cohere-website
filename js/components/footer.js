class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section id="footer">
        <div class="container-fluid" style="background-color: #72ccca;">
            <div class="container">
                <div class="d-flex justify-content-between row pt-3">
                    <div class="col-md-2">
                        <h3>CONTACT US</h3>
                        <p><b>Kenya Office</b><br />
                        Wamagata Court<br /> 
                        Woodley, Nairobi <br /> 
                        P.O Box 61716-00200
                    </p>
                    </div>

                    <div class="col-md-2">
                        <h3>_</h3>
                        <p><b>Uganda Office</b><br />
                        Hanlon Road<br />
                        Nsambya, Kampala
                    </p>
                    </div>

                    <div class="col-md-4 text-center">
                        <h3>STAY IN TOUCH</h3>
                        <button onclick="window.location='http://eepurl.com/hVLcTb';" class="btn btn-outline-dark">Sign Up to Our Mailing List</button>

                    </div>

                    <style>.linkage a {text-decoration: none; color: #282828;}</style>
                    <div class="col-md-3 linkage text-center">
                        <h3>FOLLOW US</h3>
                        <h3><a href="https://www.instagram.com/wearecohere_org/"><i class="bi bi-instagram me-3"></a></i><a href="https://twitter.com/WeAreCohere_Org"><i class="bi bi-twitter me-3"></i></a>
                        <a href="https://www.linkedin.com/company/79070903"><i class="bi bi-linkedin me-3"></i></a><a href="https://www.facebook.com/CohereOrg"><i class="bi bi-facebook me-3"></i></a></h3>

                    </div>
                </div>
            </div>

        </div>
    </section>
    `;
  }
}

customElements.define("footer-component", Footer);
