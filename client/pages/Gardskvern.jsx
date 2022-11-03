import tree from "../utils/images/trees.svg";
import gardskvern from "../utils/images/gårdskvern.png";
import arrow from "../utils/images/arrow-back-circle-outline.svg";
import "../components/styles/gårdskvern.css";
import { Link } from "react-router-dom";
import Achievements from "./Achievements"
import mill from "../../client/utils/images/mill_2-removebg-preview.png";
import data from "./data";

export default function Gardskvern(handleAddAchievement, achievementItems) {



  const achievementOnClick = (achievement) => {
    const isFound = data.achievementItems.some(element => {
      if (element.id === '1') {
        return true;
        console.log("element.id")
      }

      return false;
    });

    if(isFound===false){
      data.achievementItems.push({id:'1',
        name: 'Gårdskvern',
        image: mill})
      console.log(data.achievementItems)
    }
  };


  return (
      <div className={"gardskvern-container"}>
        <Link to={"/map"}>
          <img width={50} height={50} src={arrow} alt="" />
        </Link>
        <div className={"gardskvern-header-div"}>
          <h1 className={"gardskvern-header"}>Gårdskvern</h1>
        </div>

        <div className={"gardskvern-grid"}>
          <div className={"gardskvern-textbox1"}>
            De fleste gårder hadde sine egne vassdrevne kverner hvor man malte
            korn til eget bruk. De mindre håndkverner går lenger tilbake, men
            rundt år 1000 e. Kr begynte vi Norge også å bruke større, vanndrevne
            kverner. I prinsipp så kvernsteinene stort sett like ut i en veldig
            lang tidsperiode.
          </div>
          <div>
            <img src={gardskvern} className="gardskvern-image" alt="bilde av gårdskvern" />
          </div>
          <div className={"gardskvern-textbox2"}>
            Gårdskverner var gjerne enkle små trebygninger som sto på en enkel
            sokkel av stein. Selve kverna består av to kvernsteiner montert i en
            benk. Kornet ble malt mellom disse steinene. Kvernsteinene er montert
            direkte på en loddrett aksel rett på kvernkallen (den loddrette
            stokken).
          </div>


          <div>
            <img src={tree} className="cornerTree" alt="bilde av trær" />
          </div>
        </div>
        <Link style={{ textDecoration: "none" }} to={"/info/medaljer"}>
          <button className={"achievement-btn"} onClick={achievementOnClick}>Premie</button>
        </Link>
      </div>
  );
}
