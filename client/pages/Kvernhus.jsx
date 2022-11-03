import tree from "../utils/images/trees.svg";
import kvernhus from "../utils/images/kvernhus.png";
import { Link } from "react-router-dom";
import arrow from "../utils/images/arrow-back-circle-outline.svg";
import "../components/styles/kvernhus.css";
import data from "./data";
import sawmill from "../../client/utils/images/sawmill-removebg-preview.png";

export default function Kvernhus() {

    const achievementOnClick = (achievement) => {
        const isFound = data.achievementItems.some(element => {
            if (element.id === '2') {
                return true;
                console.log("element.id")
            }

            return false;
        });

        if(isFound===false){
            data.achievementItems.push( {
                id:'2',
                name: 'Kvernhus',
                image: sawmill
            })
            console.log(data.achievementItems)
        }
    };

    return (
        <div className={"kvernHusContainer"}>
            <Link to={"/map"}>
                <img width={50} height={50} src={arrow} alt="" />
            </Link>

            <div>
                <h1 className={"kvernHusOverskrift"}>Kvernhus</h1>
            </div>

            <div className={"gridKvernHus"}>
                <div className={"kvernHusTekst"}>
                    Vesledammen går Byåa ned i en bratt skårning, men der terrenget flater
                    seg litt mer ut, er det sport at et kvernhus. Dette ligger vest for
                    grusvei/skogsvei i skog. Det var ingen tydelig spor etter de
                    kvernhusene som har ligget langs elva, kun spor etter fundament for
                    to, den ene er usikker. Konstruksjonene som ble funnet på den usikre
                    lokaliteten kan også være fra en sag, men plasseringen på de
                    historiske kartene passer med hvor kvernhusene/møllene er lokalisert.
                </div>
                <div>
                    <img src={kvernhus} className="kvernhusImg" alt="bilde av kvernhus" />
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
