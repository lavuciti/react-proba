import React from 'react';
import Player from "../Player/Player";
import "./TablePlayer.css";


function TablePlayer({card, shuffleOption, choosenPlayer}){
    
    const allCard = card.map((card, index)=>{
        return (
            <Player card={card} key={index} shuffleOption={shuffleOption} choosenPlayer={choosenPlayer}/>
        )
    })

    return(
        <div className="container">
            <div className="addPlayer text-center">
                <h1 className="pb-3">Izaberite igraca </h1>
                <div className="row justify-content-center">

                    {allCard}

                </div>
            </div>
        </div>
    )
}

export default TablePlayer;