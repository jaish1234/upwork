import "./project.css";
import React from "react";

function Project() {
    return (
        <>
            <div className="main">
                <div className="main-heading">Find the best freelance jobs</div>
                <div className="a">
                    <div className="sub-text">
                        Browse jobs posted on Upwork, or jump right in and
                        create a free profile to find the work that you love to
                        do.
                    </div>
                    <div className="but">
                    <button className="find-button">Find Work</button>
                    <div className="play">
                        <span class="material-symbols-outlined">
                            play_circle
                        </span>
                    </div>
                    <a className="demo-link">
                        <i class="fa-solid fa-circle-play"></i> Watch a demo
                    </a>
                    </div>
                </div>
                <div className="find">Find freelance jobs /</div>
            </div>
        </>
    );
}

export default Project;
