import React from "react";
import "../styles.scss";
import { withRouter } from "react-router-dom";
import Pdf from "./Edut.pdf"
import Image from "./Edut.png"


function Edut(props) {

    return (
        <div className="edut">
            <label className="label">
                העדות של אליו מיזן
            </label>
            <a href={Pdf} target="_blank">
                <img
                    className="img"
                    src={Image}
                    alt=""
                    type="button"
                    onClick={() => this.setState({ isOpen: true, photoItem: item })}
                ></img>
            </a>
        </div>
    );
}
export default withRouter(Edut);
