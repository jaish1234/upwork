import React, { useState } from "react";
import "./choose.css";
import hire from "../images/hire.png";
import vector from "../images/vector.jpg";

function Choose() {

    let [Acolor, chageBcolor] = useState()
    let [Aborder, chageBborder] = useState()
    let [Acolor1, changeBcolor1] = useState()
    let [Aborder1, changeBborder1] = useState()

    return (
        <>
            <div className="client-free">
                <div className="free">   
                    <h1 className="join">Join as a Client or Freelancer</h1>
                    <div className="join1">
                        <div className="hire" style={{backgroundColor:Acolor,borderColor:Aborder}}>
                            <img src={hire} alt="not found" className="hire-im"/>
                            <input type="radio" className="radio1" id="radio" name="radio" onClick={() =>{
                                chageBcolor("rgba(255,0,0,0.123)")
                                changeBcolor1("")
                                chageBborder("red")
                                changeBborder1("")
                            }}/>
                        </div>
                        <p className="client">I'm a client, hiring <br/> for a project</p>
                        <div className="hire hire1" style={{backgroundColor:Acolor1,borderColor:Aborder1}}>
                            <img src={vector} alt="not found" className="hire-im hire1-im"/>
                            <input type="radio" className="radio2" id="radio" name="radio" onClick={() => {
                                chageBcolor("")
                                changeBcolor1("rgba(255,0,0,0.123)")
                                chageBborder("")
                                changeBborder1("red")
                            }} />
                        </div>
                        <p className="client client1">I'm a Freelancer, <br/> looking for work</p>
                    </div>
                    <button className="button">Create Account</button>

                    <p style={{margin: '1% 30%',fontSize:19}}>Already have an account?
                     <a href="@" className="login">Log In</a></p>
                </div>
            </div>
        </>
    );
}    

export default Choose;
