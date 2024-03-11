import React from "react";
import "./free10-6.css";
import plus from "../images/plus.jpg";
import hyden2 from "../images/hyden2.png"

function Free() {
    return (
        <>
            <div className="nea">
                <p style={{ color: "gray" }}>6/10</p>
                <p className="near1">
                    Nearly there! What work are you here to do?
                </p>
                <p className="near-skill">
                    Your skills show clients what you can offer, and help us
                    choose which jobs to recommend to you. Add or remove the
                    ones we've suggested, or start typing to pick more. it's up
                    to you.
                </p>

                <div className="leb1">
                    <div className="leb">
                        <p style={{ fontSize: 19 }}>Your skills</p>
                        <input
                            type="search"
                            placeholder="Enter skills here"
                            className="sear"
                        />
                        <p className="max-skill">Max 15 skills</p>

                        <p className="sugg">Suggested skills</p>
                        <img src={plus} alt="" className="plu" />
                        <button type="button" className="plus">React</button>
                    </div>
                    <div className="hyden">
                      <img src={hyden2} alt="" className="hyden2" />

                      <p className="hyden2 ">"TalentHub's algorithm will recommend specific job posts
                        to you based on your skills. So choose them carefully to get 
                        the best match!"
                      </p>
                      <h4 className="Tip">-- TalentHub Pro Tip</h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Free;
