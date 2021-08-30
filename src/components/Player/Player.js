import React from 'react';
import { Link } from 'react-router-dom';
import "./Player.css";

//shuffleOption na onClick je samo da se pokrene funkcija u App.js koja mesa kartice u options
// choosePlayer kada se klikne salje na kog igraca je kliknuto
function Player({card, shuffleOption, choosenPlayer}){
     return(
        <div id={card.player} className="card">
            <img src={"../img/"+card.player+".jpg"} className="card-img-top" alt={card.capitalPlayer}></img>
            <h5 className="card-title">{card.capitalPlayer}</h5>
            <p className="card-text">{card.text}</p>
            <Link to="/game" onClick={()=>{shuffleOption(); choosenPlayer(card.player)}} id={card.player+"Btn"} className={"btn btn-"+card.colorBtn}>Izaberite {card.casePlayer}</Link>
        </div>
    )
}

export default Player;