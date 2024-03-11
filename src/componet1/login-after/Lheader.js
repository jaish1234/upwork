import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "../login-after/Lheader.css";
import logoo from "../../assets/image/home-page/header-logo.png";
import { Link } from "react-router-dom";

function Lheader() {
    const { logout } = useAuth0();

    let buttons1 = document.getElementsByTagName("h4");

    for (let i = 0; i < buttons1.length; i++) {
        buttons1[i].addEventListener("click", function () {
            document.getElementById("but").innerHTML = this.innerHTML;
        });
    }

    return (
        <>
            <div className="llnav">
                <div className="lnav">
                    <img src={logoo} className="logoo" alt="not found" />

                    <header className="lnav1">
                        <div className="lhead">
                            <Link to={"/Jobs"} className="lhead1">
                                Jobs
                            </Link>
                            <span class="material-symbols-outlined">
                                expand_more
                            </span>
                            <div className="lhead2">
                                <a href="@">Post a Job</a>
                                <a href="@">My Jobs</a>
                                <a href="@">All Job Posts</a>
                                <a href="@">All Contracts</a>
                                <a href="@">Any Hire</a>
                            </div>
                        </div>
                        <div className="lhead">
                            <Link to={"/Talent"} className="lhead1">
                                Talent
                            </Link>
                            <span class="material-symbols-outlined">
                                expand_more
                            </span>
                            <div className="lhead2">
                                <a href="@">Discover</a>
                                <a href="@">Your hires</a>
                                <a href="@">Company hires</a>
                                <a href="@">Recently viewed</a>
                                <a href="@">Save talent</a>
                            </div>
                        </div>
                        <div className="lhead">
                            <Link to={"/Reports"} className="lhead1">
                                Reports
                            </Link>
                            <span class="material-symbols-outlined">
                                expand_more
                            </span>
                            <div className="lhead2 lhead3">
                                <p>Account Overview</p>
                                <a href="@">Weekly Summary</a>
                                <hr></hr>
                                <p>Financials</p>
                                <a href="@">Transaction History</a>
                                <a href="@">Budgets</a>
                                <hr></hr>
                                <p>Freelancer Activity</p>
                                <a href="@">Timesheet</a>
                                <a href="@">Time by Activity</a>
                                <a href="@">Time by Freelancer</a>
                                <a href="@">All work Diaries</a>
                                <a href="@">Custom Export</a>
                            </div>
                        </div>
                        <div>
                            <Link to={"/Messages"}>Messages</Link>
                        </div>
                    </header>
                </div>
                <div className="lnav1">
                    <div className="b1">
                        <input
                            type="search"
                            className="lsear"
                            placeholder="Search"
                        ></input>
                        <hr></hr>
                        <div className="show">
                            <button className="but" id="but">
                                Talent
                                <span class="material-symbols-outlined">
                                    expand_more
                                </span>
                            </button>
                            <div className="show2">
                                <div className="lnav tall">
                                    <span class="material-symbols-outlined">
                                        group
                                    </span>
                                    <div>
                                        <h4>Talent</h4>
                                        <p>Hire Professionals and agencies</p>
                                    </div>
                                </div>
                                <div className="lnav tall">
                                    <span class="material-symbols-outlined">
                                        business_center
                                    </span>
                                    <div>
                                        <h4>Projects</h4>
                                        <p>Buy ready-to-start services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="qmark">
                        <span class="material-symbols-outlined">
                            question_mark
                        </span>

                        <span class="material-symbols-outlined">
                            notifications
                        </span>

                        <span class="material-symbols-outlined">favorite</span>
                    </div>
                    <div className="acco show">
                        <span class="material-symbols-outlined">
                            account_circle
                        </span>
                        <div className="show2 show3">
                            <div className="show4">
                                <span class="material-symbols-outlined">
                                    account_circle
                                </span>
                            </div>
                            <p style={{ textAlign: "center" }}>
                                Account User name
                                <p>Client</p>
                            </p>
                            <div className="show5">
                                <button type="button" className="onbtn">
                                    Online
                                </button>
                                <button type="button" className="inbtn">
                                    Invisible
                                </button>
                            </div>
                            <div className="peradd tall">
                                <span class="material-symbols-outlined">
                                    person_add
                                </span>
                                <a href="@">Invite a Coworker</a>
                            </div>
                            <div className="peradd tall">
                                <span class="material-symbols-outlined">
                                    settings
                                </span>
                                <a href="@">Settings</a>
                            </div>
                            <div className="peradd tall">
                                <span class="material-symbols-outlined">
                                    logout
                                </span>
                                <Link to={"/Home"} onClick={() => logout({logoutParams: {returnTo:window.location.origin}})}>Log out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Lheader;
