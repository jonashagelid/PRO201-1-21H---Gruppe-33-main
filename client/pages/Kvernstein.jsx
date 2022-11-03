import tree from "../utils/images/trees.svg";
import kvernsteinEn from "../utils/images/kvernstein1.png";
import kvernsteinTo from "../utils/images/Gneis-ny.jpg";
import { Link } from "react-router-dom";
import "../components/styles/style.css";
import arrow from "../utils/images/arrow-back-circle-outline.svg";
import data from "./data";
import kvernstein from "../../client/utils/images/kvernstein-removebg-preview.png";

export default function Kvernstein() {
    const achievementOnClick = (achievement) => {
        const isFound = data.achievementItems.some(element => {
            if (element.id === '4') {
                return true;
                console.log("element.id")
            }

            return false;
        });

        if(isFound===false){
            data.achievementItems.push({
                id:'4',
                name: 'Kvernstein',
                image: kvernstein
            })
            console.log(data.achievementItems)
        }
    };

    return (
        <div className={"kvernsteinContainer"}>
            <Link to={"/map"}>
                <img width={50} height={50} src={arrow} alt="" />
            </Link>
            <div className={"kvernsteinoverskrift-div"}>
                <h1 className={"kvernsteinOverskrift"}>Kvernstein</h1>
            </div>

            <div className={"gridKvern"}>
                <div className={"skriftBoks1"}>
                    På gården By og i en hage ligger det kvernsteiner.
                    Kvernsteinen/møllehjulene fra Byåa har vært brukt i forbindelse med
                    vanndrevne Kvernhus, dette sees på størrelsen.
                </div>

                <div>
                    <img src={kvernsteinEn} className={"kvernStein1"} alt="bilde av kvernstein" />
                </div>

                <div className={"skriftBoks2"}>
                    Kvernsteinene er forskjellige, både i størrelse og hva slags steinart
                    de er lagd i. Kvernsteiner kan være i gneis, glimmergneis,
                    glimmerskifer og noe granitt. Det var bare harde steinsorter som egnet
                    seg for i størst mulig grad unngå at det kom steinstøv i melet.
                </div>

                <div>
                    <img src={kvernsteinTo} className={"kvernStein2"} alt="bilde av gneis" />
                </div>
            </div>

            <div>
                <img src={tree} className="cornerTree" alt="bilde av trær" />
            </div>
            <Link style={{ textDecoration: "none" }} to={"/info/medaljer"}>
                <button className={"achievement-btn"} onClick={achievementOnClick}>Premie</button>
            </Link>
        </div>
    );
}
