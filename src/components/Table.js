import userData from "./UserData"
import React from "react"

function Table() {
    React.useEffect(() => {
        console.log(userData)
        console.log(userData.length)
    }, [])

    return (
        <div className="table">
            <div className="tableTop">
                <div className="tableTopButton">Casino Bets</div>
                <div className="tableTopButton">Sports Bet</div>
                <div className="tableTopButton">Big Winnings</div>
            </div>
            <div className="tableTitle">
                <div className="tableData">Game</div>
                <div className="tableData">User</div>
                <div className="tableData">Time</div>
                <div className="tableData">Bet Amount</div>
                <div className="tableData">Multiplier</div>
                <div className="tableData">Payout</div>
            </div>
            {userData.map(user => {
                return (
                    <div key={user.id} className={`tableRow ${user.id % 2 === 0 ? "" : "tableEven"} ${user.id === 1 ? "topTable": ""} ${user.id === userData.length ? "bottomTable" : ""}`}>
                        <div className="tableData">{user.game}</div>
                        <div className="tableData">{user.user}</div>
                        <div className="tableData">{user.time}</div>
                        <div className="tableData">₱{user.betAmount}</div>
                        <div className="tableData">{user.multiplier}</div>
                        <div className="tableData greenText">₱{user.payout}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Table