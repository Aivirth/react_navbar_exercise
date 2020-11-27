import MenuItem from "../MenuItem/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import { useState, useEffect } from "react";
import Button from "../Button/Button";

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

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const offCanvasDrawerHandler = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const btnIcon = isDrawerOpen ? faTimes : faBars;
    const menuItemsMobileCName = isDrawerOpen
        ? "Navbar__listItems--active"
        : "";

    return (
        <nav className="Navbar">
            <h1 className="Navbar__logo">
                React <FontAwesomeIcon icon={faReact} />
            </h1>
            <div className="Navbar__icon" onClick={offCanvasDrawerHandler}>
                <FontAwesomeIcon icon={btnIcon} />
            </div>
            <ul className={`Navbar__listItems ${menuItemsMobileCName}`}>
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        cName={item.cName}
                        title={item.title}
                        url={item.url}
                    />
                ))}
            </ul>
            <Button
                type="submit"
                cName="btn--desktopOnly"
                btnStyle="btn--primary"
                btnSize="btn--medium"
            >
                Sign up
            </Button>
        </nav>
    );
}

export default Navbar;
