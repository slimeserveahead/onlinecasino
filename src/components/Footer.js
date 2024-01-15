import gbetLogo from "../images/gbet logo.png"
import gcashLogo from "../images/gcash logo.png"
import seven11Logo from "../images/711 logo.png"
import bpiLogo from "../images/bpi logo.png"
import paymayaLogo from "../images/paymaya logo.png"
import bdoLogo from "../images/bdo logo.png"
import chinabankLogo from "../images/chinabank.png"

function Footer() {
    return (
        <div className="footer">
            <div className="footerTop">
                <img src={gbetLogo}></img>
                <div>The website is operated and managed by GBET. Gaming services on this website are provided by GBET, licensed and regulated by the Philippine Amusement and Gaming Corporation (PAGCOR).</div>
                <div>Remember, at GBET, your gaming enjoyment and safety are our top priorities. Keep it fun, and game responsibly. </div>
            </div>
            <div className="footerBottom">
                <img src={gcashLogo}></img>
                <img src={seven11Logo}></img>
                <img src={bpiLogo}></img>
                <img src={paymayaLogo}></img>
                <img src={bdoLogo}></img>
                <img src={chinabankLogo}></img>
            </div>
        </div>
    )
}

export default Footer