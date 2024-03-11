import React, { useState } from "react";
import "./Home1.css";
import howork from "../../../assets/image/home-page/howork.webp";
import micro from "../../../assets/image/home-page/microsoft.png";
import air from "../../../assets/image/home-page/airbnb.png";
import bissell from "../../../assets/image/home-page/bissell.png";
import line from "../../../assets/image/home-page/line.png";
import man from "../../../assets/image/home-page/man.jpg";
import star from "../../../assets/image/home-page/star.png";
import female from "../../../assets/image/home-page/female.png";
import line1 from "../../../assets/image/home-page/line1.png";
import star1 from "../../../assets/image/home-page/star1.png";
import enterprise from "../../../assets/image/home-page/enterprise.webp";
import personheadset from "../../../assets/image/home-page/person-headset.webp";
import wstar from "../../../assets/image/home-page/white-star.png";
import award from "../../../assets/image/home-page/award.png";
import find_work from "../../../assets/image/home-page/find-work.webp";
import nasb from "../../../assets/svg/nasdaq.svg";
import microsoft from "../../../assets/svg/microsoft.svg";
import female1 from "../../../assets/image/home-page/female1.png";
import auto from "../../../assets/svg/automattic.svg";
import bissel from "../../../assets/svg/bissell.svg";
import coty from "../../../assets/svg/coty.svg";
import ran from "../../../assets/svg/rancher.svg";
import ukrain from "../../../assets/image/home-page/ukrain.png";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper/core";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation]);

function Home1() {
    // swiper slider library: npm install swiper@6.8.0

    let swiper;
    const handprev = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };
    const handnext = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    let [Acolor, chageBcolor] = useState();
    let [Aborder, chageBborder] = useState();
    let [Acolor1, changeBcolor1] = useState();
    let [Aborder1, changeBborder1] = useState();

    const top_data = [
        {maindata: 'Top Skills'},
        {maindata: 'Trending Skills'},
        {maindata: 'Top skills in US'},
        {maindata: 'Project CatalogTM'}
    ]
    const topskill_data = [
        { name: "Generative AI Specialists" },
        { name: "Data Entry Specialists" },
        { name: "Video Editors" },
        { name: "Data Analyst" },
        { name: "Shopify Devloper" },
        { name: "Ruby on Rails Devloper" },
        { name: "Andrroid Devloper" },
        { name: "Bookkeeper" },
        { name: "Content Writer" },
        { name: "Copywriter" },
        { name: "Data Scientist" },
        { name: "Front-End Devloper" },
        { name: "Game Devloper" },
        { name: "Graphic Designer" },
        { name: "iOS Devloper" },
        { name: "Java Devloper" },
    ]
    const topskill_data1 = [
        { name: "JavaScript Developer" },
        { name: "Logo Designer" },
        { name: "Mobile App Developer" },
        { name: "PHP Developer" },
        { name: "Python Developer" },
        { name: "Resume Writer" },
        { name: "SEO Expert" },
        { name: "Social Media Manager" },
        { name: "Software Developer" },
        { name: "Software Engineer" },
        { name: "Technical Writer" },
        { name: "UI Designer" },
        { name: "UX Designer" },
        { name: "Virtual Assistant" },
        { name: "Web Designer" },
        { name: "Wordpress Developer" },
    ];

    return (
        <>
            <div id="h1">
                <div className="h1">
                    <div>
                        <p className="hp1">How Work Should Work</p>
                        <p className="hp2">
                            Forget the old rules. You can have the best people.
                            Right now. Right here.
                        </p>
                        <button type="button" className="btn1 hbtn">
                            Get Started
                        </button>
                    </div>
                    <div>
                        <img src={howork} className="himg1" alt="Not Found" />
                    </div>
                </div>
                <p className="trust">Trusted by</p>
                <div className="mab-img">
                    <img src={micro} alt="Not Found" />
                    <img src={air} alt="Not Found" />
                    <img src={bissell} alt="Not Found" />
                </div>

                <div className="up_yourwork" style={{marginBlockStart:'4em'}}>
                    <div className="card1">
                        <AliceCarousel
                            autoPlay
                            autoPlayInterval={1000}
                            infinite
                            disableButtonsControls={true}
                            // dot remove in css .alice-carousel__dots {display: none;}
                        >
                            <Card className="responsive_card">
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        sx={{
                                            textAlign: "center",
                                            fontSize: "1rem",
                                        }}
                                        component="div"
                                    >
                                        Join us For Free
                                    </Typography>
                                    <Typography>
                                        <div className="card-main">
                                            <div
                                                className="card-client"
                                                style={{
                                                    backgroundColor: Acolor,
                                                    borderColor: Aborder,
                                                }}
                                            >
                                                <div className="content">
                                                    <svg
                                                        className="card-svgtag"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true"
                                                        data-name="Layer 1"
                                                        viewBox="0 0 24 24"
                                                        role="img"
                                                    >
                                                        <polygon
                                                            fill="none"
                                                            vector-effect="non-scaling-stroke"
                                                            stroke="var(--icon-color, #001e00)"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="1.5"
                                                            points="19.38 21 8.38 21 10 14 21 14 19.38 21"
                                                        ></polygon>
                                                        <circle
                                                            cx="14.69"
                                                            cy="17.5"
                                                            r=".5"
                                                            fill="var(--icon-color, #001e00)"
                                                            vector-effect="non-scaling-stroke"
                                                            stroke="var(--icon-color, #001e00)"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></circle>
                                                        <line
                                                            x1="9.43"
                                                            x2="5.99"
                                                            y1="21"
                                                            y2="21"
                                                            fill="none"
                                                            vector-effect="non-scaling-stroke"
                                                            stroke="var(--icon-color, #001e00)"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="1.5"
                                                        ></line>
                                                        <circle
                                                            cx="10.04"
                                                            cy="5.73"
                                                            r="2.73"
                                                            fill="none"
                                                            vector-effect="non-scaling-stroke"
                                                            stroke="var(--icon-color, #001e00)"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="1.5"
                                                        ></circle>
                                                        <path
                                                            fill="none"
                                                            vector-effect="non-scaling-stroke"
                                                            stroke="var(--icon-color, #001e00)"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="1.5"
                                                            d="M3 18.45v-.9a7 7 0 017-7h.09a6.94 6.94 0 013.79 1.12"
                                                        ></path>
                                                    </svg>
                                                    <input
                                                        type="radio"
                                                        className="card-radio1"
                                                        id="radio"
                                                        name="radio"
                                                        onClick={() => {
                                                            chageBcolor(
                                                                "rgb(249, 252, 249)"
                                                            );
                                                            changeBcolor1("");
                                                            chageBborder(
                                                                "green"
                                                            );
                                                            changeBborder1("");
                                                        }}
                                                    />
                                                </div>
                                                <p>Freelancer</p>
                                            </div>
                                            <div
                                                className="card-client"
                                                style={{
                                                    backgroundColor: Acolor1,
                                                    borderColor: Aborder1,
                                                }}
                                            >
                                                <div className="content">
                                                    <svg
                                                        className="card-svgtag"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true"
                                                        data-name="Layer 1"
                                                        viewBox="0 0 24 24"
                                                        role="img"
                                                    >
                                                        <path
                                                            fill="none"
                                                            vector-effect="non-scaling-stroke"
                                                            stroke="var(--icon-color, #001e00)"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="1.5"
                                                            d="M19.28 21h-6.9a1.6 1.6 0 01-1.73-1.5v-4a1.6 1.6 0 011.73-1.5h6.9A1.59 1.59 0 0121 15.5v4a1.66 1.66 0 01-1.72 1.5z"
                                                        ></path>
                                                        <path
                                                            fill="none"
                                                            vector-effect="non-scaling-stroke"
                                                            stroke="var(--icon-color, #001e00)"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="1.5"
                                                            d="M16.9 12h-2.15a.65.65 0 00-.72.66V14h3.59v-1.34a.65.65 0 00-.72-.66z"
                                                        ></path>
                                                        <line
                                                            x1="10.65"
                                                            x2="21"
                                                            y1="17.29"
                                                            y2="17.29"
                                                            fill="none"
                                                            vector-effect="non-scaling-stroke"
                                                            stroke="var(--icon-color, #001e00)"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="1.5"
                                                        ></line>
                                                        <circle
                                                            cx="10.04"
                                                            cy="5.73"
                                                            r="2.73"
                                                            fill="none"
                                                            vector-effect="non-scaling-stroke"
                                                            stroke="var(--icon-color, #001e00)"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="1.5"
                                                        ></circle>
                                                        <path
                                                            fill="none"
                                                            vector-effect="non-scaling-stroke"
                                                            stroke="var(--icon-color, #001e00)"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="1.5"
                                                            d="M3 18.45v-.9a7 7 0 017-7h.09a6.73 6.73 0 011.91.27"
                                                        ></path>
                                                    </svg>
                                                    <input
                                                        type="radio"
                                                        className="card-radio2"
                                                        id="radio"
                                                        name="radio"
                                                        onClick={() => {
                                                            chageBcolor("");
                                                            changeBcolor1(
                                                                "rgb(249, 252, 249)"
                                                            );
                                                            chageBborder("");
                                                            changeBborder1(
                                                                "green"
                                                            );
                                                        }}
                                                    />
                                                </div>
                                                <p>Client</p>
                                            </div>
                                        </div>
                                    </Typography>
                                </CardContent>
                                <button type="button" className="card-btn">
                                    Create account
                                </button>
                            </Card>

                            <Card className="responsive_card">
                                <CardContent>
                                    <Typography>
                                        iOS devloper to join our team
                                    </Typography>
                                    <Typography>
                                        <div className="card2">
                                            <span class="material-symbols-outlined">
                                                avg_pace
                                            </span>
                                            <p>Less than 20 hrs/week</p>
                                            <span class="material-symbols-outlined">
                                                event
                                            </span>
                                            <p>Less than 1 month</p>
                                            <span class="material-symbols-outlined">
                                                settings_account_box
                                            </span>
                                            <p>Expert</p>
                                        </div>
                                    </Typography>
                                    <CardMedia
                                        sx={{ height: 50, width: "18rem" }}
                                        image={line}
                                        title="green iguana"
                                        className="line-img"
                                    />
                                    <div className="multi-btn">
                                        <button type="button">WordPress</button>
                                        <button type="button">MySQL</button>
                                        <button type="button">PHP</button>
                                        <button type="button">
                                            Java script
                                        </button>
                                        <button type="button">CSS3</button>
                                    </div>
                                    <button
                                        type="button"
                                        className="card-btn card-btn1"
                                    >
                                        Post job
                                    </button>
                                </CardContent>
                            </Card>

                            <Card className="responsive_card">
                                <CardContent>
                                    <CardMedia
                                        sx={{
                                            height: 60,
                                            width: 50,
                                            borderRadius: "100px",
                                            margin: "0px 0px 0px 80px",
                                        }}
                                        image={man}
                                    />
                                    <Typography>
                                        <h3 style={{ textAlign: "center" }}>
                                            Marti G.
                                        </h3>
                                        <div className="top-rate">
                                            <span class="material-symbols-outlined">
                                                stars
                                            </span>
                                            <p>Top Rated Plus</p>
                                        </div>
                                    </Typography>
                                    <CardMedia
                                        sx={{
                                            width: 95,
                                            height: 18,
                                            margin: "4% 0% 0% 27%",
                                        }}
                                        image={star}
                                    />
                                </CardContent>
                                <div
                                    className="multi-btn"
                                    style={{
                                        padding: " 0.5rem 0rem 1rem 0rem",
                                    }}
                                >
                                    <button>Mobile app devlopment</button>
                                    <button>MySQL</button>
                                </div>
                            </Card>

                            <Card className="responsive_card">
                                <CardContent
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        alignItems: "center",
                                    }}
                                >
                                    <CardMedia
                                        sx={{
                                            height: 50,
                                            width: 50,
                                            borderRadius: "100px",
                                        }}
                                        image={female}
                                    />
                                    <CardMedia
                                        sx={{ width: "8rem", height: 30 }}
                                        image={line1}
                                    />
                                </CardContent>
                                <button className="card-btn card-btn2">
                                    InProgress
                                </button>

                                <h4 style={{ paddingLeft: "1rem" }}>
                                    Frances submitted work for review
                                </h4>

                                <button type="button" className="card-review">
                                    Review work
                                </button>
                            </Card>
                        </AliceCarousel>
                    </div>
                    <div className="all_work">
                        <h1 style={{ fontFamily: "serif", fontWeight: "500" }}>
                            Up your work game, it's easy
                        </h1>
                        <div className="yourwork">
                            <span class="material-symbols-outlined">
                                edit_square
                            </span>
                            <div className="work_game">
                                <p className="work_game1">No cost to join</p>
                                <p>Register and browse professionals, explore projects, or even book a consultation.</p>
                            </div>
                        </div>
                        <div className="yourwork">
                            <span class="material-symbols-outlined">
                                push_pin
                            </span>
                            <div className="work_game">
                                <p className="work_game1">Post a job and hire top talent</p>
                                <p>
                                    Finding talent doesn’t have to be a chore.
                                    Post a job or we can search for you!
                                </p>
                            </div>
                        </div>
                        <div className="yourwork">
                            <span class="material-symbols-outlined">stars</span>
                            <div className="work_game">
                                <p className="work_game1">Work with the best—without breaking the bank</p>
                                <p>
                                    Upwork makes it affordable to up your work
                                    and take advantage of low transaction rates.
                                </p>
                            </div>
                        </div>
                        <div className="yourwork work_btn">
                            <button type="button" className="btn1">Sign up for free</button>
                            <button type="button" className="hire_btn h_btn">Learn how to hire</button>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="browse">Browse talent by category</p>
                    <p className="bro_look">Looking for work? <a href="@" className="browse_job">Browse jobs</a></p>
                </div>
                <div className="grid-container">
                    <div class="grid-item">
                        <p>Devlopment & IT</p>
                        <div className="category">
                            <div className="respons_grid">
                                <img
                                    src={star1}
                                    className="star1"
                                    alt="Not found"
                                />&nbsp;&nbsp;
                                <p>4.85/5</p>
                            </div>
                            <p className="skill">1853 skills</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <p>Ai Services</p>
                        <div className="category">
                            <div className="respons_grid">
                                <img
                                    src={star1}
                                    className="star1"
                                    alt="Not found"
                                />&nbsp;&nbsp;
                                <p>4.8/5</p>
                            </div>
                            <p className="skill">294 skills</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <p>Design & Creative</p>
                        <div className="category">
                            <div className="respons_grid">
                                <img
                                    src={star1}
                                    className="star1"
                                    alt="Not found"
                                />&nbsp;&nbsp;
                                <p>4.91/5</p>
                            </div>
                            <p className="skill">968 skills</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <p>Sales & Marketing</p>
                        <div className="category">
                            <div className="respons_grid">
                                <img
                                    src={star1}
                                    className="star1"
                                    alt="Not found"
                                />&nbsp;&nbsp;
                                <p>4.85/5</p>
                            </div>
                            <p className="skill">1853 skills</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <p>Writing & Translation</p>
                        <div className="category">
                            <div className="respons_grid">
                                <img
                                    src={star1}
                                    className="star1"
                                    alt="Not found"
                                />&nbsp;&nbsp;
                                <p>4.85/5</p>
                            </div>
                            <p className="skill">1853 skills</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <p>Admin & Customer Support</p>
                        <div className="category">
                            <div className="respons_grid">
                                <img
                                    src={star1}
                                    className="star1"
                                    alt="Not found"
                                />&nbsp;&nbsp;
                                <p>4.85/5</p>
                            </div>
                            <p className="skill">1853 skills</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <p>Finance & Accounting</p>
                        <div className="category">
                            <div className="respons_grid">
                                <img
                                    src={star1}
                                    className="star1"
                                    alt="Not found"
                                />&nbsp;&nbsp;
                                <p>4.85/5</p>
                            </div>
                            <p className="skill">1853 skills</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <p>Engineering & Architecture</p>
                        <div className="category">
                            <div className="respons_grid">
                                <img
                                    src={star1}
                                    className="star1"
                                    alt="Not found"
                                />&nbsp;&nbsp;
                                <p>4.85/5</p>
                            </div>
                            <p className="skill">1853 skills</p>
                        </div>
                    </div>
                </div>
                <img src={enterprise} className="suite_img1" alt="Not Found" />
                <div className="enter_suite">
                    <div className="suite">
                        <p className="suite1">Enterprise Suite</p>

                        <p className="suite_p">
                            This is how
                            <p style={{ color: "#91e6b3" }}>
                                good companies find good company.
                            </p>
                        </p>

                        <p className="work_game1 suite2">
                            Access the top 1% of talent on Upwork, and a full
                            suite of hybrid workforce management tools. This is
                            how innovation works now.
                        </p>

                        <div className="yourwork" style={{display:'fl'}}>
                            <span
                                style={{ color: "#91e6b3" }}
                                class="material-symbols-outlined">design_services</span>&nbsp;&nbsp;
                            <p>Access expert talent to fill your skill gaps</p>
                        </div>
                        <div className="yourwork" style={{display:'flex'}}>
                            <span
                                style={{ color: "#91e6b3" }}
                                class="material-symbols-outlined">business_center</span>&nbsp;&nbsp;
                            <p>Control your workflow: hire, classify and pay your talent</p>
                        </div>
                        <div className="yourwork" style={{display:'flex'}}>
                            <span
                                style={{ color: "#91e6b3" }}
                                class="material-symbols-outlined">headset_mic</span>&nbsp;&nbsp;
                            <p>Partner with Upwork for end-to-end support</p>
                        </div>

                        <button className="suite_btn">Learn more</button>
                    </div>
                    <img src={enterprise} className="suite_img" alt="Not Found" />
                </div>

                <div className="for_client">
                    <h2>For clients</h2>

                    <p className="client_find">Find talent your way</p>
                    <p className="client_work">
                        Work with the largest network of independent
                        professionals and get things done — from quick
                        turnarounds to big transformations.
                    </p>
                    <div className="grid-container grid-cont">
                        <div class="grid-item1">
                            <p className="gitem1">Post a job and hire a pro</p>
                            <div className="up_yourwork">
                                <p className="gitem2">Talent Marketplace<sup>TM</sup><span class="material-symbols-outlined">arrow_forward</span></p>
                            </div>
                        </div>
                        <div class="grid-item1">
                            <p className="gitem1">Browse and buy projects</p>
                            <div className="up_yourwork">
                                <p className="gitem2">Project Catalog<sup>TM</sup><span class="material-symbols-outlined">arrow_forward</span></p>    
                            </div>
                        </div>
                        <div class="grid-item1">
                            <p className="gitem1 git1">Get advice from an indusrty expert</p>
                            <div className="up_yourwork">
                                <p className="gitem3">Consultations<sup>TM</sup><span class="material-symbols-outlined">arrow_forward</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="why why_why">
                    <div className="Why_busi">
                        <p className="why_p">Why businesses turn to Upwork</p>
                        <div className="yourwork why_busii">
                            <div className="why_busi1 ">
                                <span class="material-symbols-outlined">
                                    stars
                                </span>
                            </div>
                            <div className="work_game">
                                <p className="proof">Proof of quality</p>
                                <p>
                                    Check any pro’s work samples, client
                                    reviews, and identity verification.
                                </p>
                            </div>
                        </div>
                        <div className="yourwork why_busii">
                            <div className="why_busi1">
                                <span class="material-symbols-outlined">
                                    monetization_on
                                </span>
                            </div>
                            <div className="work_game">
                                <p className="proof">No cost until you hire</p>
                                <p>
                                    Interview potential fits for your job,
                                    negotiate rates, and only pay for work you
                                    approve.
                                </p>
                            </div>
                        </div>
                        <div className="yourwork">
                            <div className="why_busi1">
                                <span class="material-symbols-outlined">
                                    check_circle
                                </span>
                            </div>
                            <div className="work_game">
                                <p className="proof">Safe and secure</p>
                                <p>
                                    Focus on your work knowing we help protect
                                    your data and privacy. We’re here with 24/7
                                    support if you need it.
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                        src={personheadset}
                        className="person-headset"
                        alt="Not Found"
                    />
                    <div className="skill market-skill">
                        <p className="market">We're the world's work marketplace</p>
                        <div className="yourwork why_busii mplace">
                            <img
                                src={wstar}
                                className="wstar-img"
                                alt="Not Found"
                            />
                            <div className="proof1">
                                <p className="proof">4.9/5</p>
                                <p>Clients rate professionals on Upwork</p>
                            </div>
                        </div>
                        <div className="yourwork why_busii mplace maplace1">
                            <img
                                src={award}
                                className="award-img"
                                alt="Not Found"
                            />
                            <div className="proof1">
                                <p className="proof">Award winner</p>
                                <p>G2’s 2021 Best Software Awards</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sign_to"><p className="sign_to1">Sign up to hire talent for any job</p><button type="button" style={{fontSize:"3rem",backgroundColor: 'green',border:'none',padding:'2rem 7rem',color:'white',borderRadius:'10rem',marginTop:'5rem'}}>Find talent</button></div>

                <div className="find_great why_why">
                    <img
                        src={find_work}
                        alt="Not Found"
                        className="findwork_img"
                    />
                    <div className="for_talent">
                        <h2>For Talent</h2>
                        <p className="why_p why_busi1 fgreat">Find great work</p>
                        <p className="meet_client">
                            Meet clients you’re excited to work with and take
                            your career or business to new heights.
                        </p>
                        <hr></hr>
                        <div className="card-main find_p">
                            <p>Find opportunities for every stage of your freelance career</p>
                            <p>Control when, where, and how you work</p>
                            <p>Explore different ways to earn</p>
                        </div>
                        <button className="suite_btn find_btn">
                            Find opportunities
                        </button>
                    </div>
                </div>
                <p className="why_p trust_lead" style={{ margin: "1em 0em 0.5em 0em" }}>Trusted by leading brands and startups</p>

                <div className="why">
                    <button className="swip_btn" onClick={handprev}>
                        <span class="material-symbols-outlined">arrow_back</span>
                    </button>
                    <Swiper

                        breakpoints={{
                            425: {width: 950,slidesPerView: 1},
                            1440:{width: 1200,slidesPerView: 2}
                        }}
                        slidesPerView={2}
                        onSwiper={(s) => (swiper = s)}
                        navigation={{prevEl: ".swip_btn",nextEl: ".swip_btn1",}}>
                        <SwiperSlide>
                            <Card sx={{backgroundColor:"#13544E",color: "white",borderRadius:"0.6rem"}} className="trust_card">
                                <CardContent>
                                    <img src={nasb} alt="Not Found" />
                                    <p className="card_ns">
                                        “Upwork enables us to differentiate
                                        ourselves from our competitors and
                                        produce content at a higher caliber.”
                                    </p>
                                    <p
                                        style={{ margin: "1em 0em 4em 0em" }}
                                        className="josh"
                                    >
                                        Josh Machiz, Chief Digital Officer
                                    </p>
                                    <p className="josh">Results</p>
                                    <hr
                                        style={{
                                            border: "0.5px solid #D5E0D5",
                                            margin: "1em 0em",
                                        }}
                                    ></hr>
                                    <div className="why card_why">
                                        <div>
                                            <p className="card_ns card_ns1">
                                                Emmy Winning
                                            </p>
                                            <p className="josh face_pro">
                                                Facebook Watch program
                                            </p>
                                        </div>
                                        <div>
                                            <p className="card_ns card_ns1">Millions</p>
                                            <p className="josh face_pro">
                                                of impressions generated per
                                                client per IPO
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card
                                sx={{backgroundColor:"#BC511B",padding: '0.8rem',color: "white",borderRadius:"0.6rem"}} className="trust_card"
                            >
                                <CardContent>
                                    <img src={microsoft} alt="Not Found" />
                                    <p className="card_ns">
                                        “One of the advantages of utilizing
                                        freelancers is finding talent with
                                        different skills quickly as our needs
                                        change.”
                                    </p>
                                    <p
                                        style={{ margin: "1em 0em 5em 0em" }}
                                        className="josh">
                                        Carol Taylor, Director of Content
                                        Experience
                                    </p>
                                    <p className="josh">Results</p>
                                    <hr
                                        style={{
                                            border: "0.5px solid #D5E0D5",
                                            margin: "0.85em 0em",
                                        }}
                                    ></hr>
                                    <div className="why card_why">
                                        <div>
                                            <p className="card_ns card_ns1">
                                                50% Faster
                                            </p>
                                            <p className="josh face_pro">
                                                launch of projects
                                            </p>
                                        </div>
                                        <div>
                                            <p className="card_ns card_ns1">10,000</p>
                                            <p className="josh face_pro">
                                                projects completed
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="why card_female">
                                <img
                                    src={female1}
                                    alt="Not Fond"
                                    className="female1_img"
                                />
                                <div className="andall_img">
                                    <h2 style={{ color: "white" }} cl>And many more</h2>
                                    <img src={nasb} alt="Not Found" className="all_img"/>
                                    <img src={auto} alt="Not Found" />
                                    <img src={bissel} alt="Not Found" />
                                    <img src={coty} alt="Not Found" />
                                    <img src={ran} alt="Not Found" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <button className="swip_btn1 swip_btn" onClick={handnext}>
                    <span class="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>

                <div className="ukraine browse">
                    <div>
                        <p>We support Ukraine</p>
                        <p className="ukrain_taking">We are taking action to help our freelancers, our clients, and the people of Ukraine—and so can you.</p>
                        <button type="button" className="hire_btn" style={{ padding: "0.5rem 2rem" }}>Learn more</button>
                    </div>
                    <img src={ukrain} className="ukrain_img" alt="Not Found" />
                </div>

                <div className="top_s">
                    <div className="top_skill">
                        {top_data.map((d2) => (
                            <div>
                                <Link to="/">{d2.maindata}</Link>
                            </div>
                        ))}  
                    </div>
                    <div className="genrate">
                        {topskill_data.map((d) => (
                            <div>
                                <Link to="/ai-specialists">{d.name}</Link>
                            </div>
                        ))}  
                    </div>
                    <div className="genrate">
                        {topskill_data1.map((d1) => (
                            <div>
                                <Link to="/">{d1.name}</Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="top_s1">
                    <div className="top_skill">
                        {top_data.map((d2) => (
                            <div>
                                <Link to="/">{d2.maindata}</Link>
                            </div>
                        ))}  
                    </div>
                    <div className="top">
                        <div className="genrate">
                            {topskill_data.map((d) => (
                                <div>
                                    <Link to="/ai-specialists">{d.name}</Link>
                                </div>
                            ))}  
                        </div>
                        <div className="genrate">
                            {topskill_data1.map((d1) => (
                                <div>
                                    <Link to="/">{d1.name}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home1;
