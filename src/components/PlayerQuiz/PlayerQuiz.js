import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import "./PlayerQuiz.css";



function PlayerQuiz({playerQuiz, questionNumber, score, nextQuestion, editButton, displayMobileThree, displayMobileFour}){
     //aktivno dugme koje ako editButton posalje true tada je prvi button a ako posalje false tada je drugi button
    const actionButtons = editButton ? (
        <>
             <button onClick={()=>{nextQuestion()}} id="playerBtn" className="btn btn-primary">Sledece pitanje</button>
        </>
    ) : 
        <>
            <button id="playerBtn" className="btn btn-primary">Sledece pitanje</button>
        </>


     return(
        <motion.div 
        className="player text-center col-4" 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{ opacity: 0 }}
        >
            {displayMobileThree && <h2>{playerQuiz.capitalPlayer}</h2>}
            <img src={"https://lavuciti.github.io/react-proba/img/"+playerQuiz.player+".jpg"} className="card-img-top" alt={playerQuiz.capitalPlayer}></img> 
            <div className="card-body">
                <div className="responsivePlayerQuizDisplayNone">
                    {displayMobileFour && <h2>{playerQuiz.capitalPlayer}</h2>}
                    <p id="scorePlayer"className="lead">Ukupno poena : {score}</p>
                </div>
                <div className="responsivePlayerQuiz">
                    <p id="scorePlayer"className="lead">{playerQuiz.capitalPlayer} poena : {score}</p>
                </div>
                <div className="responsivePlayerQuizFlex">
                    <p id = "countRounds" className = "pt-1">Pitanje {questionNumber}</p>
                    {actionButtons}
                </div>
            </div>
        </motion.div>



    )
}

export default PlayerQuiz;