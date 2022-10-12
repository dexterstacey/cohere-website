class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section id="footer">
        <div class="footer">
            <h3>CONTACT US</h3>
            <p>info@wearecohere.org</p>
            <div class="footer__row">
                <div class="footer__row--item">
                    <h3>Kenya Office</h3>
                    <p>Wamagata Court</p> 
                    <p>Woodley, Nairobi</p> 
                    <p>P.O Box 61716-00200</p>
                </div>
                <div class="footer__row--item">
                    <h3>Uganda Office</h3>
                    <p>Hanlon Road</p> 
                    <p>Woodley, Nairobi</p> 
                    <p>Nsambya, Kampala</p>
                </div>
                <div class="footer__row--item">
                    <h3>UK Office</h3>
                    <p>Dean Farm, Oaksey,</p> 
                    <p>Malmesbury, Wilts,</p> 
                    <p>SN16 9SB, UK</p>
                </div>
                <div class="footer__row--contact">
                    <h3>STAY IN TOUCH</h3>
                    <a href='http://eepurl.com/hVLcTb' class="btn btn-outline-dark  u-text-mid">Sign Up to Our Mailing List</a>
                </div>
                <div class="footer__row--contact">
                    <h3>FOLLOW US</h3>
                    <div>
                        <a class="u-black" href="https://www.instagram.com/wearecohere_org/" target="_blank"><i class="bi bi-instagram me-3"></i></a>
                        <a class="u-black" href="https://twitter.com/WeAreCohere_Org" target="_blank"><i class="bi bi-twitter me-3"></i></a>
                        <a class="u-black" href="https://www.linkedin.com/company/79070903" target="_blank"><i class="bi bi-linkedin me-3"></i></a>
                        <a class="u-black" href="https://www.facebook.com/CohereOrg" target="_blank"><i class="bi bi-facebook me-3"></i></a>
                    </div>
                </div>
            </div>
            <div class="u-footer">
            <p>Cohere, Registered in. England and Wales, Registered Address: Dean Farm, Oaksey, Malmesbury, Wilts, SN16 9SB. UK Charity No: 1153638 /
            Uganda NGO cert. S5914/10385 / Kenya NGO cert. OP.218/051/12-0511/8654.</p>
        </div>
        </div>
    </section>
    `;
  }
}

customElements.define("footer-component", Footer);
