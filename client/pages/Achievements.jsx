import React, {useEffect, useState} from "react";
import arrow from "../utils/images/arrow-back-circle-outline.svg";
import "../components/styles/achievement.css";
import kvernstein from "../utils/images/kvernstein-removebg-preview.png";
import mill from "../utils/images/mill_2-removebg-preview.png";
import saw from "../utils/images/saw-removebg-preview.png";
import sawmill from "../utils/images/sawmill-removebg-preview.png";
import sawmill2 from "../utils/images/sawmill_2-removebg-preview.png";
import tree from "../utils/images/trees.svg";
import goldMedal from '../utils/images/GoldMedal.svg';
import silverMedal from '../utils/images/SilverMedal.svg';
import bronzeMedal from '../utils/images/BronzeMedal.svg';
import {Link} from "react-router-dom";
import data from "./data";



export default function Achievements() {

    const {achievementItems} = data;




    return(
        <div>
            <Link to={"/map"}>
                <img width={50} height={50} src={arrow} alt="" />
            </Link>

            <div className={"medaljer-header-div"}>
                <h1 className={"medaljer-header"}>Medaljer</h1>
            </div>
            <div className={"achievement-container"}>
                {achievementItems.map((achievement, index)=>(
                    <div key={index}>
                        <h3 className={"achievement-title"}>{achievement.name}</h3>
                        <img className={"achievement-image"} src={achievement.image} alt={achievement.name}/>
                    </div>
                ))}
            </div>
            <div>
                <img src={tree} className="cornerTree" alt="bilde av trær" />
            </div>
        </div>
    )
}