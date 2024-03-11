import React, { useState } from "react";
import "./how-f-w.css";
import pcwork from "../images/pcwork.webp";
import stars from "../images/stars.png";
import Airplane from "../images/Airplane.png";
import Hands from "../images/Hands.jpeg";
import Funnel from "../images/Funnel.jpeg";
import microsoft from "../images/microsoft.svg";
import Airbnb from "../images/Airbnb.svg";
import automatic from "../images/automatic.svg";
import Bissell from "../images/Bissell.svg";
import Nasdaq from "../images/Nasdaq.svg";
import visual from "../images/visual.svg";
import wordpress from "../images/wordpress.webp";
import blog from "../images/blog.webp";
import leptopwork from "../images/leptopwork.webp";
import Group from "../images/Group.jpg"
import Group1 from "../images/Group1.jpg"
import Group2 from "../images/Group2.jpg"

function Howork() {
    const [read, setview] = useState(false);
    const togglebutton = () => {
        setview(!read);
    };

    const [read1, setview1] = useState(false);
    const togglebutton1 = () => {
        setview1(!read1);
    };

    const [read2, setview2] = useState(false);
    const togglebutton2 = () => {
        setview2(!read2);
    };

    const [read3, setview3] = useState(false);
    const togglebutton3 = () => {
        setview3(!read3);
    };

    const [read4, setview4] = useState(false);
    const togglebutton4 = () => {
        setview4(!read4);
    };

    const [read5, setview5] = useState(false);
    const togglebutton5 = () => {
        setview5(!read5);
    };
    return (
        <>
            <div className="aa1">
                <div className="a1">
                    <div className="a2">
                        <h1>Work the way you want</h1>

                        <h5>
                            Find the right work for you, with great clients, at
                            the world’s work marketplace.
                        </h5>

                        <img src={pcwork} alt="" className="ia1" />

                        <button className="bt1">
                            <b>Create your Profile</b>
                        </button>

                        <div className="underline"></div>

                        <h4>Professionals rate clients</h4>

                        <div className="aa2">
                            <img src={stars} alt="" className="ia2" />
                        </div>

                        <h3>4.9/5</h3>

                        <p className="a3">based on 2.4M+ reviews</p>
                    </div>
                </div>
            </div>
            {/* part 2 */}
            <div className="bb1">
                <p>
                    <b>How it works</b>
                </p>

                <div className="underline1"></div>

                <div>
                    <img src={Airplane} alt="" className="ib1" />

                    <h6 className="b1">Create your profile (it’s free)</h6>

                    <p className="b2">
                        An eye-catching title and client-focused overview help
                        us match you to the work you want. Include your work
                        history, your skills, and your photo. Add more, like an
                        introduction video, to create a profile that really
                        stands out. The notable past gigs, and even some recent
                        client testimonials. This will stand out to potential
                        clients.
                    </p>
                </div>

                <div>
                    <img src={Hands} alt="" className="ib2" />

                    <h6 className="b1">Explore ways to earn</h6>

                    <p className="b2">
                        Work and earn in different ways. Bid for jobs. Pitch
                        your projects. Discuss your in-demand skills with our
                        recruiters so they can find opportunities aligned with
                        your passions and career goals. Do all three. Create a
                        predictable pipeline and build your network.
                    </p>

                    <a href="@" className="b3">
                        <span className="material-symbols-outlined">south</span>
                        See ways to earn
                    </a>
                </div>

                <div>
                    <img src={Funnel} alt="" className="ib3" />

                    <h6 className="b1">Get paid securely</h6>

                    <p className="b2">
                        Choose how you get paid. Our fixed-price protection
                        releases client payments at project milestones. Hourly
                        protection bills clients every week. However you work,
                        our service fees are the same. Spend less time chasing,
                        more earning.
                    </p>
                </div>

                <button className="bt2">
                    <b>Create your Profile</b>
                </button>
            </div>

            {/* part 3 */}

            <div>
                <p className="c1">Trusted by</p>

                <div className="cc1">
                    <img src={microsoft} alt="" />

                    <img src={Airbnb} alt="" className="ic1" />

                    <img src={automatic} alt="" className="ic1" />

                    <img src={Bissell} alt="" className="ic1" />

                    <img src={Nasdaq} alt="" className="ic1" />
                </div>

                <p className="underline2"></p>

                <p className="c2">
                    <b>Explore ways to earn</b>
                </p>

                <p className="underline2"></p>
            </div>

            {/* part 4 */}
            <div>
                <p className="d1">Find your next opportunity</p>

                <p className="d2">
                    Search on Talent Marketplace™ for the hourly or fixed-price
                    work you’re looking for. Submit a proposal, set your rate,
                    and show how great you’ll be. Give a little extra by sharing
                    your unique approach and offering a rapport-building
                    interview.
                </p>

                <img src={visual} alt="" className="id1" />

                <button className="bt3">
                    <b>Find Jobs</b>
                </button>
            </div>

            <img src={wordpress} alt="" className="id2" />
            <div className="dd1">
                <p className="d3">WordPress website</p>
                <p className="d4">From $500</p>
            </div>

            <div className="idd3">
                <img src={blog} alt="" className="id3" />
            </div>
            <div className="dd2">
                <p className="d3">Blog Posts</p>
                <p className="d4">From $750</p>
            </div>

            <div>
                <p className="d5">
                    <b>Sell what you do best</b>
                </p>

                <p className="d6">
                    Create easy-to-buy projects with Project Catalog™. Match
                    your projects to what clients need. Be clear upfront by
                    defining your scope, timing, price, and terms. Once we’ve
                    approved your project, clients can start to buy.
                </p>

                <button className="bt4">
                    <b>See Other Projects</b>
                </button>
            </div>

            {/* part 5 */}

            <div>
                <img src={leptopwork} alt="" id="ia1" />

                <p id="a1">How payments work</p>

                <p id="a2">
                    Whether you’re paid hourly or on a fixed-price contract, all
                    the work you complete comes with payment protection.
                </p>

                <p id="a3">All in one place</p>

                <p id="a4">
                    Invoice clients and track your earnings on TalentHub for a
                    simple and streamlined process.
                </p>

                <p id="a3">Choose how you get paid</p>

                <p id="a4">
                    Use what works best for you—including direct deposit,
                    PayPal, Payoneer, wire transfer, and more.
                </p>

                <p id="a3">No fees until you complete your work</p>

                <p id="a4">
                    You’ll pay a 10% freelancer service fee on what you earn on
                    TalentHub.
                </p>

                <a href="@" id="a5">
                    Learn more about service fees.
                </a>
            </div>

            {/* part 6 */}

            <div id="b1">
                <p id="b2">
                    <b>Frequently asked questions</b>
                </p>

                {/* one */}
                <div id="hello">
                    <h3 id="b3">
                        <b>Is Upwork free to join as a freelancer?</b>
                    </h3>

                    <p id="b4">
                        Yes, it’s free to join Upwork, complete your profile,
                        search for work and create your own projects. You’ll pay
                        a 10% <a href="@">freelancer service fee</a> on the
                        money you earn from clients.
                        {read ? (
                            <>
                                {" "}
                                <br></br>You can upgrade to Freelancer Plus to
                                more effectively market your services, submit
                                proposals and stand out from the crowd.
                            </>
                        ) : null}
                    </p>
                    <button id="b5" onClick={togglebutton}>
                        {read ? "View Less" : "Read More"}
                    </button>

                    <span class="material-symbols-outlined">expand_more</span>

                    <div id="underline"></div>

                    {/* two */}
                    <h3 id="b3">
                        <b>Can I grow my career on Upwork?</b>
                    </h3>
                    <p id="b4">
                        Yes, some of our most successful professionals have
                        brought their strong background and employment track
                        record to Upwork. We know you may be new to freelancing
                        but highly experienced in your field. Our complete guide
                        shares our
                        {read1 ? (
                            <>
                                <a href="@"> complete guide </a>shares our
                                step-by-step tips for building your freelance
                                career.
                            </>
                        ) : null}
                    </p>
                    <button id="b5" onClick={togglebutton1}>
                        {read ? "View Less" : "Read More"}
                    </button>

                    <span class="material-symbols-outlined">expand_more</span>

                    <div id="underline"></div>

                    {/* three */}
                    <h3 id="b3">
                        <b>What can I gain from freelancing with Upwork?</b>
                    </h3>
                    <p id="b4">
                        Many more people like you are choosing to leave their
                        day jobs and grow as independent professionals. Why?
                        Because of the <a href="@">freedom and flexibility </a>
                        that comes with being your own boss. And for the chance
                        to
                        {read2 ? (
                            <>
                                work with great clients and well-known brands.
                                Many choose Upwork because we help them do it
                                well. How to Succeed as a Freelancer gives you a
                                taste of the support we offer to boost your
                                success.
                            </>
                        ) : null}
                    </p>
                    <button id="b5" onClick={togglebutton2}>
                        {read ? "View Less" : "Read More"}
                    </button>

                    <span class="material-symbols-outlined">expand_more</span>

                    <div id="underline"></div>

                    {/* four */}

                    <h3 id="b3">
                        <b>Is Upwork good for building a business?</b>
                    </h3>
                    <p id="b4">
                        Yes, and <a href="@"> creating an agency</a> can be a
                        great way to grow. Using our agency structure,
                        freelancers can collaborate as a single organization,
                        delivering more to their clients. Moving from solo
                        freelancer to agency
                        {read3 ? (
                            <>
                                owner is a big transition, but it might be{" "}
                                <a href="@"> the right one for you.</a>
                            </>
                        ) : null}
                    </p>
                    <button id="b5" onClick={togglebutton3}>
                        {read ? "View Less" : "Read More"}
                    </button>

                    <span class="material-symbols-outlined">expand_more</span>

                    <div id="underline"></div>

                    {/* five */}

                    <h3 id="b3">
                        <b>What projects can I find on Upwork?</b>
                    </h3>

                    <p id="b4">
                        Clients are looking for help across almost every
                        industry, job, and skill set. Find the work you’re
                        looking for, from specific projects to ongoing,
                        long-term work, on fixed-price and hourly contracts.
                    </p>

                    <div id="underline"></div>

                    {/* six */}

                    <h3 id="b3">
                        <b>What are Connects? </b>
                    </h3>
                    <p id="b4">
                        Connects are what you’ll use to submit proposals to
                        jobs. Different jobs require different amounts of
                        Connects, some none at all. Freelancer accounts receive
                        free Connects every month, and you can buy more in
                        {read4 ? (
                            <>
                                <br></br>bundles at any time.
                            </>
                        ) : null}
                    </p>
                    <button id="b5" onClick={togglebutton4}>
                        {read ? "View Less" : "Read More"}
                    </button>

                    <span class="material-symbols-outlined">expand_more</span>

                    <div id="underline"></div>

                    {/* seven */}

                    <h3 id="b3">
                        <b>What do the different badges mean?</b>
                    </h3>
                    <p id="b4">
                        Our badges help you stand out. With a strong background
                        in your field and early success with clients, you’ll
                        soon be invited to meet our{" "}
                        <a href="@">Rising Talent</a> criteria. Keep building
                        your reputation to earn our <a href="@"> Top Rated</a>
                        {read5 ? (
                            <>
                                badge. <a href="@">Top Rated Plus</a> shows you have a
                                proven history of success on large and long-term
                                contracts. And <a href="@"> Expert-Vetted</a> means you’ve gone
                                through our rigorous pre-screening to match your
                                high-demand skills with the right clients. Get
                                the feedback, wear the <a href="@">badge</a>, hit your goals.
                            </>
                        ) : null}
                    </p>
                    <button id="b5" onClick={togglebutton5}>
                        {read ? "View Less" : "Read More"}
                    </button>

                    <span class="material-symbols-outlined">expand_more</span>
                </div>
            </div>

            {/* part 7 */}

            <div>
                <p id="c1"><b>Learn as you work</b></p>

                <div id="c2">
                    <img src={Group} alt="" id="ic1"/>

                    <h1 id="c3">Getting started</h1>

                    <button id="btn">Learn More</button>
                </div>
            </div>

           <div id="c2my">
            <div id="c2">
                    <img src={Group1} alt="" id="ic1"/>

                    <h1 id="c3">Getting started</h1>

                    <button id="btn">Learn More</button>
            </div>
           </div>

           <div id="c3my">
            <div id="c2">
                    <img src={Group2} alt="" id="ic1"/>

                    <h1 id="c3">Getting started</h1>

                    <button id="btn">Learn More</button>
            </div>
           </div>
            <br></br><br></br>
        </>
    );
}
export default Howork;
