import tree from "../utils/images/trees.svg";
import sagbruk from "../utils/images/sagbruk.png";
import { Link } from "react-router-dom";
import arrow from "../utils/images/arrow-back-circle-outline.svg";
import "../components/styles/sager.css";
import data from "./data";
import sawmill2 from "../../client/utils/images/sawmill_2-removebg-preview.png";

export default function Sager() {
  const achievementOnClick = (achievement) => {
    const isFound = data.achievementItems.some(element => {
      if (element.id === '5') {
        return true;
        console.log("element.id")
      }

      return false;
    });

    if(isFound===false){
      data.achievementItems.push({

        id:'5',
        name: 'Sager',
        image: sawmill2
      })
      console.log(data.achievementItems)
    }
  };

  return (
    <div className={"sager-container"}>
      <Link to={"/map"}>
        <img width={50} height={50} src={arrow} alt="" />
      </Link>
      <div className={"sager-header-div"}>
        <h1 className={"sager-header"}>Sager</h1>
      </div>
      <div className={"sager-grid"}>
        <div className={"sager-image-div"}>
          <img src={sagbruk} className={"sager-image"} alt="bilde av sag" />
        </div>
        <div className={"sager-textbox1"}>
          Sagskatten i 1610 oppgir to sager på Bys grunn. I 1616 fikk Torbjørn
          Trondsen på By lov å fortsette sin sag, han var odelsbonde med egen
          skog. Den andre sagen på Bys grunn ble brukte av en borger i
          Kristiania.
        </div>
        <div className={"sager-textbox2"}>
          Byborgere så nye muligheter til inntektskilder og under statens
          reguleringer måtte bøndeneetter hvert gi opp og utover 1600-tallet ble
          sagbruksdriften overtatt av handelsmenn iKristiania.I 1661nevnes to
          sager og en kvern på Bys grunn og en sag på Narvestads grunn. I 1688
          ble det tillatt å drive 4 privilegerte sager. Privilegiene ble innført
          av den dansknorskeenevoldsregjeringen for å beskytte skogene mot
          uthugst og for å skape en inntektskildefor staten.
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
