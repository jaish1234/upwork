import React, { useState } from "react";
import "./careers.css";
import modern from "../images/modern.webp";
import photo from "../images/photo-baf.avif";
import hyden2 from "../images/hyden2.png";
import heart from "../images/heart.png";
import hyden3 from "../images/hyden3.png";
import female1 from "../images/female1.jpeg";
import male1 from "../images/male1.jpeg";
import female2 from "../images/female2.jpeg";
import female3 from "../images/female3.png";
import hyden4 from "../images/hyden4.png";
import work from "../images/work.jpg";
import stress from "../images/stress.jpg";
import don1 from "../images/don1.png";
import don2 from "../images/don2.png";
import don3 from "../images/don3.png";
import don4 from "../images/don4.png";
import gol from "../images/gol.jpg"
    
function Careers() {

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

    let News = [
        {
            Date : "April 19, 2023",
            To : "How millennial Courtney Allen brought in 2 million making powerpoints",
            Learn : "Read News -&gt;"
        },
        {
            Date : "March 22, 2023",
            To : "Melissa Waters (Upwork) | The changing world of work",
            Learn : "Read News -&gt;"
        },
    ]

    let News1 = [
        {
            Date : "March 7, 2023",
            To : "Why rising layoffs won't kill your side hustles",
            Learn : "Read News -&gt;"
        },
        {
            Date : "March 7, 2023",
            To : "Exclusive: Upwork is revamping its business model to support full time hiring",
            Learn : "Read News -&gt;"
        },
    ]

    return (
        <>
            <div className="ee1">
                {/* part 1 */}
                <div className="e1">
                    <div>
                        <p className="e2">
                            Come change the way the world works
                        </p>
                        <p className="e3">
                            Be part of the team that's bringing this vision to
                            life.
                        </p>
                        <button className="but">Open Positions</button>
                        <a href="@" className="e4">
                            See Contract Roles
                        </a>
                    </div>
                    <img src={modern} alt="" className="ie1" />
                </div>

                {/* part 2 */}
                <div>
                    <p className="e5">
                        Our mission is to create economic opportunities so
                        people have better lives.
                    </p>

                    <p className="e6">
                        Upwork is the world’s work marketplace that connects
                        businesses with independent talent. We serve everyone
                        from one-person startups to 30% of the Fortune 100 with
                        a powerful, trust-driven platform that enables companies
                        and freelancers to work together in new ways that unlock
                        their potential.
                    </p>

                    <img src={photo} alt="" className="ie2" />
                </div>
                <div className="e7">
                    <p className="e8">
                        “Upwork's mission - to create economic opportunities so
                        people have better lives - is a global one. It's also
                        deeply personal to me as someone who grew up in
                        Appalachia and knows so many talented folks there
                        seeking economic opportunities. I am inspired every day
                        by the work we do at Upwork to help break down
                        longstanding geographic barriers so that you can build
                        the career you want, whether that's in Appalachia or
                        nearly anywhere else. “
                    </p>

                    <div className="unline"></div>

                    <img src={hyden2} alt="" className="ie3" />

                    <h2 className="e9">Lucas Deloach</h2>
                    <h3 className="e10">Director, Employment Counsel</h3>

                    <img src={heart} alt="" className="ie4" />

                    <p className="e11">Our key values</p>

                    {/* part 3 */}
                    <div className="ff1">
                        <p className="f1">Play to win as a team.</p>

                        <p className="f2">Build and break fearlessly.</p>
                    </div>

                    <div className="ff2">
                        <p className="f3">Be customer zero.</p>

                        <p className="f4">Commit to excellence.</p>
                    </div>

                    <a href="@" className="f5">
                        Read more about our values & working principles
                    </a>
                    <div className="f6">
                        <span class="material-symbols-outlined">
                            arrow_right_alt
                        </span>
                    </div>

                    <p className="e8">
                        “There is no ‘typical day’ at Upwork. Each day I get to
                        show up and tackle new challenges. Being able to work
                        closely with my teams and cross-functional key partners
                        gives me more visibility into how we work together
                        cohesively to further Upwork’s mission. Having this
                        visibility and ability to understand department-level
                        key objectives enables me to better support the business
                        and positively accelerate my career path.”
                    </p>

                    <div className="unline"></div>
                    <img src={hyden3} alt="" className="ie3" />

                    <h2 className="e9">Amy Le</h2>
                    <h3 className="e10">Program Assistant</h3>
                </div>

                <p className="f7">Our Leaders</p>
                <p className="f8">
                    Helping businesses and talent reach their full potential
                </p>

                <div className="ff3">
                    <button className="but1">
                        <span class="material-symbols-outlined">
                            arrow_right_alt
                        </span>
                    </button>
                </div>

                <div className="ff4">
                    <div className="f9">
                        <img src={female1} alt="" className="if1" />
                        <p style={{ fontSize: 25, fontFamily: "serif" }}>
                            Hayden Brown
                        </p>
                        <p className="f10">President and CEO</p>
                    </div>

                    <div>
                        <div className="f11">
                            <img src={male1} alt="" className="if1" />
                            <p style={{ fontSize: 25, fontFamily: "serif" }}>
                                Brian Levey
                            </p>
                            <p className="f12">
                                Chief Business Affairs and Legal Officer
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="f13">
                            <img src={female2} alt="" className="if1" />
                            <p style={{ fontSize: 25, fontFamily: "serif" }}>
                                Melissa Waters
                            </p>
                            <p className="f12">Chief Marketing Officer</p>
                        </div>
                    </div>

                    <div>
                        <div className="f14">
                            <img src={female3} alt="" className="if1" />
                            <p style={{ fontSize: 25, fontFamily: "serif" }}>
                                Melissa Waters
                            </p>
                            <p className="f12">Chief Marketing Officer</p>
                        </div>
                    </div>
                </div>

                {/* part 4  */}

                <button className="but but2">Our Team</button>

                <div className="f15">
                    <p className="e8">
                        “It means a lot to me that my career is something that
                        feels like a net positive in the world. The fact that me
                        and my team are helping others obtain work opportunities
                        doing tasks they enjoy, with the flexibility to work
                        remotely and choose their own hours is so rewarding.”
                    </p>

                    <div className="unline"></div>
                    <img src={hyden4} alt="" className="ie3" />

                    <h2 className="e9">Mackenzie Betts</h2>
                    <h3 className="e10">TalentHub Professionals</h3>
                </div>

                <h1 className="f16">TalentHub in the News</h1>

                <div className="ff17">
                    
                    {
                        News.map((val) => {
                            return (
                                <>
                                    <div className="f17">
                                        <div className="f18">
                                            <p>{val.Date}</p>
                                            <p style={{ fontSize: 20 }}>
                                                {val.To}
                                            </p>
                                            <a href="@" className="f19">
                                                {val.Learn}
                                            </a>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

                <div className="ff18">
                    
                    {
                        News1.map((val1) => {
                            return (
                                <>
                                    <div className="f22">
                                        <div className="f23">
                                            <p>{val1.Date}</p>
                                            <p style={{ fontSize: 20, width: 220 }}>
                                                {val1.To}
                                            </p>
                                            <div className="ffff1">
                                                <a href="@" className="f19 f24">
                                                    {val1.Learn}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

                <img src={work} alt="" className="if2" />
                <div className="f25">
                    <h2>Motherhood Works | TalentHub</h2>
                    <a href="@" style={{ color: "#1f57c3" }}>
                        Visit our YouTube Channel -&gt;
                    </a>
                </div>

                <button className="but but3">Explore All</button>

                <div className="f26">
                    <p style={{ width: 700, fontSize: 80 }}>
                        Become a part of TalentHub
                    </p>

                    <div className="f27">
                        <button className="but4">Open Positions</button>
                        <a href="@" className="f28">
                            See Contract Roles
                        </a>

                        <img src={stress} alt="" className="if3" />
                    </div>
                </div>

                <h1 className="f29">See more about TalentHub</h1>
                <p className="f30">
                    Check out TalentHub profiles on other platforms.
                </p>

                <div className="f33">
                    <div className="f31">
                        <img src={don1} alt="" className="if4" />
                        <div className="f32">
                            <a href="@" style={{ color: "#1f57c3" }}>
                                Glassdoor -&gt;
                            </a>
                        </div>
                    </div>

                    <div className="f31 f34">
                        <img src={don2} alt="" className="if4" />
                        <div className="f32">
                            <a href="@" style={{ color: "#1f57c3" }}>
                                Indeed -&gt;
                            </a>
                        </div>
                    </div>

                    <div className="f31 f34">
                        <img src={don3} alt="" className="if4" />
                        <div className="f32">
                            <a href="@" style={{ color: "#1f57c3" }}>
                                Linkedln -&gt;
                            </a>
                        </div>
                    </div>
                </div>
                <div className="f33">
                <div className="f31 f35">
                    <img src={don4} alt="" className="if4" />
                    <div className="f32">
                        <a href="@" style={{ color: "#1f57c3" }}>
                            Built in Chicago -&gt;
                        </a>
                    </div>
                </div>
                <div className="f31 f35 f34">
                    <img src={don4} alt="" className="if4" />
                    <div className="f32">
                        <a href="@" style={{ color: "#1f57c3" }}>
                            Built in San Francisco -&gt;
                        </a>
                    </div>
                </div>
                </div>

                <p className="f37">Our Hiring Commitments</p>
                {/* one */}
                <p className="f38">
                    Equal Opportunity Employer
                    {read ? (
                        <>
                        {" "}
                            <br></br><p className="ff38">Upwork is an Equal Opportunity Employer. We are committed to inclusion and diversity. We make every effort to offer employment and advancement opportunities to all qualified candidates. We do not discriminate based upon race, religion, color, national origin, gender (including pregnancy, childbirth, or related medical condition), sexual orientation, gender identity, gender expression, age, status as a protected veteran, status as an individual with a disability, or other applicable legally protected characteristics.</p>
                        </>
                    ) : null}
                </p>
                <div className="f39" onClick={togglebutton}>
                    <span class="material-symbols-outlined">expand_more</span>
                </div>

                {/* two */}
                <p className="f38">
                    Accommodations
                    {read1 ? (
                        <>
                        {" "}
                            <br></br><p className="ff38">If you are an applicant who requires accommodations for any part of your application process, please contact us via email at <a href="@" style={{color:'#1f57c3'}}>accommodation@upwork.com.</a> Each request for reasonable accommodation will be considered on a case-by-case basis, consistent with the applicable laws and regulations.</p>
                        </>
                    ) : null}
                </p>
                <div className="f39" onClick={togglebutton1}>
                    <span class="material-symbols-outlined">expand_more</span>
                </div>
                {/* three */}
                <p className="f38">
                    Commitment to Diversity
                    {read2 ? (
                        <>
                        {" "}
                            <br></br><p className="ff38">At Upwork, we are committed to creating the most diverse and inclusive culture possible. Our community is made up of freelancers and businesses from 180 countries, and we believe the ability to provide a marketplace that empowers them and serves their diverse needs starts with team members. Diversity, inclusion, and belonging are critical to the success of our business and our ability to further our mission of creating economic opportunities so people have better lives. We make a concerted effort to ensure these efforts are woven throughout everything we do, both internally and externally, in order to do our part in making meaningful strides towards equality.</p>
                        </>
                    ) : null}
                </p>
                <div className="f39" onClick={togglebutton2}>
                    <span class="material-symbols-outlined">expand_more</span>
                </div>
                {/* fourth */}
                <p className="f38">
                    Benifit Statement
                    {read3 ? (
                        <>
                        {" "}
                            <br></br><p className="ff38">Upwork proudly offers a comprehensive set of benefits to ensure team members are able to bring their whole selves to work. To allow for that, we aim to deliver world-class offerings and perks that cover your medical, dental, vision, emotional and family well-being.
                            </p>
                        </>
                    ) : null}
                </p>
                <div className="f39" onClick={togglebutton3}>
                    <span class="material-symbols-outlined">expand_more</span>
                </div>

                <img src={gol} alt="" className="if5" />
                </div>
        </>
    );
}
export default Careers;
