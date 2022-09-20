function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>Samples</h1>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

function MainContent() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://www.cricbuzz.com/a/img/v1/420x235/i1/c243043/something-old-something-new-a.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://www.cricbuzz.com/a/img/v1/420x235/i1/c243034/sa20-auction-tristan-stubbs-b.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://www.cricbuzz.com/a/img/v1/420x235/i1/c243018/when-south-africas-dark-perio.jpg" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

ReactDOM.render(<div><Navbar /><MainContent /></div>, document.getElementById("root"))