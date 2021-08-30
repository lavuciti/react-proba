import React, { useState } from "react";
import StartGame from "./components/StartGame/StartGame";
import {Route, BrowserRouter} from "react-router-dom";
import TablePlayer from "./components/TablePlayer/TablePlayer";
import GameStart from "./components/GameStart/GameStart";
import Quiz from "./components/Quiz/Quiz";

function App(){

    const card = [                            
        {player: `ivo`, capitalPlayer: `Ivo`, casePlayer: `Iva`, text: `Ako mene izaberete necete se pokajati. Gledajte me u oci dok pricam.`, colorBtn: `primary`},
        {player: `horhe`, capitalPlayer: `Horhe`, casePlayer: `Horhea`, text: `Posle 30 godina igranja nisam najpametniji ali sam najbolji.`, colorBtn: `warning`},
        {player: `kristina`, capitalPlayer: `Kristina`, casePlayer: `Kristinu`, text: `Volim da igram kvizove znanja a najvise volim da pobedjujem.`, colorBtn: `success`},
        {player: `lav`, capitalPlayer: `Lav`, casePlayer: `Lava`, text: `Veni, vidi vici ili pametan pametniji najpametniji.`, colorBtn: `secondary`},
        {player: `vladanka`, capitalPlayer: `Vladanka`, casePlayer: `Vladanku`, text: `Mogu da oberem malinjak za 2 sata a i za 2 dana, jer sam u takvoj mogucnosti.`, colorBtn: `info`},
        {player: `justina`, capitalPlayer: `Justina`, casePlayer: `Justinu`, text: `Kunem se u Nemacku. Mi Nemci smo najpametniji hahahaha.`, colorBtn: `danger`}
        ];

    
    const [questionsGeography, setQuestionsGeography] = useState([
        "Dunav nastaje u Crnoj šumi, a koja reka izvire u Valdajskoj gori?", 
        'SAD čini 50 saveznih država. Od koliko saveznih država se sastoji Indija?',
        'Najviši vrh kog kontineta je Denali?', 
        'Koji norveški grad se smatra najsevernijim gradom na svetu?', 
        'U kojoj afričkoj državi se nalazi vodopad Tugela, drugi najviši vodopad na svetu posle Anđeoskog vodopada u Venecueli?' 
      ]);
    
    const [answersGeography, setAnswersGeography] = useState([
        ['Volga', 'Don', 'Ural', 'Dnjepar'],
        ['34', '29', '16', '8'],
        ['Severne Amerike', 'Australije', 'Južne Amerike', 'Afrike'],
        ['Harstad', 'Bode', 'Vardo', 'Hamerfest'],
        ['U Mozambiku', 'U Južnoafričkoj Republici', 'U Zambiji', 'U Čadu']
    ]);
         
    const [respondsGeography, setRespondsGeography] = useState([
        'Volga',
        '29', 
        'Severne Amerike',
        'Hamerfest',
        'U Južnoafričkoj Republici'
      ]);

      const [questionsHistory, setQuestionsHistory] = useState([
        "Prvi svetski rat je poceo?", 
        'Kad je bio Kosovski boj?',
        'Za vreme drugog svetskog rata ko je bio premijer Italije?', 
        'Kad je poceo prvi srpski ustanak?', 
        'Kad je poceo drugi srpski ustanak?'
      ]);

      const [answersHistory, setAnswersHistory] = useState([
        ['1814', '1914', '1815', '1915'], 
        ['1388', '1489', '1489', '1389'], 
        ['Musolini', 'Hitler', 'Djovani', 'Cercil'], 
        ['1804', '1805', '1803', '1806'],
        ['1813', '1814', '1815', '1816']
      ]);

      

      const [respondsHistory, setRespondsHistory] = useState([
        '1914', 
        '1389', 
        'Musolini', 
        '1804', 
        '1815'
      ]);
     
      const [questionsMathematics, setQuestionsMathematics] = useState([
        " Četiri čoveka igrala su šah 4 sata. Koliko je sati igrao svaki od učesnika?", 
        'Svaki štap ima dva kraja. Koliko krajeva ima štap i po?', 
        'Svaka od tri sestre ima brata. Koliko u toj porodici ima dece?', 
        'Kada je pešak prešao polovinu puta i još 2 km, ostalo muje da pređe još četvrtinu puta i 6 km. Koliko je dužina puta?', 
        'Jedan radnik može završiti posao za 4 sata, a drugi za 12 sati. Za koje vreme bi obavili taj posao radeći zajedno?'
      ]);

      const [answersMathematics, setAnswersMathematics] = useState([
        ['4 sata', '2 sata', '1 sat', '6 sata'], 
        ['2 kraja', '3 kraja', '4 kraja', '1 kraj'], 
        ['3 dece', '2 dece', '4 dece', '5 dece'], 
        ['16 km', '18 km', '32 km', '34 km'], 
        ['2 sata', '3 sata', '4 sata', 'pola sata']
      ]);

      const [respondsMathematics, setRespondsMathematics] = useState([
        '4 sata', 
        '4 kraja',
        '4 dece', 
        '32 km',
        'za tri sata' 
      ]);

      const [questionsTheGeneralEducations, setQuestionsTheGeneralEducations] = useState([
        "Velika Černobiljska katastrofa u Ukrajini izazvana je:", 
        'Kako se zove aktuelni predsednik Turske?', 
        'Reakcija između jedne baze i jedne kiseline naziva se:',
        'Kipar je podeljen na:', 
        'Koliko ima Jevanđelja u Bibliji:'
      ]);

      const [answersTheGeneralEducations, setAnswersTheGeneralEducations] = useState([
        ['zemljotresom', 'padom aviona', 'kvarom u nuklearnoj elektrani', 'sirenjem otrovnog gasa'], 
        ['Mustafa Kemal Ataturk', 'Melih Mahmutoglu', 'Redžep Tajip Erdogan', 'Redžep Melih Mahmutoglu'], 
        ['oksidacija', 'neutralizacija', 'resorbcija', 'redukcija'], 
        ['Grčki i Izraelski deo.', 'Turski i Kurdski deo', 'Grčki i Turski deo', 'Turski i Ruski deo.'], 
        ['4', '10', '12', '8']
      ]);

      const [respondsTheGeneralEducations, setRespondsTheGeneralEducations] = useState([
        'kvarom u nuklearnoj elektrani', 
        'Redžep Tajip Erdogan',
        'neutralizacija',
        'Grčki i Turski deo',
        `4`
      ]);
      
///////////////////////     StartGame  (suffle all array)       ///////////
      

      const suffle = () =>{
        //Geography 
        let newAnswersGeography = [];
        let newQuestionsGeography = [];
        let newRespondsGeography = [];
        //History 
        let newAnswersHistory = [];
        let newQuestionsHistory = [];
        let newRespondsHistory = [];
        //Mathematics
        let newAnswersMathematics = [];
        let newQuestionsMathematics = [];
        let newRespondsMathematics = [];
        //TheGeneralEducations
        let newAnswersTheGeneralEducations = [];
        let newQuestionsTheGeneralEducations = [];
        let newRespondsTheGeneralEducations = [];
        for (let i = 0; i < answersGeography.length+4; i++) {
          let r = Math.floor(Math.random()*answersGeography.length);
          //Geography        
          newAnswersGeography.push(answersGeography[r]);
          answersGeography.splice(r,1);
          newQuestionsGeography.push(questionsGeography[r]);
          questionsGeography.splice(r,1);
          newRespondsGeography.push(respondsGeography[r]);
          respondsGeography.splice(r,1);
          //History
          newAnswersHistory.push(answersHistory[r]);
          answersHistory.splice(r,1);
          newQuestionsHistory.push(questionsHistory[r]);
          questionsHistory.splice(r,1);
          newRespondsHistory.push(respondsHistory[r]);
          respondsHistory.splice(r,1);
          //Mathematics
          newAnswersMathematics.push(answersMathematics[r]);
          answersMathematics.splice(r,1);
          newQuestionsMathematics.push(questionsMathematics[r]);
          questionsMathematics.splice(r,1);
          newRespondsMathematics.push(respondsMathematics[r]);
          respondsMathematics.splice(r,1);
          // TheGeneralEducations
          newAnswersTheGeneralEducations.push(answersTheGeneralEducations[r]);
          answersTheGeneralEducations.splice(r,1);
          newQuestionsTheGeneralEducations.push(questionsTheGeneralEducations[r]);
          questionsTheGeneralEducations.splice(r,1);
          newRespondsTheGeneralEducations.push(respondsTheGeneralEducations[r]);
          respondsTheGeneralEducations.splice(r,1);
        }
        //Geography 
        setAnswersGeography(newAnswersGeography);
        setQuestionsGeography(newQuestionsGeography);
        setRespondsGeography(newRespondsGeography);
        // History 
        setQuestionsHistory(newQuestionsHistory);
        setAnswersHistory(newAnswersHistory);
        setRespondsHistory(newRespondsHistory);
        //Mathematics 
        setQuestionsMathematics(newQuestionsMathematics);
        setAnswersMathematics(newAnswersMathematics);
        setRespondsMathematics(newRespondsMathematics);
        //TheGeneralEducations
        setQuestionsTheGeneralEducations(newQuestionsTheGeneralEducations);
        setAnswersTheGeneralEducations(newAnswersTheGeneralEducations);
        setRespondsTheGeneralEducations(newRespondsTheGeneralEducations);
      }


////////////////////////////////////    Start Game (Shuffle Options)        //////////////
      const [options, setOptions] = useState(["Istorija", "Matematika", "Geografija", "Opste obrazovanje"]);

      const shuffleOption = ()=>{
          let rand = [];
           for (let i = 0; i < options.length+3; i++) {
             let r = Math.floor(Math.random()*options.length);       
             rand.push(options[r]);
             options.splice(r,1);
           }
           setOptions(rand);
      };


///////////////////////      Quiz (when you choose option to send questions, answer and respond; from GameStart function)      ///////////
    const [Questions, setQuestion] = useState("Proba");
    const [Answers, setAnswers] = useState(["Proba"]);
    const [Responds, setResponds] = useState("Proba");  
    const [option, setOption] = useState(""); 

    const chooseOption = (option) => {
        setOption(option);
        if (option === "Geografija") {
            setQuestion(questionsGeography[0]);
            setResponds(respondsGeography[0]);
            //ovde salje podatke da bi se izmesao finalni odgovori
            copyAnswers = [...answersGeography[0]];
            setAnswers(suffleAnswers(copyAnswers));
        }
        else if (option === "Istorija") {
          setQuestion(questionsHistory[0]);
          setResponds(respondsHistory[0]);
          //ovde salje podatke da bi se izmesao finalni odgovori
          copyAnswers = [...answersHistory[0]];
          setAnswers(suffleAnswers(copyAnswers));
        }
        else if (option === "Matematika") {
          setQuestion(questionsMathematics[0]);
          setResponds(respondsMathematics[0]);
          //ovde salje podatke da bi se izmesao finalni odgovori
          copyAnswers = [...answersMathematics[0]];
          setAnswers(suffleAnswers(copyAnswers));
        }
        else {
          setQuestion(questionsTheGeneralEducations[0]);
          setResponds(respondsTheGeneralEducations[0]);
          //ovde salje podatke da bi se izmesao finalni odgovori
          copyAnswers = [...answersTheGeneralEducations[0]];
          setAnswers(suffleAnswers(copyAnswers));
        }
    };

    
///////////////////////      chooseOption() (suffle final answers)      ///////////

let copyAnswers = [];

const suffleAnswers = () =>{
  let rand = [];
     for (let i = 0; i < copyAnswers.length+3; i++) {
       let r = Math.floor(Math.random()*copyAnswers.length);       
       rand.push(copyAnswers[r]);
       copyAnswers.splice(r,1);
     }
     return rand
}

///////////////////////      Quiz (send data about player, from Player start function)      ///////////


    const [playerCard, setPlayerCard] = useState([]);
    
    const choosenPlayer = (player) =>{
      //kopira svaki card koji sadrzi u sebi player na kojeg smo kliknuli
      const newCopyCard = card.filter(card=>card.player === player);
      setPlayerCard(newCopyCard);
    }

  ///////////////////////      Quiz (sends answers, questions, responds to the quiz.js)      ///////////


    const newQuestions = (questionNumber) =>{
      if (option === "Geografija") {
        setQuestion(questionsGeography[questionNumber]);
        setResponds(respondsGeography[questionNumber]);
        //ovde salje podatke da bi se izmesao finalni odgovori
        copyAnswers = [...answersGeography[questionNumber]];
        setAnswers(suffleAnswers(copyAnswers));
      }
      else if (option === "Istorija") {
        setQuestion(questionsHistory[questionNumber]);
        setResponds(respondsHistory[questionNumber]);
        //ovde salje podatke da bi se izmesao finalni odgovori
        copyAnswers = [...answersHistory[questionNumber]];
        setAnswers(suffleAnswers(copyAnswers));
      }
      else if (option === "Matematika") {
        setQuestion(questionsMathematics[questionNumber]);
        setResponds(respondsMathematics[questionNumber]);
        //ovde salje podatke da bi se izmesao finalni odgovori
        copyAnswers = [...answersMathematics[questionNumber]];
        setAnswers(suffleAnswers(copyAnswers));
      }
      else {
        setQuestion(questionsTheGeneralEducations[questionNumber]);
        setResponds(respondsTheGeneralEducations[questionNumber]);
        //ovde salje podatke da bi se izmesao finalni odgovori
        copyAnswers = [...answersTheGeneralEducations[questionNumber]];
        setAnswers(suffleAnswers(copyAnswers));
      }
    }




  


    return(
        <>
            <BrowserRouter>
                <Route path = "/" exact>
                    <StartGame suffle={suffle}/>
                </Route>
                <Route path = "/choosePlayer">
                    <TablePlayer card={card} shuffleOption={shuffleOption} choosenPlayer={choosenPlayer}/>
                </Route>
                <Route path = "/game">
                    <GameStart options={options} chooseOption={chooseOption}/>
                </Route>
                <Route path = "/quiz" >
                    <Quiz Questions={Questions} 
                          Answers={Answers} 
                          Responds={Responds} 
                          options={options} 
                          playerCard={playerCard}
                          // ovde mora da se napise da bi se povezao u Quiz.js sa props
                          newQuestions={newQuestions}
                          />
                </Route>
            </BrowserRouter>
        </>
    )
}


export default App;