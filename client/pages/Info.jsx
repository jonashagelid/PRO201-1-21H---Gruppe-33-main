import { Link } from "react-router-dom";
import "../components/styles/info.css";
import arrow from "../utils/images/arrow-back-circle-outline.svg";
import tree from "../utils/images/trees.svg";

export function Info() {
  return (
    <div>
      <Link to={"/map"}>
        <img width={50} height={50} src={arrow} alt="" />
      </Link>
      <h1 className={"overskrift-info"}>Info side</h1>

      <Link style={{ textDecoration: "none" }} to={"/info/kvernhus"}>
        <button className={"info-btn"}>Kvernhus</button>
      </Link>

      <Link style={{ textDecoration: "none" }} to={"/info/kvernstein"}>
        <button className={"info-btn"}>Kvernstein</button>
      </Link>

      <Link style={{ textDecoration: "none" }} to={"/info/gardskvern"}>
        <button className={"info-btn"}>Gårdskvern</button>
      </Link>

      <Link style={{ textDecoration: "none" }} to={"/info/sagblad"}>
        <button className={"info-btn"}>Sagblad</button>
      </Link>

      <Link style={{ textDecoration: "none" }} to={"/info/sager"}>
        <button className={"info-btn"}>Sager</button>
      </Link>

      <Link style={{ textDecoration: "none" }} to={"/info/medaljer"}>
          <button className={"info-btn"}>Medaljer</button>
      </Link>


        <Link style={{ textDecoration: "none" }} to={"/"}>
        <button className={"info-home"}>Hjem</button>
      </Link>

      <img src={tree} className="cornerTree" alt="bilde av trær" />
    </div>
  );
}
