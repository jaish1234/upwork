import React from "react";
import "./About.css";
import hyden from '../../assets/image/home-page/hyden.png';
import signiture from '../../assets/image/home-page/signiture.png';

function About() {
    return (
        <>
            <div id="e1">
                <h1 id="e2">About Us</h1>  

                <p id="e3">The world's work marketplace</p>

                <img src={hyden} alt="" id="ie1" />

                <h1 id="e4">Hayden Brown</h1>

                <p id="e5">President & CEO</p>

                <p id="e6">
                    Upwork began over two decades ago by pioneering a better way
                    of working, helping businesses find more flexibility and
                    connecting talent with more opportunities.
                </p>

                <h2 id="e7">
                    Our mission to create economic opportunities so people have
                    better lives has taken us so much further. As a result,
                    we’ve become the world’s work marketplace where every day
                    businesses of all sizes and independent talent from around
                    the globe meet here to accomplish incredible things.
                </h2>

                <div id="e8">
                    <p>
                        Like for so many, Upwork has had a big impact on my
                        life. I first came to this company on the product team
                        and over the years have understood what makes this
                        platform really work: the relationships.
                    </p>

                    <p style={{ color: "black" }}>We see what you do</p>

                    <p>
                        I have personally seen the passion and commitment that
                        every user puts into their work here. Whether it’s a
                        quick powerpoint presentation or a multi-year
                        development project - both talent on Upwork and our
                        clients care about doing really good work because they
                        love what they do.
                    </p>

                    <p>
                        In fact, we designed it that way. Our work marketplace
                        aligns the goals of our clients with the goals of talent
                        on Upwork so that outcomes are better and everyone grows
                        in the same direction. You’ll find tools to develop your
                        skills, evolve your business, and gain the control and
                        freedom you need for success.
                    </p>

                    <p style={{ color: "black" }}>Upwork is your workforce</p>

                    <p>
                        If you’re a client that’s come here to get things done,
                        use this workforce of independent talent to build faster
                        and transform your business. If you’re independent
                        talent that’s come here to realize your potential, know
                        that you are a valuable and instrumental part of
                        someone’s team.
                    </p>

                    <p style={{ color: "black" }}>
                        We make work more rewarding
                    </p>

                    <p>
                        We see your vision, and everything we do is an effort to
                        help you make the connections that will turn that vision
                        into reality, by building your Virtual Talent Bench of
                        trusted people.
                    </p>
                    <p>
                        The impact is both economic and personal, in the
                        everyday and in the long run. When you find the right
                        people, you stop working to get by and start working
                        strategically.
                    </p>

                    <p>That is when real opportunity emerges.</p>

                    <p>
                        I can say with confidence that the Upwork team - the
                        team that serves you the talent and you the client - is
                        still driven by our mission to create economic
                        opportunity for our people around the world.
                    </p>

                    <p>
                        You’re our people now, and we’re glad that you’re here.
                    </p>

                    <p>We can’t wait to see what you do.</p>

                    <img src={signiture} alt="" id="e8" />

                <div id="e0">
                    <div className="line"></div>

                    <p>Hayden Brown, <br></br>President and CEO</p>
                </div>
                <div id="e9">
                    <p>Start your journey</p>
                </div>

                <button id="bttn">Find Talent</button>
                <button id="btttn">Find Work</button>
                </div>
            </div>
        </>
    );
}

export default About;
