function HeroCards(props) {
    return (
        <div className="heroCards">
            <div className="heroCardTop">
                <img src={props.icon}></img>
                {props.title}
            </div>
            <img className="heroBanner" src={props.banner}></img>
            <div className="textButtonContainer">
                <div className="heroCardText">{props.description}</div>
                <div className="heroCardButton">Go to {props.title}</div>
            </div>
        </div>
    )
}

export default HeroCards