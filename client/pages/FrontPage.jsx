import React from "react";
import "../components/styles/FrontPage.css";
import logo from "../utils/images/bilde.png";
import { Link } from "react-router-dom";
import tree from "../utils/images/trees.svg";

export default function FrontPage() {
  return (
    <div className={"first-div"}>
      <img src={logo} alt="logo" className={"logo"} />

      <div className={"Velkommen-div"}>
        <h1 className={"h1-start"}>Velkommen til Byåa kultursti</h1>
      </div>

      <div>
          <Link style={{ textDecoration: "none" }} to={"/map"}>
            <button className={"start-button"}>START</button>
          </Link>
      </div>

      <img src={tree} className="cornerTree" alt="bilde av trær" />
    </div>
  );
}
