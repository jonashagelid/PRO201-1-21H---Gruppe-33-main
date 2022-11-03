import { Link } from "react-router-dom";
import "../components/styles/map.css";
import mapphoto from "../utils/images/Kart-enda-bedre(1)(1).png";
import damm from "../utils/images/carton_dam-removebg-preview 1.png";
import kvernstein from "../utils/images/kvernstein-removebg-preview.png";
import mill from "../utils/images/mill_2-removebg-preview.png";
import saw from "../utils/images/saw-removebg-preview.png";
import sawmill from "../utils/images/sawmill-removebg-preview.png";
import sawmill2 from "../utils/images/sawmill_2-removebg-preview.png";
import tree from "../utils/images/trees.svg";

export function Map() {
  return (
    <div>
      <div className={"map-grid-container"}>
        <div className={"map-item"}>
          <Link to={"/"}>
            <button className={"map-home-btn"}>Hjem</button>
          </Link>
        </div>
        <div className={"map-item"}>
          <Link to={"/QuizApp"}>
            <button className={"map-quiz-btn"}>Quiz</button>
          </Link>
        </div>
        <div className={"map-item"}>
          <Link to={"/info"}>
            <button className={"map-info-btn"}>Info</button>
          </Link>
        </div>
      </div>
      <div className={"map-div"}>
        <img src={mapphoto} alt="bilde av kart" className={"mapphoto"} />
        <Link to={"/info/medaljer"}>
          <img src={damm} alt="damm" className={"damm"} />
        </Link>
        <Link to={"/info/kvernstein"}>
          <img src={kvernstein} alt="klikkbart bilde av kvernstein" className={"kvernstein"} />
        </Link>
        <Link to={"/info/gardskvern"}>
          <img src={mill} alt="klikkbart bilde av gårdskvern" className={"gardskvern"} />
        </Link>
        <Link to={"/info/sagblad"}>
          <img src={saw} alt="klikkbart bilde av sagblad" className={"sagblad"} />
        </Link>
        <Link to={"/info/kvernhus"}>
          <img src={sawmill} alt="klikkbart bilde av kvernhus" className={"kvernhus"} />
        </Link>
        <Link to={"/info/sager"}>
          <img src={sawmill2} alt="klikkbart bilde avsager" className={"sager"} />
        </Link>
      </div>

      <img src={tree} className="cornerTree" alt="bilde av trær" />
    </div>
  );
}
