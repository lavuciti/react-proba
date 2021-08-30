import React from 'react';
import { Link } from 'react-router-dom';
import "./GameStart.css";


function GameStart({options, chooseOption}){
    
    return(
        <div className="container">
            <div className="row justify-content-around">
                <div id="game" className="quiz col-8">
                    <header className="justify-content-center align-items-center">
                        <h1>Izaberite oblast</h1>
                    </header>
                    <div className="options text-center">

                        {options.map((options, index)=> 
                            <div key = {index} className="option">
                                <Link to="/quiz" onClick={()=>{chooseOption(options)}} className="button optionP d-flex justify-content-center align-items-center">{options}</Link>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameStart;