export const Header = () => {
    return (
        <header className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <a className="navbar-brand" href="public/index.html">
                        <img src="public/images/logo.png" alt="image" />
                    </a>
                    <div className="navbar-collapse" id="">
                        <ul className="navbar-nav justify-content-between ">
                            <div className="User_option">
                                <li className="">
                                    <a className="mr-4" href="">
                                        Login
                                    </a>
                                    <a className="" href="">
                                        Sign up
                                    </a>
                                </li>
                            </div>
                        </ul>

                        <div className="custom_menu-btn">
                            <button onclick="openNav()">
                                <span className="s-1">

                                </span>
                                <span className="s-2">

                                </span>
                                <span className="s-3">

                                </span>
                            </button>
                        </div>
                        <div id="myNav" className="overlay">
                            <div className="overlay-content">
                                <a href="index.html">HOME</a>
                                <a href="about.html">ABOUT</a>
                                <a href="house.html">HOUSE</a>
                                <a href="price.html">PRICING</a>
                                <a href="contact.html">CONTACT US</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};