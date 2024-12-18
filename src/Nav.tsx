function Nav() {
    return (<nav class="navbar navbar-expand-lg fixed-top bg-body clean-navbar">
        <div class="container"><a class="navbar-brand logo" href="#">Glyph.SH</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link active" href="/index.html">Home</a></li>
                </ul>
            </div>
        </div>
        </nav>);
}

export default Nav;