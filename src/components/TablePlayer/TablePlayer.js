import React from 'react';
import Player from "../Player/Player";
import {motion} from "framer-motion";
import "./TablePlayer.css";


function TablePlayer({card, shuffleOption, choosenPlayer}){
    
    const allCard = card.map((card, index)=>{
        return (
            <Player card={card} key={index} shuffleOption={shuffleOption} choosenPlayer={choosenPlayer}/>
        )
    })

    return(
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <div className="container">
                <div className="addPlayer text-center">
                    <h1 className="pb-3">Izaberite igraca </h1>
                    <div className="row justify-content-center">

                        {allCard}

                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default TablePlayer;