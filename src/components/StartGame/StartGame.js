import React from 'react';
import { Link } from 'react-router-dom';
import "./StartGame.css"

function StartGame({suffle}){

    return(
        <div className="container">
            <div className="row justify-content-around">
                <div id="game" className="quiz">
                    <header className="justify-content-center align-items-center">
                        <h1>Kviz znanja</h1>
                    </header>
                    <div className="options text-center">
                        <Link onClick={()=>{suffle()}} to="/choosePlayer" className="btn btn-primary playerBtn">Kliknite</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartGame;