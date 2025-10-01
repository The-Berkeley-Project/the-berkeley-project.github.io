class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="site-nav">
            <div class="container nav-inner">
                <a href="index.html" class="nav-brand">
                    <img src="img/fa21_logo.png" alt="The Berkeley Project logo">
                    <span class="sr-only">The Berkeley Project</span>
                </a>
                <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-menu" aria-label="Toggle navigation">
                    <span class="nav-toggle__bar"></span>
                    <span class="nav-toggle__bar"></span>
                    <span class="nav-toggle__bar"></span>
                </button>
                <div class="nav-links" id="site-menu">
                    <a href="impact.html" class="nav-link">Impact</a>
                    <a href="committee.html" class="nav-link">Committees</a>
                    <a href="gallery.html" class="nav-link">Gallery</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0dxdbN7IdpmqaJOQnCBitmYG9CyxVWj2LlAEtBkdECLmB-w/viewform?usp=header" target="_blank" rel="noopener" class="nav-link">Contact</a>
                    <a href="http://www.asuc.org/donate" target="_blank" rel="noopener" class="nav-link">Donate</a>
                </div>
            </div>
        </nav>
        `;

        const toggle = this.querySelector('.nav-toggle');
        const menu = this.querySelector('.nav-links');

        const setOpenState = (open) => {
            if (!toggle || !menu) return;
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            menu.classList.toggle('is-open', open);
            document.body.classList.toggle('nav-open', open);
        };

        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                const current = toggle.getAttribute('aria-expanded') === 'true';
                setOpenState(!current);
            });

            menu.querySelectorAll('a').forEach((link) => {
                link.addEventListener('click', () => setOpenState(false));
            });

            window.addEventListener('resize', () => {
                if (window.innerWidth >= 960) {
                    setOpenState(false);
                }
            });

            window.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    setOpenState(false);
                }
            });
        }
    }
}

class Banner extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="top-banner">
            <div class="container top-banner__inner">
                <span class="pokeball pokeball--xs pokeball--static" aria-hidden="true"></span>
                <a class="top-banner__link" href="https://docs.google.com/forms/d/e/1FAIpQLSfk7CG6e4sjkSmHZ572JPYSEVJGLHiCSxfZ3NXOO_CbzLS9dA/viewform" target="_self">Sign up to volunteer for BP Day Fall 2025 by Oct 15!</a>
            </div>
        </div>
        `;
    }
}

class Sponsors extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="section sponsor-section">
            <div class="container flow" data-reveal="fade-up">
                <h2 class="section-title">Special thanks to our sponsors!</h2>
                <div class="sponsor-grid" data-reveal="zoom" data-reveal-delay=".1s">
                    <a href="https://ashateahouse.com/" target="_blank" rel="noopener" class="sponsor-card">
                        <img src="img/sponsorlogos/asha.png" alt="Asha Tea House">
                    </a>
                    <a href="https://www.berkeleybowl.com/" target="_blank" rel="noopener" class="sponsor-card">
                        <img src="img/sponsorlogos/berkeleybowl.webp" alt="Berkeley Bowl">
                    </a>
                    <a href="https://www.target.com/" target="_blank" rel="noopener" class="sponsor-card">
                        <img src="img/sponsorlogos/target.png" alt="Target">
                    </a>
                    <a href="https://www.thehiddencafe.life/" target="_blank" rel="noopener" class="sponsor-card">
                        <img src="img/sponsorlogos/hiddencafe.png" alt="The Hidden Cafe">
                    </a>
                    <a href="https://acmebread.com/" target="_blank" rel="noopener" class="sponsor-card">
                        <img src="img/sponsorlogos/acmelogo.png" alt="Acme Bread Company">
                    </a>
                    <a href="http://chipotle.com/" target="_blank" rel="noopener" class="sponsor-card">
                        <img src="img/sponsorlogos/chipotle.png" alt="Chipotle">
                    </a>
                    <a href="https://snapdragonfood.com/" target="_blank" rel="noopener" class="sponsor-card">
                        <img src="img/sponsorlogos/snapdragon.svg" alt="Snapdragon">
                    </a>
                    <a href="https://www.semifreddis.com/" target="_blank" rel="noopener" class="sponsor-card">
                        <img src="img/sponsorlogos/semifreddislogo.png" alt="Semifreddis">
                    </a>
                    <a href="https://gtslivingfoods.com/collections/synergy-raw-kombucha" target="_blank" rel="noopener" class="sponsor-card">
                        <img src="img/sponsorlogos/gtsynergycircular.png" alt="GT's Synergy">
                    </a>
                    <a href="https://pepsi.com" target="_blank" rel="noopener" class="sponsor-card">
                        <img src="img/sponsorlogos/Pepsi.png" alt="Pepsi">
                    </a>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('nav-bar', Header);
customElements.define('top-banner', Banner);
customElements.define('sponsor-banner', Sponsors);
