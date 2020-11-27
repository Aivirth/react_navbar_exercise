import "./Button.scss";

function Button({ children, type, onClick, btnStyle, btnSize, cName = "" }) {
    const btnStyles = ["btn--primary", "btn--outline"];
    const btnSizes = ["btn--medium", "btb--large"];

    const checkBtnStyle = btnStyles.includes(btnStyle)
        ? btnStyle
        : btnStyles[0];

    const checkBtnSize = btnSizes.includes(btnSize) ? btnSize : btnSizes[0];

    return (
        <button
            type={type}
            className={`btn ${cName} ${checkBtnStyle} ${checkBtnSize}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
