import burgerIcon from "../images/burger icon.png"
import gbetLogo from "../images/gbet logo.png"

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img src={burgerIcon}></img>
                <img src={gbetLogo}></img>
            </div>
            <div className="header-right">
                <div className="signInButton">Sign In</div>
                <div className="registerButton">Register</div>
            </div>
        </div>
    )
}

export default Header