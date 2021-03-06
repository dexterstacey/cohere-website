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

                    <div class="col-md-2">
                        <h3>_</h3>
                        <p><b>Dean Farm, Oaksey,</b><br />
                        Malmesbury, Wilts, <br />
                        SN16 9SB, UK
                        </p>
                    </div>

                    <div class="col-md-2 text-center">
                        <h3>STAY IN TOUCH</h3>
                        <a href='http://eepurl.com/hVLcTb' class="btn btn-outline-dark  u-text-mid">Sign Up to Our Mailing List</a>

                    </div>

                    <style>.linkage a {text-decoration: none; color: #282828;}</style>
                    <div class="col-md-3 linkage text-center">
                        <h3>FOLLOW US</h3>
                        <h3><a href="https://www.instagram.com/wearecohere_org/" target="_blank"><i class="bi bi-instagram me-3"></a></i><a href="https://twitter.com/WeAreCohere_Org" target="_blank"><i class="bi bi-twitter me-3"></i></a>
                        <a href="https://www.linkedin.com/company/79070903" target="_blank"><i class="bi bi-linkedin me-3"></i></a><a href="https://www.facebook.com/CohereOrg" target="_blank"><i class="bi bi-facebook me-3"></i></a></h3>

                    </div>
                    <div class="u-footer">
                    <p>Cohere, Registered in. England and Wales, Registered Address: Dean Farm, Oaksey, Malmesbury, Wilts, SN16 9SB. UK Charity No: 1153638 /
                    Uganda NGO cert. S5914/10385 / Kenya NGO cert. OP.218/051/12-0511/8654.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
    `;
  }
}

customElements.define("footer-component", Footer);
