import MenuItem from "../MenuItem/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.scss";

function Navbar() {
    const menuItems = [
        {
            title: "Home",
            url: "/",
            cName: "Navbar__link",
        },
        {
            title: "Services",
            url: "/",
            cName: "Navbar__link",
        },
        {
            title: "Products",
            url: "/",
            cName: "Navbar__link",
        },
        {
            title: "Contact Us",
            url: "/",
            cName: "Navbar__link",
        },
        {
            title: "Signup",
            url: "/",
            cName: "Navbar__link Navbar__link--mobile",
        },
    ];

    return (
        <nav className="Navbar">
            <h1 className="Navbar__logo">React</h1>
            <div className="Navbar__icon">
                <FontAwesomeIcon icon={faReact} />
            </div>
            <ul>
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        cName={item.cName}
                        title={item.title}
                        url={item.url}
                    />
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
