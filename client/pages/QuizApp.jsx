import React, { useState } from 'react'
import goldMedal from '../../client/utils/images/GoldMedal.svg';
import silverMedal from '../../client/utils/images/SilverMedal.svg';
import bronzeMedal from '../../client/utils/images/BronzeMedal.svg';
import '../components/styles/QuizCss.css';
import {Link} from "react-router-dom";
import tree from "../../client/utils/images/trees.svg";
import arrow from "../../client/utils/images/arrow-back-circle-outline.svg";
import mill from "../../client/utils/images/mill_2-removebg-preview.png";
import sawmill from "../../client/utils/images/sawmill-removebg-preview.png";
import saw from "../../client/utils/images/saw-removebg-preview.png";
import kvernstein from "../../client/utils/images/kvernstein-removebg-preview.png";
import sawmill2 from "../../client/utils/images/sawmill_2-removebg-preview.png";
import data from "./data";

export default function QuizApp(){
    const questionsArray = [
        {
            questionText: 'Hva kan Kvernstein være laget av?',
            questionOptions: [
                {optionsText: 'Gneis', optionResult: true},
                {optionsText: 'Stål', optionResult: false},
                {optionsText: 'Stein', optionResult: false},
                {optionsText: 'Jern', optionResult: false}
            ],
        },        {
            questionText: 'Hva er ett annet ord for kvernhus?',
            questionOptions: [
                {optionsText: 'Mølle', optionResult: true},
                {optionsText: 'Sag', optionResult: false},
                {optionsText: 'Bakeri', optionResult: false},
                {optionsText: 'Låve', optionResult: false}
            ],
        },        {
            questionText: 'Hvor mange sager har det vært ved Byåa kultursti?',
            questionOptions: [
                {optionsText: '4', optionResult: true},
                {optionsText: '5', optionResult: false},
                {optionsText: '8', optionResult: false},
                {optionsText: '7', optionResult: false}
            ],
        },        {
            questionText: 'Hvor mange sagblader er typisk for en silkesag?',
            questionOptions: [
                {optionsText: '2', optionResult: true},
                {optionsText: '3', optionResult: false},
                {optionsText: '1', optionResult: false},
                {optionsText: '4', optionResult: false}
            ],
        },
        {
            questionText: 'I hvilket år ble det innført priveligerte sager?',
            questionOptions: [
                {optionsText: '1710', optionResult: false},
                {optionsText: '1688', optionResult: true},
                {optionsText: '1661', optionResult: false},
                {optionsText: '1750', optionResult: false}
            ],
        },
        {
            questionText: 'Hva slags energi ble brukt for å drive sagene?',
            questionOptions: [
                {optionsText: 'Vind', optionResult: false},
                {optionsText: 'Sol', optionResult: false},
                {optionsText: 'Vann', optionResult: true},
                {optionsText: 'Kull', optionResult: false}
            ],
        },
        {
            questionText: 'Når startet tømmerdriften ved Byåa?',
            questionOptions: [
                {optionsText: '1400', optionResult: false},
                {optionsText: '1700', optionResult: false},
                {optionsText: '1500', optionResult: false},
                {optionsText: '1600', optionResult: true}
            ],
        },
        {
            questionText: 'Hva gjorde barn for å hjelpe til med sagbruket?',
            questionOptions: [
                {optionsText: 'Frakt', optionResult: true},
                {optionsText: 'Hogst', optionResult: false},
                {optionsText: 'Demning', optionResult: false},
                {optionsText: 'Salg', optionResult: false}
            ],
        },
        {
            questionText: 'Hva slags bonde var Torbjørn Trondsen?',
            questionOptions: [
                {optionsText: 'Grisebonde', optionResult: false},
                {optionsText: 'Kornbonde', optionResult: false},
                {optionsText: 'Potetbonde', optionResult: false},
                {optionsText: 'Odelsbonde', optionResult: true}
            ],
        },
        {
            questionText: 'Når kom silkesagene?',
            questionOptions: [
                {optionsText: '1650', optionResult: true},
                {optionsText: '1750', optionResult: false},
                {optionsText: '1350', optionResult: false},
                {optionsText: '1550', optionResult: false}
            ],
        },
    ]


    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(false)
    const [scoreResult, setScoreResult] = useState(1)
    const [questionCount, setQuestionCount] = useState(0)
    const [resultMessage, setResultMessage] = useState("")
    const [resultImg, setResultImg] = useState()
    const medals = {goldMedal, silverMedal, bronzeMedal}

    const answerOnClick = (optionResult) => {
        if(optionResult===true){
            setScoreResult(scoreResult+1)
            setQuestionCount(questionCount+1)
        }

        const unlockBronzeMedal = (achievement) => {
            const isFound = data.achievementItems.some(element => {
                if (element.id === '6') {
                    return true;
                    console.log("element.id")
                }

                return false;
            });

            if(isFound===false){
                data.achievementItems.push({
                    id:'6',
                    name: 'Bronse medalje',
                    image: bronzeMedal
                })
                console.log(data.achievementItems)
            }
        };
        const unlockSilverMedal = (achievement) => {
            const isFound = data.achievementItems.some(element => {
                if (element.id === '7') {
                    return true;
                    console.log("element.id")
                }

                return false;
            });

            if(isFound===false){
                data.achievementItems.push({
                    id:'7',
                    name: 'Sølv medalje',
                    image: silverMedal
                })
                console.log(data.achievementItems)
            }
        };
        const unlockGoldMedal = (achievement) => {
            const isFound = data.achievementItems.some(element => {
                if (element.id === '8') {
                    return true;
                    console.log("element.id")
                }

                return false;
            });

            if(isFound===false){
                data.achievementItems.push({
                    id:'8',
                    name: 'Gull medalje',
                    image: goldMedal
                })
                console.log(data.achievementItems)
            }
        };


        if (scoreResult<=5){
            setResultMessage("God innsats!")
            setResultImg(medals.bronzeMedal)
            unlockBronzeMedal()
        }else if(scoreResult<=6){
            setResultMessage("Bra jobba!")
            setResultImg(medals.bronzeMedal)
            unlockBronzeMedal()
        }else if(scoreResult<=9){
            setResultMessage("Flink!")
            setResultImg(medals.silverMedal)
            unlockSilverMedal()
        }else{
            setResultMessage("Gratulerer")
            setResultImg(medals.goldMedal)
            unlockGoldMedal()
        }

        const nextQuestion = currentQuestion + 1
        if (nextQuestion <questionsArray.length) {
            setCurrentQuestion(nextQuestion)
        }else{
            setScore(true)
        }
    }


    return(
        <div className="questiongrid">
            <Link to={"/map"}>
                <img width={50} height={50} src={arrow} alt="" />
            </Link>
            {}
            {score ? (
                <div className={"result-grid"}>
                    <div className={"scoreresult-div"}>Du fikk {questionCount} av {questionsArray.length} rette</div>
                    <div className="confetti">
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>

                    </div>
                    <img src={resultImg} className="resultimg-quiz" alt="resultimg-quiz"/>
                    <div className={"congratulations-div"}>{resultMessage}</div>



                </div>
            ) : (
                <div className={"quiz-grid"}>
                    <div>
                        <div className={"sporsmal-tekst"}>
                            <span>Spørsmål <br/>{currentQuestion+1}</span>/{questionsArray.length}
                        </div>
                        <div className={"question-div"}>{questionsArray[currentQuestion].questionText}</div>
                        <div className={"alternatives-container"}>
                            <div className={"alternatives-div"}>
                                {questionsArray[currentQuestion].questionOptions.map((questionOption)=><button className={"alternatives-btn"} onClick={() => answerOnClick(questionOption.optionResult)}>{questionOption.optionsText}</button>)}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <img src={tree} className="cornerTree" alt="bilde av trær"/>
        </div>
    )
}