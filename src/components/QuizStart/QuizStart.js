import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import "./QuizStart.css";


function QuizStart({options, chooseOption, responsiveHeight}){
    
    return(
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <div className="container">
                <div className="row justify-content-around">
                    <div id="game" className="quiz col-8">
                        <div className="d-flex flex-column">
                            <header className="justify-content-center align-items-center">
                                <h1>Izaberite oblast</h1>
                            </header>
                            <div style = {responsiveHeight} className="options text-center">

                                {options.map((options, index)=> 
                                    <div key = {index} className="option">
                                        <Link to="/quiz" onClick={()=>{chooseOption(options)}} className="button optionP d-flex justify-content-center align-items-center">{options}</Link>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default QuizStart;