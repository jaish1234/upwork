import React from "react";
import "./sign_process.css";
import person from "../images/person.png";
import person1 from "../images/person1.png";
import mail from "../images/mail.png";
import dollar from "../images/dollar.png";
import hyden4 from "../images/hyden4.png";
// import star1 from '../images/star1.png'

function Process() {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <div class="per">
                    <img src={person} alt="" className="per2" />
                    <span class="per1">
                        <img src={person} alt="" className="per3" />
                        <h2 className="per3">Login Name</h2>
                        <p className="per4">Freelancer</p>
                        <div className="setting">
                            <span class="material-symbols-outlined">
                                settings
                            </span>
                            <p className="sett">Close Account</p>
                        </div>
                        <div className="setting">
                            <span class="material-symbols-outlined">
                                logout
                            </span>
                            <p className="sett">Log out</p>
                        </div>
                    </span>
                </div>
            </div>

            <div className="hedd">
                <div className="play">
                    <p className="hey">
                        Hey jysa. Ready for your next big opportunity?
                    </p>

                    <div className="bdr">
                        <div>
                            <img
                                src={hyden4}
                                alt="no found"
                                className="hyden"
                            />
                        </div>

                        <p className="fnts">Sasheen A.</p>
                        <p className="fnts1">Customer Experience Consultant</p>
                        <br />

                        <div className="dispflx clr">
                            <span class="material-symbols-outlined">star</span>
                            <p className="pdin">5.0</p>
                            <p className="pdin padin1">$75.00/hr</p>

                            <span class="material-symbols-outlined">
                                home_repair_service
                            </span>
                            <p className="pdin">14 jobs</p>
                        </div>
                        <p className="bio">
                            "TalentHub has enabled me to increase my rates. I
                            know what I'm bringing to the table and love the
                            felling of being able to help a variety of clients."
                        </p>
                    </div>
                </div>
                <div className="pina">
                    <img src={person1} alt="not found" className="pin" />
                    <p className="pin1">
                        Answer a few Questions and start building your profile
                    </p>
                </div>
                <hr className="line"></hr>
                <div className="pina pinaa">
                    <img src={mail} alt="not found" className="pin" />
                    <p className="pin1">
                        Apply for open roles or list services for clients to buy
                    </p>
                </div>
                <hr className="line"></hr>
                <div className="pina pinaa">
                    <img src={dollar} alt="not found" className="pin" />
                    <p className="pin1">
                        Get paid safely and know we're there to help
                    </p>
                </div>
                <hr className="line"></hr>

                <div className="gett">
                    <button className="get">Get Started</button>
                    <p className="pin1" style={{ width: 400 }}>
                        it only takes 5-10 minutes and you can edit it later.
                        we'll save as you go.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Process;
