import backgroundImage from "../images/background image.png"
import HeroCards from "./HeroCards"
import sportsIcon from "../images/sports icon.png"
import sportsBanner from "../images/sports banner.png"
import casinoIcon from "../images/casion icon.png"
import casinoBanner from "../images/casino banner.png"

function Hero() {
    return(
        <div className="hero">
            <img className="heroBG" src={backgroundImage}></img>
            <div className="heroButtonContainer">
                <div className="heroButton">Promotion</div>
                <div className="heroButton">Affiliate</div>
                <div className="heroButton">Vip Club</div>
                <div className="heroButton">Lucky Free Spin</div>
                <div className="heroButton">Live Support</div>
                <div className="heroButton">Log in Bonus</div>
                <div className="heroButton">Invite Friends</div>
            </div>
            <div className="heroCardsContainer">
                <HeroCards 
                    title = "Sports"
                    icon = {sportsIcon}
                    banner = {sportsBanner}
                    description = "Explore our sports betting platform to wager on a diverse array of teams, players, and leagues worldwide. Enjoy a wide range of betting options across various sports like MMA, Basketball, Soccer, and more, ensuring an exceptional and immersive betting experience."
                />
                <HeroCards 
                    title = "Casino"
                    icon = {casinoIcon}
                    banner = {casinoBanner}
                    description = "Explore our extensive collection of casino games at Gbet, providing an enjoyable and equitable online gambling adventure. Engage in Slots, Live Casino, Blackjack, Baccarat, Roulette, and an array of classic casino games directly from your browser, featuring your preferred selections."
                />
            </div>
        </div>
    )
}

export default Hero