import React, {useEffect, useState} from 'react';
import { withRouter } from "react-router-dom";
import PlayerQuiz from "../PlayerQuiz/PlayerQuiz";
import { Link } from 'react-router-dom';
import "./Quiz.css";

/////props je stavljen da bi se kada se refresuje stranica tada se map (drugi) skroz izgubi i ne moze da se vrati
///// da u kucice ostavi pitanja vec vraca pocetne iz app.js pa je bag resen tako da ode na stranu gde se bira ponovo oblasti
/////naravno sve je to uradjeno sa withRouter i useEffect=> props.history.push
function Quiz(props, {Questions, Responds, Answers, playerCard}){

    //kopiramo zato sto kada se refresuje stranica tada nastaje bag sa map (prvim) pa da bismo to resili morali smo ovo da uradimo
    const [copyPlayerCard, setCopyPlayerCard] = useState([{player: `ivo`, capitalPlayer: `Ivo`, casePlayer: `Iva`, text: `Ako mene izaberete necete se pokajati. Gledajte me u oci dok pricam.`, colorBtn: `primary`}])

    useEffect(()=>{
        //proverava da li se upotrebljava mobilni
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            setDisplayMobilOne(false);
        }
        setCopyPlayerCard(props.playerCard);
        if (props.Questions ===  "Proba") {
            props.history.push("/choosePlayer");
        }
    },[])

    const [roundNumber, setRoundNumber] = useState(3)
    const [questionNumber, setQuestionNumber] = useState (1);
    const[score, setscore] = useState(0);
    const[editButton, setEditButton] = useState(false)
    const[disappearOption, setDisappearOption] = useState("");
    const [displayTextCorrect, setDisplayTextCorrect] = useState(false);
    const [displayTextWrong, setDisplayTextWrong] = useState(false);
    const [displayTextEnd, setDisplayTextEnd] = useState(false);
    const [displayTextWinner, setDisplayTextWinner] = useState(false);
    const[disappearQuestion, setDisappearQuestion] = useState("");
    const[displayMobileOne, setDisplayMobilOne] = useState (true);
    const[displayMobileTwo, setDisplayMobilTwo] = useState (false);


    //kada se klikne na neki od odgovora tada editButton postaje true, zbog aktivnog button dugmeta
    //props.new... pokrece funkciju u App.js i bitno je staviti u return tu funkciju da bi radilo
    //funkcija se pokrece kada sa klikne na odgovor na pitanje
    const witchRespond = (Answers) =>{ 
        setEditButton(true);
        detectMobile();
        if (props.Responds === Answers) {
             setDisappearOption(" displayNone");
             setDisplayTextCorrect(!displayTextCorrect);
             setscore(score + 5);
        }
        else{
            setDisappearOption(" displayNone");
            setDisplayTextWrong(!displayTextWrong);
        }
    }

    //kada se klikne na neki od odgovora tada editButton postaje false, zbog aktivnog button dugmeta
    //isto se povecava broj pitanja za jedan
    //funkcija se pokrece kada se klikne na sledece pitanje 
    const nextQuestion = () =>{
        setDisplayMobilTwo(false);
        if (roundNumber === questionNumber) {
            setDisplayTextWrong(false);
            setDisplayTextCorrect(false);
            setDisplayTextEnd(!displayTextEnd);
            setDisplayTextWinner(!displayTextWinner);
            setDisappearQuestion(" displayNone");
            setEditButton(false); 
        }
        else{
            props.newQuestions(questionNumber);
            setEditButton(false);
            setQuestionNumber(questionNumber+1);
            setDisappearOption(" ");
            setDisplayTextWrong(false);
            setDisplayTextCorrect(false);
        }
    }
    //funkcija da bi se u pravom rodu stavilo osvojiti
    const endGame = () =>{
        let caseText = ` `;
        if (props.playerCard[0].capitalPlayer===`Horhe`||props.playerCard[0].capitalPlayer===`Ivo`||props.playerCard[0].capitalPlayer===`Lav`) {
            caseText = `osvojio`;
        }
        else {
            caseText = `osvojila`;
        }
        return caseText
    }

    const detectMobile = () =>{
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            setDisplayMobilTwo(true);
        }
    }

    const playerTable = copyPlayerCard.map((playerQuiz, index)=>{
        return (
            <PlayerQuiz playerQuiz={playerQuiz} 
                        key={index} 
                        questionNumber={questionNumber} 
                        score = {score} 
                        nextQuestion = {nextQuestion}
                        editButton={editButton}/>
        )
    })

    return(
        <div className="container">
            <div className="row justify-content-around">

            {/* da bi ovo radilo mora da se playerTable stavi u array zagradama */}
            {displayMobileOne && [playerTable]}

                <div id="game" className="quiz col-8">
                    <header className="justify-content-center align-items-center">
                        <h1 className ={"questions "+ disappearQuestion}>{props.Questions}</h1>

                        {displayTextWinner && <h1 className ="questions">{props.playerCard[0].capitalPlayer} je {endGame()} ukupno {score} poena
                        <br></br>***** CESTITAMO *****</h1>} 
                                                                    
                    </header>

                    <div className="options text-center">
                        
                        {displayTextCorrect && <div className="d-flex flex-column justify-content-center align-items-center h-100">
                                <h1 className="textCorrect mb-5">Tacan odgovor!</h1>
                            </div>}
                        
                        {displayTextWrong && <div className="d-flex flex-column justify-content-center align-items-center h-100">
                            <h1 className="mb-4 textWrong">Pogresan odgovor!</h1>
                            <h4 className="mb-5">Tacan odgovor je: {props.Responds}</h4>
                        </div>}

                        {displayMobileTwo &&  [playerTable]}

                        {props.Answers.map((Answers, index)=> 
                                <div key = {index} className={"option" +disappearOption}>
                                    <div onClick={()=>{witchRespond(Answers)}} className="button optionP d-flex justify-content-center align-items-center">{Answers}</div>
                                </div>   
                        )}

                        {displayTextEnd && <Link to="/" className="btn btn-primary playerBtn playerBtnQuiz">Pokrenite novu igru</Link>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Quiz);