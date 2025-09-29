
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="w-container">
            <ul role="list" class="nav-grid-3 w-list-unstyled">
                <li id="w-node-_959f9846-8268-8f85-2783-ffcb6b4f68be-669a8247"><a href="index.html"
                        class="nav-logo-link w-inline-block"><img src="img/fa21_logo.png" width="626.5" id="logo"
                            sizes="(max-width: 479px) 158px, 160px" alt="" class="nav-logo-2" /></a></li>
                <li class="nav-item"><a href="impact.html" class="nav-link-6">Impact</a></li>
                <li class="nav-item"><a href="committee.html" class="nav-link-6">Committees</a></li>
                <li class="nav-item"><a href="gallery.html" class="nav-link-6">Gallery</a></li>
                <li class="nav-item"><a href="https://docs.google.com/forms/d/e/1FAIpQLSf0dxdbN7IdpmqaJOQnCBitmYG9CyxVWj2LlAEtBkdECLmB-w/viewform?usp=header" target="_blank"
                        class="nav-link-6">Contact</a></li>
                <li class="nav-item"><a href="http://www.asuc.org/donate" target="_blank" class="nav-link-6">Donate</a>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
        `;
    }
}
class Banner extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="recruitment-banner">
            <a class="paragraph-4" href="https://3smvlc5hjy8.typeform.com/to/LHxG3Orl"
                target="_self">Sign up to volunteer for BP Day by Oct 15!</a>
        </div>
        `;
        /* LINK & move down ';
        <a class="paragraph-4" href="https://givingday.berkeley.edu/giving-day/90821/donate?dept=102171&fbclid=PAZXh0bgNhZW0CMTEAAaZNApfSPYeTCluhzL9xEFjA27ltdL6IW_VFO8T2LLaC8vjzlLzj6gQFEMM_aem_cK4ilo7C6Bq0U2mMFx70NQ"
            target="_self">Donate here!</a>
        */
    }
}


class Sponsors extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section>
            <div class="footer" >
                <div class="inner-footer">
                    <h2 id="about_header" class="heading-4">Special thanks to our sponsors!</h2>
                    <div class="sponsors" >
                        <h2 id="sponsors-buffer"></h2>
                        <table id="sponsors">
                            <tr>
                                <td><a href="https://ashateahouse.com/" target="_blank">
                                    <img src="img/sponsorlogos/asha.png"></a>
                                </td>
                                <td><a href="https://www.berkeleybowl.com/" target="_blank">
                                    <img src="img/sponsorlogos/berkeleybowl.webp"></a>
                                </td>
                                <td><a href="https://www.target.com/" target="_blank">
                                    <img src="img/sponsorlogos/target.png"></a>
                                </td>
                                <td><a href="https://www.thehiddencafe.life/" target="_blank">
                                    <img src="img/sponsorlogos/hiddencafe.png"></a>
                                </td>
                                <td><a href="https://acmebread.com/" target="_blank">
                                    <img src="img/sponsorlogos/acmelogo.png"></a>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="http://chipotle.com/" target="_blank">
                                    <img src="img/sponsorlogos/chipotle.png"></a>
                                </td>
                                <td><a href="https://snapdragonfood.com/" target="_blank">
                                    <img src="img/sponsorlogos/snapdragon.svg"></a>
                                </td>
                                <td><a href="https://www.semifreddis.com/" target="_blank">
                                    <img src="img/sponsorlogos/semifreddislogo.png"></a>
                                </td>
                                <td><a href="https://gtslivingfoods.com/collections/synergy-raw-kombucha" target="_blank">
                                    <img src="img/sponsorlogos/gtsynergycircular.png"></a>
                                </td>
                                <td><a href="https://pepsi.com" target="_blank"></a>
                                    <img src="img/sponsorlogos/Pepsi.png"></a>
                                </td>
                            </tr>
                        </table>
                        <h2 id="sponsors-buffer-2"></h2>
                        <br>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('nav-bar', Header);
customElements.define('top-banner', Banner);
customElements.define(`sponsor-banner`, Sponsors);

