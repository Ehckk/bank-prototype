class Sidebar extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="sidebar">
                <div class="sidebar-header">
                    <button id="close-btn">✖</button>
                    <h1>My Bank</h1>
                </div>
                <ul class="sidebar-links">
                    <li class="sidebar-item">
                        <a href="home.html" class="sidebar-link">View Accounts</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="transfer.html" class="sidebar-link">Make Transfer</a>
                    </li>
                    <li class="sidebar-item">
                        <p class="sidebar-info">Contact Us: 203-555-888</p>
                    </li>
                </ul>
                <div class="sidebar-content">
                    <p id="name"></p>
                    <div class="buttons">
                        <button id="logout" class="btn-large">
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define("sidebar-component", Sidebar)