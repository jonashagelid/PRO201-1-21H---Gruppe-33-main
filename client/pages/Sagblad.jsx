import tree from '../utils/images/trees.svg';
import sagbladEn from '../utils/images/sagblad1.png';
import '../components/styles/sagblad.css';
import {Link} from "react-router-dom";
import arrow from "../utils/images/arrow-back-circle-outline.svg";
import data from "./data";
import saw from "../../client/utils/images/saw-removebg-preview.png";


export default function Sagblad() {
    const achievementOnClick = (achievement) => {
        const isFound = data.achievementItems.some(element => {
            if (element.id === '3') {
                return true;
                console.log("element.id")
            }

            return false;
        });

        if(isFound===false){
            data.achievementItems.push({
                id:'3',
                name: 'Sagblad',
                image: saw
            })
            console.log(data.achievementItems)
        }
    };

    return (
        <div className={"sagblad-container"}>
            <Link to={"/map"}>
                <img width={50} height={50} src={arrow} alt=""/>
            </Link>
            <div className={"sagblad-header-div"}>
                <h1 className={"sagblad-header"}>Sagblad</h1>
            </div>

            <div className={"sagblad-grid"}>

                <div className={"sagblad-image-div"}>
                    <img src={sagbladEn} className="sagblad-image" alt="bilde av sagblad"/>
                </div>

            <div className={"sagblad-textbox1"}>
                På gården By og i en hage ligger det kvernsteiner. Kvernsteinen/møllehjulene fra Byåa har vært brukt i forbindelse med vanndrevne Kvernhus, dette sees på størrelsen.
            </div>
                <div className={"sagblad-textbox2"}>
                Kvernsteinene er forskjellige, både i størrelse og hva slags steinart de er lagd i. Kvernsteiner kan være i gneis, glimmergneis, glimmerskifer og noe granitt. Det var bare harde steinsorter som egnet seg for i størst mulig grad unngå at det kom steinstøv i melet.
            </div>



                <div>
                <img src={tree} className="cornerTree" alt="bilde av trær"/>
            </div>
            </div>
            <Link style={{ textDecoration: "none" }} to={"/info/medaljer"}>
                <button className={"achievement-btn"} onClick={achievementOnClick}>Premie</button>
            </Link>
        </div>
    );
}