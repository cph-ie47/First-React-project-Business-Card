import React from "react"
import Profilepic from '.././Images/mathias.jpg';


export default function Info() {
    return (
        <div className="row bg-image">
            <img src={Profilepic} className="header--image col-12" alt="Mathias sindssyg god underviser"/>
            <p className="header--name">Mathias Nielsen</p>
            <p className="header--proff">React underviser</p>
            <p className="header--website">www.mathias.dk</p>
            <button type="submit" className="button"> Email</button>
        </div>       
    )
}
