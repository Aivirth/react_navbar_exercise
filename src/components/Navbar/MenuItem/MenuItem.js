import React from "react";

function MenuItem({ cName, title, url }) {
    return (
        <li>
            <a className={cName} href={url}>
                {title}
            </a>
        </li>
    );
}

export default MenuItem;
