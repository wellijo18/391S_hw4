import Layout from '../layout/layout';
import image404 from "../assets/404.png";
import React from "react";

export default function About() {
    return (
        <>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "2rem" }}>
                <div style={{marginBottom: "2rem"}}>
                    <h1>Wellington Oliveira</h1>
                </div>
                <div style={{display: "flex", alignItems: "center", gap: "2rem"}}>
                    <img src={"../welli.png"} alt={"Picture of Author"} onError={(e) => (e.currentTarget.src = image404.src)} style={{width: "18vw", height: "18vw", borderRadius: "50%"}}/>
                    <p style={{maxWidth: "20vw"}}> Wellington is currently a senior studying computer science at Boston University. He currently works at Apple and is
                        hoping to further his development skills! He decided he wants to share some news articles with the world, find out more about the website</p>
                </div>
                <div style={{marginTop: "2rem" }}>
                    <a href="/" style={{ textDecoration: "none", color: "blue", fontSize: "2rem" }}>
                        Click for our Space News Site!
                    </a>
                </div>
            </div>

        </>

    );
};
