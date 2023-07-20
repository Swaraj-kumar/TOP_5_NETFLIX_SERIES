import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import Card from "./Cards";
import Sdata from "./Sdata";

function NetflixCard(val){
    console.log(val);
    return(
    <Card
        imgsrc = {val.imgscr}
        title = {val.title}
        sname = {val.sname}
        link = {val.links}
    />
    );
}

ReactDOM.render(
    <>
    <h1 className="heading_style">List of Top 5 Netflix Series</h1>
    {Sdata.map(NetflixCard)}
    </>
,document.getElementById("root")
);



