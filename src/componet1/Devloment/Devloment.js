import React, { useState} from "react";
import "../Devloment/Devlopment.css";
import dev_it from "../../assets/image/home-page/dev_it.png";
import micro from "../../assets/image/home-page/microsoft.png";
import air from "../../assets/image/home-page/airbnb.png";
import auto from "../../assets/image/home-page/auto.png";
import biseel from "../../assets/image/home-page/bissell.png";
import nasb from "../../assets/image/home-page/nasb.png";
import star1 from "../../assets/image/home-page/star1.png";
import star from "../../assets/image/home-page/star.png"
import a1 from "../../assets/image/devlopment-devloper-img/1.jpeg";
import a2 from "../../assets/image/devlopment-devloper-img/2.jpeg";
import a3 from "../../assets/image/devlopment-devloper-img/3.jpeg";
import a4 from "../../assets/image/devlopment-devloper-img/4.jpeg";
import a5 from "../../assets/image/devlopment-devloper-img/5.jpeg";
import a6 from "../../assets/image/devlopment-devloper-img/6.jpeg";
import a7 from "../../assets/image/devlopment-devloper-img/7.jpeg";
import a8 from "../../assets/image/devlopment-devloper-img/8.jpeg";
import a9 from "../../assets/image/devlopment-devloper-img/9.jpeg";
import a10 from "../../assets/image/devlopment-devloper-img/10.jpeg";
import a11 from "../../assets/image/devlopment-devloper-img/11.jpeg";
import a12 from "../../assets/image/devlopment-devloper-img/12.jpeg";

import mdevlop from "../../assets/image/devlopment-devloper-img/mdevlop.png"
import mdevlop1 from "../../assets/image/devlopment-devloper-img/mdevlop1.jpeg"
import mdevlop2 from "../../assets/image/devlopment-devloper-img/mdevlop2.png"
import mdevlop3 from "../../assets/image/devlopment-devloper-img/mdevlop3.png"
import mdevlop4 from "../../assets/image/devlopment-devloper-img/mdevlop4.jpeg"
import mdevlop5 from "../../assets/image/devlopment-devloper-img/mdevlop5.jpeg"

import work from "../../assets/image/devlopment-devloper-img/work.jpg"
import phone from "../../assets/image/devlopment-devloper-img/phone.jpg"
import america_work from "../../assets/image/devlopment-devloper-img/america_work.jpeg"
import { Link, useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '../Devloment/VerticalTabs' 
import { a11yProps } from '../Devloment/vertical'
import { Avatar, Stack } from "@mui/material";

function Devloment() {
    let Hire_navigat = useNavigate()

    let devlopers = [
        {
            type: "Java Devlopers",
            rate: "4.8/5 average rating",
            render1: <Avatar alt="Not Found" src={a1}/>,
            render2: <Avatar alt="Not Found" src={a2}/>,
            render3: <Avatar alt="Not Found" src={a3}/>,
        },
        {
            type: "PHP Devlopers",
            rate: "4.8/5 average rating",
            render1: <Avatar alt="Not Found" src={a4}/>,
            render2: <Avatar alt="Not Found" src={a5}/>,
            render3: <Avatar alt="Not Found" src={a6}/>
        },
        {
            type: "JavaScript Devlopers",
            rate: "4.8/5 average rating",
            render1: <Avatar alt="Not Found" src={a7}/>,
            render2: <Avatar alt="Not Found" src={a8}/>,
            render3: <Avatar alt="Not Found" src={a9}/>
        },
        {
            type: "iOS Devlopers",
            rate: "4.7/5 average rating",
            render1: <Avatar alt="Not Found" src={a10}/>,
            render2: <Avatar alt="Not Found" src={a11}/>,
            render3: <Avatar alt="Not Found" src={a12}/>
        },
        {
            type: "QA Engineers",
            rate: "4.9/5 average rating",
            render1: <Avatar alt="Not Found" src={a5}/>,
            render2: <Avatar alt="Not Found" src={a8}/>,
            render3: <Avatar alt="Not Found" src={a2}/>
        },
        {
            type: "Data Scientists",
            rate: "4.9/5 average rating",
            render1: <Avatar alt="Not Found" src={a3}/>,
            render2: <Avatar alt="Not Found" src={a7}/>,
            render3: <Avatar alt="Not Found" src={a9}/>
        },
        {
            type: "Infrastructure Engineers",
            rate: "4.9/5 average rating",
            render1: <Avatar alt="Not Found" src={a10}/>,
            render2: <Avatar alt="Not Found" src={a6}/>,
            render3: <Avatar alt="Not Found" src={a4}/>
        },
        {
            type: 'SQL Devlopers',
            rate: "4.8/5 average rating",
            render1: <Avatar alt="Not Found" src={a12}/>,
            render2: <Avatar alt="Not Found" src={a1}/>,
            render3: <Avatar alt="Not Found" src={a5}/>
        },
        {
            type: "Generative AI",
            avtar: { star1 },
            rate: "4.8/5 average rating",
            render1: <Avatar alt="Not Found" src={a7}/>,
            render2: <Avatar alt="Not Found" src={a3}/>,
            render3: <Avatar alt="Not Found" src={a11}/>
        },
    ];

    let cross_fun = [
        {fun_name: '.NET devloper'},
        {fun_name: 'Android Developers'},
        {fun_name: 'API Developers'},
        {fun_name: 'Back-End Developers'}
    ]
    let cross_fun1 = [
        {fun_name1: 'CMS Developers'},
        {fun_name1: 'Coders'},
        {fun_name1: 'Data Scientists'},
        {fun_name1: 'E-commerce Developers'}
    ]
    let cross_fun2 = [
        {fun_name2: 'Enterprise Software Developers'},
        {fun_name2: 'Full Stack Developers'},
        {fun_name2: 'Game Developers'},
        {fun_name2: 'Golang Developers'}
    ]
    let cross_fun3 = [
        {fun_name3: 'iOS Developers'},
        {fun_name3: 'Java Developers'},
        {fun_name3: 'Junior Developer'},
        {fun_name3: 'Mobile App Developers'}
    ]

    let devlop = [
        {project: 'AI & Machine Learning'},
        {project: 'Blockchain, NFT & Cryptocurrency'},
        {project: 'Chatbots'},
        {project: 'Databases'}
    ]
    let devlop1 = [
        {project1: 'Desktop Apps'},
        {project1: 'Development'},
        {project1: 'Ecommerce Development'},
        {project1: 'Game Development'}
    ]
    let devlop2 = [
        {project2: 'Generative AI'},
        {project2: 'Machine Learning'},
        {project2: 'Mobile Apps'},
        {project2: 'Online Coding Lessons'}
    ]
    let devlop3 = [
        {project3: 'Other Development & IT'},
        {project3: 'Web Programming'},
        {project3: 'Website Builders & CMS'},
        {project3: 'WordPress'}
    ]

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

    const [lead, setlead] = useState(false);
    const leadbutton = () => {
        setlead(!lead);
    };
    const [lead1, setlead1] = useState(false);
    const leadbutton1 = () => {
        setlead1(!lead1);
    };
    const [lead2, setlead2] = useState(false);
    const leadbutton2 = () => {
        setlead2(!lead2);
    };

    // block type tab
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    // map in box diffrent diffrent page open
    const changePage = (data) => {
        console.log("data" , data);
        if(data.type === "Java Devlopers") {
            Hire_navigat("/java-devloper")
        }
        else if(data.type === "PHP Devlopers") {
            Hire_navigat("/php-devloper")
        }
        else if(data.type === "JavaScript Devlopers") {
            Hire_navigat("/javascript-devloper")
        }
        else if(data.type === "iOS Devlopers") {
            Hire_navigat("/ios-devloper")
        }
        else if(data.type === "QA Engineers") {
            Hire_navigat("/qa-engineers")
        }
        else if(data.type === "Data Scientists") {
            Hire_navigat("")
        }
    }
    return (
        <>
            <div className="devlop1">
                <div className="dev_main p-8 -mt-60">
                    <div className="rounded-lg flex justify-between bg-customGreen text-white p-4">
                        <div>
                            <p className="text-6xl w-11/12 font-serif">Dev and IT experts to scale your org</p>
                            <p className="w-2/3 text-lg mt-4 mb-10">Hire independent professionals to shorten development cycles, bury backlogs, and drive product growth.</p>
                            <button type="button" onClick={() => Hire_navigat("/Signup")} className="gre_button py-2.5 px-8 border-0 rounded-full hover:bg-hbtn bg-white text-black">Get started</button>
                        </div>
                        <div>
                            <img src={dev_it} className="dev_img w-61 h-31 rounded-lg" alt="Not Found"/>
                        </div>
                    </div>

                    <div className="md px-40">
                        <div className="flex items-center pt-20 pb-4 space-x-20">
                            <p className="text-xl text-slate-500">Trusted by</p>
                            <img src={micro} className="w-28 h-7" alt="Not Found"/>
                            <img src={air} className="w-28 h-9" alt="Not Found"/>
                            <img src={auto} className="w-44 h-9" alt="Not Found"/>
                            <img src={biseel} className="w-28 h-16" alt="Not Found"/>
                            <img src={nasb} className="w-28 h-9" alt="Not Found"/>
                        </div>
                        <hr></hr>

                        <p className="font-serif text-4xl mt-28 gre_trust">Trusted remote development and IT experts</p>
                        <div className="gre_be flex space-x-16 mt-7 mb-7">
                            <div className="gre_be1">
                                <div className="flex items-center">
                                    <img src={star1} className="w-6 h-6 re_star1" alt="not found"/>
                                    <p className="text-3xl ml-2 gre1">4.91/5</p>
                                </div>
                                <p className="w-14.8 text-fcolor gre2">Average rating for work with tech talent.</p>
                            </div>
                            <div>
                                <p className="text-3xl gre1">211K+ contracts</p>
                                <p className="w-64 text-fcolor gre2">Involving development and IT work in the past year.</p>
                            </div>
                            <div>
                                <p className="text-3xl gre1">1,665 skills</p>
                                <p className="text-fcolor gre2">Represented by talent on Upwork.</p>
                            </div>
                        </div>

                        <div className="add_swip grid gap-x-2 gap-y-9 grid-cols-4">
                            {devlopers.map((j1) => (
                                <div onClick={() => changePage(j1)} className="bg-devlop w-64 rounded-lg p-4 hover:bg-stone-100 cursor-pointer">
                                    <p className="text-xl">{j1.type}</p>
                                    <div className="flex items-center mt-6 mb-3">
                                        <img src={star1} className="w-4 h-4" alt="Not Found"/>
                                        &nbsp;<p>{j1.rate}</p>
                                    </div>
                                    <div className="flex w-10 h-10">
                                        <Stack direction="row" spacing={-2}>
                                            {j1.render1}
                                            {j1.render2}
                                            {j1.render3}
                                        </Stack>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* responsive width 425 in use */}
                        <Swiper slidesPerView={2} className="add_swip1">
                            <div className="flex">
                                {devlopers.map((j1, index) => (
                                    <SwiperSlide>
                                        <div className="bg-devlop w-99 rounded-lg p-10 hover:bg-stone-100 cursor-pointer">
                                            <p className="text-5xl">{j1.type}</p>
                                            <div className="flex items-center mt-6 mb-3">
                                                <img src={star1} className="w-8 h-8" alt="Not Found"/>
                                                &nbsp;<p className="text-4xl">{j1.rate}</p>
                                            </div>
                                            <div className="flex w-24 h-24 mt-10">
                                            <Stack direction="row" spacing={-2}>
                                                {j1.render1}
                                                {j1.render2}
                                                {j1.render3}
                                            </Stack>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </div>
                        </Swiper>

                        <div className="flex space-x-96 mt-5 re_look">
                            <p>Looking for something else?</p>
                            <a href="@" className="text-blue-700 hover:text-blue-800"><span class="material-symbols-outlined">arrow_downward</span>See more skills</a>
                        </div>
                        <p className="mt-24 text-4xl font-serif re_dev">Development and IT projects for your most pressing work</p>
                        <p className="text-xl text-fcolor re_look">A mobile presence is a necessity for any business. Get a custom mobile app experience that meets your needs.</p>
                    
                        <div className="cross">       
                        <Box sx={{bgcolor: '#f2f7f2', borderRadius: '0.6rem', display: 'flex', height: 385,margin:'3rem 0rem 10rem 0rem'}}>
                            <Tabs
                              orientation="vertical"
                              value={value}
                              onChange={handleChange}
                              aria-label="Vertical tabs example"
                            >
                              <Tab label="Mobile App Devlop" {...a11yProps(0)} />
                              <Tab label="Shopify Development" {...a11yProps(1)} />
                              <Tab label="WordPress Development" {...a11yProps(2)} />
                              <Tab label="Data Visualization" {...a11yProps(3)} />
                              <Tab label="Machine Learning" {...a11yProps(4)} />
                              <Tab label="Cybersecurity & Data Protection" {...a11yProps(5)} />
                              <button type="button" className="text-white bg-green-700 px-8 mt-80 ml-16 absolute rounded-full pt-1 pb-2 hover:bg-green-600">Browse Projects</button>
                            </Tabs>

                            {/* Using the TabPanel component */}
                            <TabPanel value={value} index={0}>
                                <img src={mdevlop} className="tab_pan h-96 w-61 rounded-tr-lg rounded-br-lg" alt="Not Found"/>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <img src={mdevlop1} className="tab_pan h-96 w-61 rounded-tr-lg rounded-br-lg" alt="Not Found"/>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <img src={mdevlop2} className="tab_pan h-96 w-61 rounded-tr-lg rounded-br-lg" alt="Not Found"/>
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <img src={mdevlop3} className="tab_pan h-96 w-61 rounded-tr-lg rounded-br-lg" alt="Not Found"/>
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                <img src={mdevlop4} className="tab_pan h-96 w-61 rounded-tr-lg rounded-br-lg" alt="Not Found"/>
                            </TabPanel>
                            <TabPanel value={value} index={5}>
                                <img src={mdevlop5} className="tab_pan h-96 w-61 rounded-tr-lg rounded-br-lg" alt="Not Found"/>
                            </TabPanel>
                        </Box>
                        </div> 
                        {/* responsive width 425 in use */}
                        <div className="bg-devlop mt-10 p-10 add_swip1">
                        <div className="flex justify-between">
                            <p className="text-5xl font-semibold">Mobile App devlopment</p>
                            <div className="readd items-center flex text-blue-700 hover:text-blue-800 cursor-pointer"  onClick={leadbutton2}>
                                {lead2 ? <span class="material-symbols-outlined">expand_less</span> : <span class="material-symbols-outlined">expand_more</span>}
                            </div>
                        </div>
                        {lead2 ? (
                            <>
                                <div className="p-5 leading-relaxed text-5xl">
                                    <p>| Mobile App Devlop</p>
                                    <p>Shopify Development</p>
                                    <p>WordPress Development</p>
                                    <p>Data Visualization</p>
                                    <p>Machine Learning</p>
                                    <p>Cybersecurity & Data Protection</p>
                                </div>
                            </>
                        ) : null}
                        <img src={mdevlop} className="h-96 w-99 rounded-tr-lg rounded-br-lg" alt="Not Found"/>
                        <button type="button" className="text-white text-5xl bg-green-700 px-14 mt-10 rounded-full pt-3 pb-4 hover:bg-green-600">Browse Projects</button>
                        </div>

                        <div className="flex bg-teal-800 p-7 mt-36 mb-7 justify-between rounded-lg">
                            <div className="text-white text-xl">
                                <p className="fo_enter">For Enterprise</p>
                                <p className="text-6xl w-35 mt-5 how_work re_enter">This is how <g className="text-green-300 font-serif">IT Experts</g> work now</p>
                                <p className="my-5 pr-24 fo_enter re_enter">Build an agile workforce that moves faster than the pace of business with Enterprise Suite. </p>
                                <button type="button" className="bg-white gre_button re_enter text-black text-base px-6 py-2 rounded-full">Find out how</button>
                            </div>
                            <div className="work">
                                <img src={work} className="rounded-lg work"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="devlop1 phone bg-devlop px-10 py-28">
                <div className="flex justify-between">
                    <div className="pt-32 pl-52">
                        <p className="text-4xl font-serif">Dev expertise at your fingertips</p>
                        <p className="text-fcolor text-xl w-35">An iOS/Android developer saved his client money, time, and stress</p>
                        <p className="text-fcolor w-35 my-2">"Igor has great knowledge in mobile application development [and] always suggests a better and cost-effective solution. Superfast turnaround. Thank you Igor!"</p>
                        <div className="flex space-x-24">
                            <div className="flex items-center">
                                <img src={star} className="w-24 h-4"/>
                                <p>5/5</p>
                            </div>
                            <p>Budget: $14,520</p>
                        </div>
                        <div className="flex items-center space-x-2 mt-5">
                            <p>Skills: </p>
                            <button type="button" className="bg-white px-4 py-2 rounded-full">Sketch</button>
                            <button type="button" className="bg-white px-4 py-2 rounded-full">Swift</button>
                            <button type="button" className="bg-white px-4 py-2 rounded-full">iOS Development</button>
                            <button type="button" className="bg-white px-4 py-2 rounded-full">Cocoa</button>
                        </div>
                    </div>
                    <div>
                        <img src={phone} className="w-35 rounded-lg" />    
                    </div>
                </div>
                <div className="flex justify-between pr-48 mt-24">
                    <div>
                        <img src={america_work} className="w-35 rounded-lg"/>
                    </div>
                    <div className="pt-32">
                        <p className="text-4xl font-serif w-35">PGA of America Tests New Ideas With On-Demand Devs</p>
                        <p className="text-fcolor w-35 my-5">Upwork makes it easy for PGA of America to find devs with in-demand skills such as AWS, CSS, and ReactJS. When the team has a new idea, independent devs test proof of concept while the team remains focused on higher-value projects. “When employees aren’t limited by internal skill sets and resources, they can leverage their time to create bigger improvements and change,” said Head of Technology Kevin Scott.</p>
                        <div className="flex justify-between">
                            <p><span className="text-xs" class="material-symbols-outlined">rocket_launch</span> 3x faster project completion times</p>
                            <button type="button" className="text-white bg-green-700 px-6 rounded-full pt-1 pb-2 hover:bg-green-600">Read case study</button>
                        </div>
                    </div>
                </div>
            </div> 
            {/* responsive width 768 in use  */}
            <div className="devlop1 bg-devlop py-16 add_swip1 add_swip2">
                <div className="p-7">
                    <p className="text-4xl font-serif mt-5 re_dev">Dev expertise at your fingertips</p>
                    <img src={phone} className="w-99 h-45 mt-3" />
                    <p className="text-fcolor text-3xl re_dev">An iOS/Android developer saved his client money, time, and stress</p>
                    <p className="text-fcolor text-2xl my-2 re_igor">"Igor has great knowledge in mobile application development [and] always suggests a better and cost-effective solution. Superfast turnaround. Thank you Igor!"</p>
                
                    <div className="flex space-x-24">
                        <div className="flex items-center">
                            <img src={star} className="w-24 h-4 re_star"/>
                            <p className="re_look">5/5</p>
                        </div>
                        <p className="re_look">Budget: $14,520</p>
                    </div>
                    <div className="flex items-center space-x-2 mt-5 re_dev_btn">
                        <p className="re_look">Skills: </p>
                        <button type="button" className="bg-white px-4 py-2 rounded-full">Sketch</button>
                        <button type="button" className="bg-white px-4 py-2 rounded-full">Swift</button>
                        <button type="button" className="bg-white px-4 py-2 rounded-full">iOS Development</button>
                        <button type="button" className="bg-white px-4 py-2 rounded-full">Cocoa</button>
                    </div>

                    <p className="text-4xl font-serif pt-24 re_dev">PGA of America Tests New Ideas With On-Demand Devs</p>
                    <img src={america_work} className="w-99 h-45 mt-3"/>
                    <p className="text-fcolor mt-5 text-3xl re_igor">Upwork makes it easy for PGA of America to find devs with in-demand skills such as AWS, CSS, and ReactJS. When the team has a new idea, independent devs test proof of concept while the team remains focused on higher-value projects. “When employees aren’t limited by internal skill sets and resources, they can leverage their time to create bigger improvements and change,” said Head of Technology Kevin Scott.</p>
                    
                    <div className="flex justify-between mt-5">
                        <p className="text-2xl re_look"><span className="text-2xl" class="material-symbols-outlined">rocket_launch</span> 3x faster project completion times</p>
                        <button type="button" className="text-white re_ready text-2xl bg-green-700 px-6 rounded-full pt-1 pb-2 hover:bg-green-600">Read case study</button>
                    </div>
                </div>
            </div>

            <div className="devlop1 md1 px-44 py-24"> 
                <div className="p-7 bg-devlop flex justify-between rounded-lg gre_be">
                    <p className="text-4xl font-serif w-80 re_dev">Frequently asked questions</p>
                    <div className=" w-35">
                        {/* part 1 */}
                        <p className="text-2xl font-semibold re_look1">What is the first step to hiring development and IT talent and determining the project cost?</p>
                        <p className="py-2 text-fcolor font-semibold re_look1">One of the first steps in hiring any talent is to determine which skills you need for your project. Upwork matches you with proven remote talent who can help you with all your development and IT needs,</p>
                        {read ? (
                            <>
                                <div className="text-fcolor font-semibold re_look">
                                    <ul className="px-5 py-3">
                                        <li>1. eCommerce services</li>
                                        <li>2. Web development</li>
                                        <li>3. VR development</li>
                                        <li>4. CMS development</li>
                                        <li>5. Salesforce development</li>
                                    </ul>
                                    <p>The cost of your project depends largely on your scope of work and the specific skills needed to complete your project. </p>
                                    <p className="pt-10">A development and IT services project includes the following:</p>
                                    <ul className="px-5 pt-3 pb-10 space-y-2">
                                        <li>1. Deliverables: What do you need done? Perhaps you need a professional to develop a WordPress website or create a mobile app.</li>
                                        <li>2. Skills: Identify the tech and IT talent needed to complete the project (e.g., security specialist or AR/VR developer).</li>
                                        <li>3. Project Length: Your job post should indicate whether this is a smaller or larger project.</li>
                                        <li>4. Budget: Set a budget and note your preference for either an hourly rate or fixed-price contract.</li>
                                    </ul>
                                </div>
                            </>
                        ) : null}
                        <div className="items-center flex text-blue re_look hover:text-blue-800 cursor-pointer"  onClick={togglebutton}>
                            {read ? 'View Less' : 'Read More'}
                            {read ? <span class="material-symbols-outlined">expand_less</span> : <span class="material-symbols-outlined">expand_more</span>}
                        </div>
                        <hr className="my-3"></hr>
                        
                        {/* part 2 */}
                        <p className="text-2xl font-semibold re_look1">What are the various ways I can connect with development and IT talent through Upwork?</p>
                        <p className="py-2 text-fcolor font-semibold re_look1">Upwork gives you the flexibility you need to find the right talent for your development and IT projects.</p>
                        {read1 ? (
                            <>
                                <div className="text-fcolor font-semibold re_look">
                                    <ul className="px-5 pt-3 pb-10 space-y-2">
                                        <li>1. Talent Marketplace: Find and source independent professionals for your development and IT projects directly from Upwork’s Talent Marketplace.</li>
                                        <li>2. Project Catalog: Project Catalog is a new way to quickly get started and expand your capabilities through Upwork. From WordPress development to cybersecurity and data protection services, projects are predefined for you, so you can get to know talent through a clearly defined project within their expertise, then easily scale up and down as needed.</li>
                                        <li>3. Talent Scout: With Talent Scout, our technical recruiters match you with the top 1% of tech talent on Upwork. Hire in less time, with less effort—and with a lot more confidence.</li>
                                        <li>4. Specialized Teams: Upwork isn’t just for independent contractors; you can also find independent agencies that can help you fill your development and IT talent gaps with their own professional teams.</li>
                                    </ul>
                                </div>
                            </>
                        ) : null}
                        <div className="items-center flex text-blue re_look hover:text-blue-800 cursor-pointer"  onClick={togglebutton1}>
                            {read1 ? 'View Less' : 'Read More'}
                            {read1 ? <span class="material-symbols-outlined">expand_less</span> : <span class="material-symbols-outlined">expand_more</span>}
                        </div>
                        <hr className="my-3"></hr>
                        
                        {/* part 3 */}
                        <p className="text-2xl font-semibold re_look1">Why should I use Upwork to find talent for development and IT services?</p>
                        <p className="py-2 text-fcolor font-semibold re_look1">When it comes to development and IT, you may need a multidisciplinary team to handle the various components of your project. Examples of professionals you might need for development and IT projects include:</p>
                        {read2 ? (
                            <>
                                <div className="text-fcolor font-semibold re_look1">
                                    <ul className="px-5 py-3">
                                        <li>1. QA engineer for automated testing</li>
                                        <li>2. DevOps engineer to facilitate code releases</li>
                                        <li>3. Mobile app developer to build an iOS or Android app</li>
                                        <li>4. Salesforce developer to create customized workflows</li>
                                    </ul>
                                    <p className="pt-10">Upwork is the leading online talent solution for companies looking to scale their teams and get work done. Key advantages for businesses looking to source talent for their development and IT projects through Upwork include:</p>
                                    <ul className="px-5 pt-3 pb-10 space-y-2">
                                        <li>1. On-Demand Talent: Access to a global talent pool of independent professionals and agencies.</li>
                                        <li>2. Transparency: Simplified vetting thanks to freelancer reviews, work history, testimonials, and portfolios.</li>
                                        <li>3. Technology: AI-assisted talent matching to help you find the right talent for your needs.</li>
                                        <li>4. Flexibility: Hire individuals or agencies to complete any size of project.</li>
                                        <li>5. Simplicity: Built-in tools that streamline the onboarding and collaboration with remote teams.</li>
                                    </ul>
                                </div>
                            </>
                        ) : null}
                        <div className="items-center flex text-blue re_look hover:text-blue-800 cursor-pointer"  onClick={togglebutton2}>
                            {read2 ? 'View Less' : 'Read More'}
                            {read2 ? <span class="material-symbols-outlined">expand_less</span> : <span class="material-symbols-outlined">expand_more</span>}
                        </div>
                        <hr className="my-3"></hr>
                        
                        <p className="font-medium">Still have questions? <a href="@" className="text-blue-700 hover:text-blue underline">Visit our Help Center </a></p>
                    </div>
                </div>

                <div className="pt-24">
                    <p className="text-4xl font-serif find_free">Find freelancers with the dev and IT skills you need</p>
                    <p className="py-6 text-2xl cross_name">Development & IT Roles</p>
                    <a href="@" className="text-fcolor cross1 hover:text-blue-700 hover:underline">Data Analysts</a>

                    <p className="pt-8 text-2xl cross_name">Cross-functional Roles</p>
                    <div className="cross flex justify-between mt-5 leading-9">
                        <div>
                            {cross_fun.map((f1) => (
                                <Link className="block text-fcolor hover:text-blue-700 hover:underline">{f1.fun_name}</Link>
                            ))}
                        </div>
                        <div>
                            {cross_fun1.map((f2) => (
                                <Link className="block text-fcolor hover:text-blue-700 hover:underline">{f2.fun_name1}</Link>
                            ))}
                        </div>
                        <div>
                            {cross_fun2.map((f3) => (
                                <Link className="block text-fcolor hover:text-blue-700 hover:underline">{f3.fun_name2}</Link>
                            ))}
                        </div>
                        <div>
                            {cross_fun3.map((f4) => (
                                <Link className="block text-fcolor hover:text-blue-700 hover:underline">{f4.fun_name3}</Link>
                            ))}
                        </div>
                    </div>
                    {/* responsive 425 in use */}
                    <div className="add_swip1">
                        <div>
                            {cross_fun.map((f1) => (
                                <Link className="block text-fcolor text-5xl leading-snug hover:text-blue-700 hover:underline">{f1.fun_name}</Link>
                            ))}
                        </div>
                        {lead ? (
                            <>
                                <div>
                                    {cross_fun1.map((f2) => (
                                        <Link className="block text-fcolor text-5xl leading-snug hover:text-blue-700 hover:underline">{f2.fun_name1}</Link>
                                    ))}
                                </div>
                                <div>
                                    {cross_fun2.map((f3) => (
                                        <Link className="block text-fcolor text-5xl leading-snug hover:text-blue-700 hover:underline">{f3.fun_name2}</Link>
                                    ))}
                                </div>
                                <div>
                                    {cross_fun3.map((f4) => (
                                        <Link className="block text-fcolor text-5xl leading-snug hover:text-blue-700 hover:underline">{f4.fun_name3}</Link>
                                    ))}
                                </div>
                            </>
                        ) : null}
                        <div onClick={leadbutton} className="mt-10">
                            <a className="text-5xl underline hover:text-blue text-blue">{lead ? 'View Less' : 'See More'}</a>
                        </div>
                    </div>

                    <p className="pt-8 text-2xl cross_name">Development & IT Projects</p>
                    <div className=" cross flex justify-between mt-5 leading-9">
                        <div>
                            {devlop.map((d) => (
                                <Link className="block text-fcolor hover:text-blue-700 hover:underline">{d.project}</Link>
                            ))}
                        </div>
                        <div>
                            {devlop1.map((d1) => (
                                <Link className="block text-fcolor hover:text-blue-700 hover:underline">{d1.project1}</Link>
                            ))}
                        </div>
                        <div>
                            {devlop2.map((d2) => (
                                <Link className="block text-fcolor hover:text-blue-700 hover:underline">{d2.project2}</Link>
                            ))}
                        </div>
                        <div>
                            {devlop3.map((d3) => (
                                <Link className="block text-fcolor hover:text-blue-700 hover:underline">{d3.project3}</Link>
                            ))}
                        </div>
                    </div>
                    {/* responsive 425 in use */}
                    <div className="add_swip1">
                    <div>
                        {devlop.map((d) => (
                            <Link className="block text-fcolor text-5xl leading-snug hover:text-blue-700 hover:underline">{d.project}</Link>
                        ))}
                    </div>
                        {lead1 ? (
                            <>
                                <div>
                                    {devlop1.map((d1) => (
                                        <Link className="block text-fcolor text-5xl leading-snug hover:text-blue-700 hover:underline">{d1.project1}</Link>
                                    ))}
                                </div>
                                <div>
                                    {devlop2.map((d2) => (
                                        <Link className="block text-fcolor text-5xl leading-snug hover:text-blue-700 hover:underline">{d2.project2}</Link>
                                    ))}
                                </div>
                                <div>
                                    {devlop3.map((d3) => (
                                        <Link className="block text-fcolor text-5xl leading-snug hover:text-blue-700 hover:underline">{d3.project3}</Link>
                                    ))}
                                </div>
                            </>
                        ) : null}
                        <div onClick={leadbutton1} className="mt-10">
                            <a className="text-5xl underline hover:text-blue text-blue">{lead1 ? 'View Less' : 'See More'}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Devloment;



