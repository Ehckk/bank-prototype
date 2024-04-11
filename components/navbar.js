class Navbar extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="navbar">
                <div class="wrapper">
                    <div id="menu-btn">
                        <span class="menu-bar"></span>
                        <span class="menu-bar"></span>
                        <span class="menu-bar"></span>
                    </div>
                    <h1 id="title" class="nav-title"></h1>
                </div>
            </div>
        `
    }
}

customElements.define("navbar-component", Navbar)