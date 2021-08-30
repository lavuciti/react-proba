import React from 'react';
import "./PlayerQuiz.css";


function PlayerQuiz({playerQuiz, questionNumber, score, nextQuestion, editButton}){
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

        <div className="player text-center col-4">
            <h2>{playerQuiz.capitalPlayer}</h2>
            <img src={"../img/"+playerQuiz.player+".jpg"} className="card-img-top" alt={playerQuiz.capitalPlayer}></img>
            <div className="card-body">
                <p id="scorePlayer"className="lead">Ukupno poena : {score}</p>
                <p id = "countRounds" className = "pt-1">Pitanje {questionNumber}</p>
                {actionButtons}
            </div>
        </div>



    )
}

export default PlayerQuiz;