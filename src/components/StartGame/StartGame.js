import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import "./StartGame.css"


function StartGame({suffle, responsiveHeight}){

    return(

        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <div className="container">
                <div className="row justify-content-around">
                    <div id="game" className="quiz">
                        <header className="justify-content-center align-items-center">
                            <h1>Kviz znanja</h1>
                        </header>
                        <div style= {responsiveHeight} className="options text-center">
                            <Link onClick={()=>{suffle()}} to="/choosePlayer" className="btn btn-primary playerBtn">Dobrodosli!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default StartGame;