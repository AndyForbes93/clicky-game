import React from "react";
import "./cardStyle.css";


const Cards = props => (
        <div onClick={() => props.clickCard(props.id)} className="click">
            <div className="card">
                <div className="img-container view zoom">
                    <img alt={props.name} src={props.image} className="img-fluid"/>
                    <div className="mask  rgba-red-strong">
                    </div>
                </div>
            </div>
        </div>
        



)

export default Cards;
