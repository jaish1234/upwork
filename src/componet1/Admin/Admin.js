import React, { useState} from "react";
import "../Devloment/Devlopment.css";
import admin_work from "../../assets/image/admin-work/admin_work.png"
import micro from "../../assets/image/home-page/microsoft.png";
import air from "../../assets/image/home-page/airbnb.png";
import auto from "../../assets/image/home-page/auto.png";
import biseel from "../../assets/image/home-page/bissell.png";
import nasb from "../../assets/image/home-page/nasb.png";
import star1 from "../../assets/image/home-page/star1.png";
import star from "../../assets/image/home-page/star.png"
import da1 from "../../assets/image/design-page/da1.jpeg"
import da2 from "../../assets/image/design-page/da5.jpeg"
import da3 from "../../assets/image/design-page/da3.jpeg"
import da4 from "../../assets/image/design-page/da7.jpeg"
import da5 from "../../assets/image/design-page/da9.jpeg"
import da6 from "../../assets/image/design-page/da10.jpeg"
import a1 from "../../assets/image/devlopment-devloper-img/1.jpeg";
import a2 from "../../assets/image/devlopment-devloper-img/2.jpeg";
import a3 from "../../assets/image/devlopment-devloper-img/3.jpeg";
import a4 from "../../assets/image/devlopment-devloper-img/4.jpeg";
import a5 from "../../assets/image/devlopment-devloper-img/5.jpeg";
import ad1 from "../../assets/image/admin-work/ad1.jpeg"
import ad2 from "../../assets/image/admin-work/ad2.jpeg"
import ad3 from "../../assets/image/admin-work/ad3.jpeg"
import ad4 from "../../assets/image/admin-work/ad4.jpeg"
import ad5 from "../../assets/image/admin-work/ad5.jpeg"
import ad6 from "../../assets/image/admin-work/ad6.jpeg"

import mdevlop from "../../assets/image/admin-work/mdevlop.png"
import mdevlop1 from "../../assets/image/admin-work/mdevlop1.png"
import mdevlop2 from "../../assets/image/admin-work/mdevlop2.png"
import mdevlop3 from "../../assets/image/admin-work/mdevlop3.png"
import mdevlop4 from "../../assets/image/admin-work/mdevlop4.png"
import mdevlop5 from "../../assets/image/admin-work/mdevlop5.jpg"

import work from "../../assets/image/admin-work/work.jpg"
import admin_type from "../../assets/image/admin-work/admin_type.jpg"
import adm_type from "../../assets/image/admin-work/adm_type.jpeg"
import pro1 from "../../assets/image/admin-work/pro1.png"
import pro2 from "../../assets/image/admin-work/pro2.png"
import Virtual_img from "../../assets/image/admin-work/Virtual_img.png"
import rate from "../../assets/svg/rate.svg"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '../Devloment/VerticalTabs' 
import { a11yProps } from '../Devloment/vertical'
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Card, CardContent, Stack } from "@mui/material";

function Devloment() {
    let devlopers = [
        {
            type: "Virtual Assistants",
            rate: "4.7/5 average rating",
            render1: <Avatar alt="Not Found" src={da1}/>,
            render2: <Avatar alt="Not Found" src={ad1}/>,
            render3: <Avatar alt="Not Found" src={a1}/>
        },
        {
            type: "Data Entry Specialists",
            rate: "4.8/5 average rating",
            render1: <Avatar alt="Not Found" src={da2}/>,
            render2: <Avatar alt="Not Found" src={ad2}/>,
            render3: <Avatar alt="Not Found" src={a2}/>
        },
        {
            type: "Project Managers",
            rate: "4.8/5 average rating",
            render1: <Avatar alt="Not Found" src={da3}/>,
            render2: <Avatar alt="Not Found" src={ad3}/>,
            render3: <Avatar alt="Not Found" src={a3}/>
        },
        {
            type: "Amazon Store Administrators",
            rate: "4.8/5 average rating",
            render1: <Avatar alt="Not Found" src={da4}/>,
            render2: <Avatar alt="Not Found" src={ad4}/>,
            render3: <Avatar alt="Not Found" src={a4}/>
        },
        {
            type: "Customer Service Representatives",
            rate: "4.6/5 average rating",
            render1: <Avatar alt="Not Found" src={da5}/>,
            render2: <Avatar alt="Not Found" src={ad5}/>,
            render3: <Avatar alt="Not Found" src={a5}/>
        },
        {
            type: "Tech Support Specialists",
            rate: "4.7/5 average rating",
            render1: <Avatar alt="Not Found" src={ad6}/>,
            render2: <Avatar alt="Not Found" src={a4}/>,
            render3: <Avatar alt="Not Found" src={da6}/>
        },
        {
            type: "Zendesk Specialists",
            rate: "4.6/5 average rating",
            render1: <Avatar alt="Not Found" src={da4}/>,
            render2: <Avatar alt="Not Found" src={ad1}/>,
            render3: <Avatar alt="Not Found" src={da2}/>
        },
        {
            type: 'Community Managers',
            rate: "4.8/5 average rating",
            render1: <Avatar alt="Not Found" src={da5}/>,
            render2: <Avatar alt="Not Found" src={a5}/>,
            render3: <Avatar alt="Not Found" src={da6}/>
        },
    ];

    let pro_card = [
        {
            pro_img: <Avatar alt="Not Found" src={pro1}  sx={{ width: 80, height: 80 ,'@media (max-width: 426px)': {width:210,height:210}}}/>,
            pro_name: 'Debra F.',
            service: 'Customer Service Professional',
            dip: '“I love helping people resolve their issues and/or going out of my way to find answers for people.”'
        },
        {
            pro_img: <Avatar alt="Not Found" src={pro2}  sx={{ width: 80, height: 80,'@media (max-width: 426px)': {width:210,height:210}}}/>,
            pro_name: 'Carlo Angelo O.',
            service: 'Customer Service Manager',
            dip: '“I ensure to treat their concerns with high urgency. I respond right away. That is how I let them feel I value their time well.”'
        },
    ]

    let cross_fun = [
        {fun_name: 'Administrative Assistants'},
        {fun_name: 'Customer Service Representatives'},
        {fun_name: 'Customer Support Representatives'},
        {fun_name: 'Graphic Designers'}
    ]

    let ai_pro = [
        {pro: 'Account Managers'},
        {pro: 'Business Analysts'},
        {pro: 'Copywriters'},
        {pro: 'Data Analysts'}
      ]
      let ai_pro1 = [
        {pro1: 'Digital Marketers'},
        {pro1: 'Full Stack Developers'},
        {pro1: 'SEO Specialists'},
        {pro1: 'Software QA Testers'}
      ]
      let ai_pro2 = [
        {pro2: 'Virtual Assistants'},
        {pro2: 'Customer Service Representatives'},
        {pro2: 'Administrative Assistants'},
        {pro2: 'Customer Service Representatives'}
      ]
      let ai_pro3 = [
        {pro3: 'Chat Support'},
        {pro3: 'Technical Support'},
        {pro3: 'Google Suite Administrator'},
        {pro3: 'Customer Support Representatives'}
      ]

    let devlop = [
        {project: 'Data Entry Services'},
        {project: 'Other Admin & Customer Support'},
        {project: 'File Conversion'},
        {project: 'Flyer Distribution'}
    ]
    let devlop1 = [
        {project1: 'Project Management'},
        {project1: 'Transcripts'},
        {project1: 'Virtual Assistant'},
        {project1: 'Other Virtual Assistance'}
    ]
    let devlop2 = [
        {project2: 'Call Center & Calling'},
        {project2: 'Administration'},
        {project2: 'Research'},
        {project2: 'Customer Support'}
    ]
    let devlop3 = [
        {project3: 'General Project Services'},
        {project3: 'Digital Marketing Projects'},
        {project3: 'Graphics & Design Projects'},
        {project3: 'Writing & Translation Projects'}
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

    const [lead2, setlead2] = useState(false);
    const leadbutton2 = () => {
        setlead2(!lead2);
    };

    // block type tab
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <>
            <div className="devlop1">
                <div className="dev_main p-8 -mt-60">
                    <div className="rounded-lg flex justify-between bg-admin text-white p-4">
                        <div>
                            <p className="text-6xl w-42 font-serif design_hire">Exceptional customer service creates happy customers</p>
                            <p className="w-2/3 text-lg mt-4 mb-10 design_hire">Work with Upwork to manage your organization’s customer service needs big or small</p>
                            <button type="button" className="gre_button py-2.5 px-8 border-0 rounded-full hover:bg-hbtn bg-white text-black">Get started</button>
                        </div>
                        <div>
                            <img src={admin_work} className="dev_img ad_img w-55 h-31 rounded-lg" alt="Not Found"/>
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

                      <p className="font-serif text-4xl mt-28 w-55 gre_trust admin1">Specialized admin and customer support professionals you can count on</p>
                      <div className="gre_be flex space-x-16 mt-7 mb-7">
                            <div className="gre_be1">
                                <div className="flex items-center">
                                    <img src={star1} className="w-6 h-6 re_star1" alt="not found"/>
                                    <p className="text-3xl ml-2 gre1">4.87/5</p>
                                </div>
                                <p className="w-14.8 text-fcolor gre2">Average rating for work with admin and customer support talent.</p>
                            </div>
                            <div>
                                <p className="text-3xl gre1">60K+ contracts</p>
                                <p className="w-64 text-fcolor gre2">Involving admin and customer support work in the past year.</p>
                            </div>
                            <div>
                                <p className="text-3xl gre1">332 skills</p>
                                <p className="text-fcolor gre2">Represented by talent on Upwork.</p>
                            </div>
                      </div>

                      <div className="add_swip grid gap-x-2 gap-y-9 grid-cols-4">
                          {devlopers.map((j1, index) => (
                              <div className="bg-devlop w-64 rounded-lg p-4 hover:bg-stone-100 cursor-pointer">
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
                                                {j1.render1}
                                                {j1.render2}
                                                {j1.render3}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </div>
                        </Swiper>

                        <div className="flex space-x-96 mt-5 re_look">
                            <p>Looking for something else?</p>
                            <a href="@" className="text-blue underline hover:text-blue"><span class="material-symbols-outlined">arrow_downward</span>See more skills</a>
                        </div>
                        <p className="mt-24 text-4xl font-serif re_dev">Admin and customer support projects for your most pressing work</p>
                        <p className="text-xl text-fcolor re_look">Get your projects done on time and within your budget with expert management of the necessary tasks, people, and resources.</p>
                    
                        <div className="cross">
                        <Box sx={{bgcolor: '#f2f7f2', borderRadius: '0.6rem', display: 'flex', height: 385,margin:'3rem 0rem 10rem 0rem'}}>
                            <Tabs
                              orientation="vertical"
                              value={value}
                              onChange={handleChange}
                              aria-label="Vertical tabs example"
                            >
                              <Tab label="Project Management" {...a11yProps(0)} />
                              <Tab label="Customer Support" {...a11yProps(1)} />
                              <Tab label="Virtual Assistance" {...a11yProps(2)} />
                              <Tab label="eCommerce Management" {...a11yProps(3)} />
                              <Tab label="Data Entry" {...a11yProps(4)} />
                              <Tab label="Transcription" {...a11yProps(5)} />
                              <button type="button" className="text-white bg-green-700 px-8 mt-80 ml-10 absolute rounded-full pt-1 pb-2 hover:bg-green-600">Browse Projects</button>
                            </Tabs>

                            {/* Using the TabPanel component */}
                            <TabPanel value={value} index={0}>
                                <img src={mdevlop} className="tab_pan h-96 w-61 pl-8 rounded-tr-lg rounded-br-lg" alt="Not Found"/>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <img src={mdevlop1} className="tab_pan h-96 w-61 pl-8 rounded-tr-lg rounded-br-lg" alt="Not Found"/>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <img src={mdevlop2} className="tab_pan h-96 w-61 pl-8 rounded-tr-lg rounded-br-lg" alt="Not Found"/>
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <img src={mdevlop3} className="tab_pan h-96 w-61 pl-8 rounded-tr-lg rounded-br-lg" alt="Not Found"/>
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                <img src={mdevlop4} className="tab_pan h-96 w-61 pl-8 rounded-tr-lg rounded-br-lg" alt="Not Found"/>
                            </TabPanel>
                            <TabPanel value={value} index={5}>
                                <img src={mdevlop5} className="tab_pan h-96 w-61 pl-8 rounded-tr-lg rounded-br-lg" alt="Not Found"/>
                            </TabPanel>
                        </Box>
                        </div>
                        {/* responsive width 425 in use */}
                        <div className="bg-devlop mt-10 p-10 add_swip1">
                        <div className="flex justify-between">
                            <p className="text-5xl font-semibold">Project Management</p>
                            <div className="readd items-center flex text-blue-700 hover:text-blue-800 cursor-pointer"  onClick={leadbutton2}>
                                {lead2 ? <span class="material-symbols-outlined">expand_less</span> : <span class="material-symbols-outlined">expand_more</span>}
                            </div>
                        </div>
                        {lead2 ? (
                            <>
                                <div className="p-5 leading-relaxed text-5xl">
                                    <p>| Project Management</p>
                                    <p>Customer Support</p>
                                    <p>Virtual Assistance</p>
                                    <p>eCommerce Management</p>
                                    <p>Data Entry</p>
                                    <p>Transcription</p>
                                </div>
                            </>
                        ) : null}
                        <img src={mdevlop} className="h-96 w-99 rounded-tr-lg rounded-br-lg" alt="Not Found"/>
                        <button type="button" className="text-white text-5xl bg-green-700 px-14 mt-10 rounded-full pt-3 pb-4 hover:bg-green-600">Browse Projects</button>
                        </div>

                        <div className="flex bg-adm p-7 mt-36 mb-7 justify-between rounded-lg">
                            <div className="text-white text-xl">
                                <p className="fo_enter">For Enterprise</p>
                                <p className="text-6xl w-35 mt-5 how_work re_enter">This is how <span className="text-violet-300 font-serif">Administrators</span> work now</p>
                                <p className="my-5 pr-24 fo_enter re_enter">Build an agile workforce that moves faster than the pace of business with Enterprise Suite. </p>
                                <button type="button" className="bg-white text-adm re_enter rebut text-base px-6 py-2 rounded-full">Find out how</button>
                            </div>
                            <div className="work">
                                <img src={work} className="rounded-lg work" alt="Not Found"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="devlop1 phone bg-devlop px-10 py-36">
                <div className="flex justify-between items-center">
                    <div className="pl-44">
                        <p className="text-4xl w-35 font-serif">Project managers who make it look easy</p>
                        <p className="text-fcolor text-xl">A project management pro aced a massive rebranding project</p>
                        <p className="text-fcolor w-35 my-2">"Elham was exceptional in every way. Her project management is a 10 out of 10. Her communication is the same. She managed a highly complex project and made it look easy and it was not. She always had a positive attitude and kept her cool even during highly stressful periods in the project. Her team loved her. The project was on-time, on-budget and very profitable!"</p>
                        <div className="flex space-x-24">
                            <div className="flex items-center">
                                <img src={star} className="w-24 h-4" alt="Not Found"/>
                                <p>5/5</p>
                            </div>
                            <p>Budget: $36,000</p>
                        </div>
                        <div className="flex items-center space-x-2 mt-5">
                            <p>Skills: </p>
                            <button type="button" className="bg-white px-4 py-2 rounded-full">Decision Making</button>
                            <button type="button" className="bg-white px-4 py-2 rounded-full">Project Scheduling</button>
                        </div>
                        <button type="button" className="bg-white px-4 py-2 mt-3 rounded-full">Conflict Resolution</button>
                        <button type="button" className="bg-white px-4 py-2 mt-3 rounded-full">Time Management</button>
                    </div>
                    <div>
                        <img src={admin_type} className="w-35 rounded-lg" alt="Not Found"/>    
                    </div>
                </div>
                <div className="flex justify-between pr-48 mt-24">
                    <div>
                        <img src={adm_type} className="w-35 rounded-lg" alt="Not Found"/>
                    </div>
                    <div className="pt-32">
                        <p className="text-4xl font-serif w-35">How independent talent helped Tophatter increase its CSAT score by 30%</p>
                        <p className="text-fcolor w-35 my-5">Tophatter, an online auction site for shoppers worldwide, was preparing to expand and needed dozens more multilingual customer support specialists. They struggled finding enough qualified talent and finding talent within budget. By leveraging independent professionals on Upwork, they were able to quickly find the customer support specialists they needed, and within budget.</p>
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <HeadsetMicIcon fontSize="small"/>
                                <p>312% increase in support capacity</p>
                            </div>
                            <button type="button" className="text-white bg-green-700 px-6 rounded-full pt-1 pb-2 hover:bg-green-600">Read case study</button>
                        </div>
                    </div>
                </div>
            </div> 
            {/* responsive width 768 in use  */}
            <div className="devlop1 bg-devlop py-16 add_swip1 add_swip2">
                <div className="p-7">
                    <p className="text-4xl font-serif mt-5 re_dev">Project managers who make it look easy</p>
                    <img src={admin_type} className="w-99 h-45 mt-3" alt="Not Found"/>
                    <p className="text-fcolor text-3xl re_dev">A project management pro aced a massive rebranding project</p>
                    <p className="text-fcolor text-2xl my-2 re_igor">"Elham was exceptional in every way. Her project management is a 10 out of 10. Her communication is the same. She managed a highly complex project and made it look easy and it was not. She always had a positive attitude and kept her cool even during highly stressful periods in the project. Her team loved her. The project was on-time, on-budget and very profitable!"</p>
                
                    <div className="flex space-x-24">
                        <div className="flex items-center">
                            <img src={star} className="w-24 h-4 re_star" alt="Not Found"/>
                            <p className="re_look">5/5</p>
                        </div>
                        <p className="re_look">Budget: $36,000</p>
                    </div>
                    <div className="flex items-center space-x-2 mt-5 re_dev_btn">
                        <p className="re_look">Skills: </p>
                        <button type="button" className="bg-white text-2xl py-2 px-7 rounded-full">Decision Making</button>
                        <button type="button" className="bg-white text-2xl py-2 px-7 rounded-full">Project Scheduling</button>
                        <button type="button" className="bg-white text-2xl py-2 px-7 rounded-full">Conflict Resolution</button>
                        <button type="button" className="bg-white text-2xl py-2 px-7 rounded-full">Time Management</button>
                    </div>
                    

                    <p className="text-4xl font-serif pt-24 re_dev">How independent talent helped Tophatter increase its CSAT score by 30%</p>
                    <img src={adm_type} className="w-99 h-45 mt-3" alt="Not Found"/>
                    <p className="text-fcolor mt-5 text-3xl re_igor">Tophatter, an online auction site for shoppers worldwide, was preparing to expand and needed dozens more multilingual customer support specialists. They struggled finding enough qualified talent and finding talent within budget. By leveraging independent professionals on Upwork, they were able to quickly find the customer support specialists they needed, and within budget.</p>
                    
                    <div className="flex justify-between mt-5">
                        <div className="flex items-center text-4xl">
                            <HeadsetMicIcon fontSize="large"/>
                            <p>312% increase in support capacity</p>
                            </div>
                        <button type="button" className="text-white re_ready text-2xl bg-green-700 px-6 rounded-full pt-1 pb-2 hover:bg-green-600">Read case study</button>
                    </div>
                </div>
            </div>

            <div className="devlop1 md1 px-44 py-24"> 

                <div className="my-24">
                    <p className="text-4xl font-serif re_dev">Professionals on Upwork help the world’s best companies with customer service needs.</p>
                    <div className="flex space-x-7  my-7 re_pro_card">
                        {pro_card.map((pc, index) => (
                            <Card className="re_pro_card1" sx={{backgroundColor: index % 2 === 0 ? '#debe1a' : '#4ba798',color: index % 2 === 0 ? 'black' : 'white',borderRadius:'0.6rem'}}>
                                <CardContent>
                                    <Stack>{pc.pro_img}</Stack>
                                    <p className="text-3xl py-1 font-serif peo_ad1">{pc.pro_name}</p>
                                    <div className="flex items-center">
                                        <img src={rate} className="re_rate1" alt="Not Found"/>
                                        <p className="re_rate">TOP RATED PLUS</p>
                                    </div>
                                    <p className="text-xl pt-2 pb-4 peo_ad1">{pc.service}</p>
                                    <p className="text-3xl font-serif w-35 re_dev peo_ad">{pc.dip}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="flex items-center justify-between border-2 px-6 py-4 rounded-lg">
                        <div>
                            <p className="w-35 text-3xl mb-14 font-semibold peo_dis">Discover how you can build a virtual Customer Service team to help unlock new levels of productivity within your organization.</p>
                            <Link className="text-blue underline hover:text-sky-700 peo_ad1">Read article<ArrowForwardIcon fontSize="small"/></Link>
                        </div>
                        <img src={Virtual_img} className="w-14.8 add_swip" alt="Not Found"/>
                    </div>
                </div>

                <div className="p-7 bg-devlop flex justify-between rounded-lg gre_be">
                    <p className="text-4xl font-serif w-80 re_dev">Frequently asked questions</p>
                    <div className=" w-35 ">
                        {/* part 1 */}
                        <p className="text-2xl font-semibold re_look1">What is the first step to hiring admin and customer support talent and determining the project cost?</p>
                        <p className="py-2 text-fcolor font-semibold re_look1">One of the first steps in hiring any talent is to determine which skills you need for your project. You know you need help with admin and customer support, but what specific things are you trying to do?</p>
                        {read ? (
                            <>
                                <div className="text-fcolor font-semibold re_look">
                                    <p>Upwork matches you with proven remote talent who can help you with all your sales and marketing needs, including:</p>
                                    <ul className="px-5 py-3">
                                        <li>1. Data entry</li>
                                        <li>2. Virtual/administrative assistance</li>
                                        <li>3. Online research</li>
                                        <li>4. Order processing</li>
                                        <li>5. Project management</li>
                                        <li>6. Transcription</li>
                                        <li>7. Live chat support</li>
                                        <li>8. Email support</li>
                                        <li>9. Social media support</li>
                                    </ul>
                                    <p>The cost of your project depends largely on your scope of work and the specific skills needed to complete your project. </p>
                                    <p className="pt-10">An admin and customer support project includes the following:</p>
                                    <ul className="px-5 pt-3 pb-10 space-y-2">
                                        <li>1. Deliverables: What do you need done? Perhaps you need a professional to do data entry, create shipping labels, appointments, or project plans.</li>
                                        <li>2. Skills: Identify the admin and customer support talent needed to complete the project (e.g., project manager or data entry specialist).</li>
                                        <li>3. Project Length: Your job post should indicate whether this is a smaller or larger project.</li>
                                        <li>4. Budget: Set a budget and note your preference for either an hourly rate or fixed-price contract.</li>
                                    </ul>
                                </div>
                            </>
                        ) : null}
                        <div className="items-center flex text-blue hover:text-blue-800 cursor-pointer re_look" onClick={togglebutton}>
                            {read ? 'View Less' : 'Read More'}
                            {read ? <span class="material-symbols-outlined">expand_less</span> : <span class="material-symbols-outlined">expand_more</span>}
                        </div>
                        <hr className="my-3"></hr>
                        
                        {/* part 2 */}
                        <p className="text-2xl font-semibold re_look1">What are the various ways I can connect with admin and customer support talent through Upwork?</p>
                        <p className="py-2 text-fcolor font-semibold re_look1">If you need help finding talent for your marketing project, Upwork gives you the flexibility you need to succeed.</p>
                        {read1 ? (
                            <>
                                <div className="text-fcolor font-semibold re_look">
                                    <ul className="px-5 pt-3 pb-10 space-y-2">
                                        <li>1. Talent Marketplace: Find and source independent professionals for your admin and customer support project directly from Upwork’s talent marketplace.</li>
                                        <li>2. Project Catalog: Project Catalog is a new way to quickly get started and expand your capabilities through Upwork. From project management to virtual assistant services, projects are predefined for you, so you can get to know talent through a clearly defined project within their expertise, then easily scale up and down as needed.</li>
                                        <li>3. Specialized Teams: Upwork isn’t just for independent contractors; you can also find independent agencies that can help you fill your admin and customer support talent gaps with their own professional teams.</li>
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
                        <p className="text-2xl font-semibold re_look1">Why should I use Upwork to find talent for admin and customer support services?</p>
                        <p className="py-2 text-fcolor font-semibold re_look1">When it comes to admin and customer support, you may need a multidisciplinary team to handle the various components of your project. Examples of professionals you might need for admin and customer support projects include:</p>
                        {read2 ? (
                            <>
                                <div className="text-fcolor font-semibold re_look">
                                    <ul className="px-5 py-3">
                                        <li>1. A project manager to oversee multiple projects</li>
                                        <li>2. A virtual assistant to book meetings and manage your email inbox</li>
                                        <li>3. A data entry specialist</li>
                                        <li>4. A transcriptionist to transcribe your video and audio files into searchable text files</li>
                                        <li>5. A customer support representative to assist with chat or email inquiries</li>
                                    </ul>
                                    <p className="pt-10">Upwork is the leading online talent solution for companies looking to scale their teams and get work done. Key advantages for businesses looking to source talent for their admin and customer support projects through Upwork include:</p>
                                    <ul className="px-5 pt-3 pb-10 space-y-2">
                                        <li>1. On-Demand Talent: Access to a global talent pool of freelancers and agencies.</li>
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
                        
                        <p className="font-medium re_look1">Still have questions? <a href="@" className="text-blue hover:text-blue underline">Visit our Help Center<ArrowForwardIcon fontSize="small"/></a></p>
                    </div>
                </div>

                <div className="pt-24">
                    <p className="text-4xl font-serif find_free">Find freelancers with the admin and customer support skills you need</p>
                    <p className="pt-8 text-2xl cross_name">Admin & Customer Support Roles</p>
                    <div className="cross flex justify-between mt-5">
                        {cross_fun.map((f1) => (
                            <Link className="text-fcolor mb-3 hover:text-blue hover:underline">{f1.fun_name}</Link>
                        ))}
                    </div>
                    <Link className="text-fcolor cross hover:text-blue hover:underline">Project Managers</Link>
                    {/* responsive 425 in use */}
                    <div className='my-10 re_card'>
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 50}}/>}>
                            <Link className='text-5xl'>Administrative Assistants</Link>
                          </AccordionSummary>
                          <AccordionDetails>
                            {cross_fun.map((f1) => (
                              <Link className='block text-4xl leading-snug'>{f1.fun_name}</Link>
                            ))}
                          </AccordionDetails>
                          <AccordionDetails><Link className="text-4xl hover:text-blue hover:underline">Project Managers</Link></AccordionDetails>
                        </Accordion>
                    </div>

                    <p className="pt-8 text-2xl cross_name">Cross-functional Roles</p>
                    <div className="cross flex justify-between mt-5 leading-9">
                         <div>
                           {ai_pro.map((ap) => (
                             <Link className="block text-fcolor  hover:text-blue hover:underline">{ap.pro}</Link>
                           ))}
                         </div>
                         <div>
                           {ai_pro1.map((ap1) => (
                             <Link className="block text-fcolor hover:text-blue hover:underline">{ap1.pro1}</Link>
                           ))}
                         </div>
                         <div>
                           {ai_pro2.map((ap2) => (
                             <Link className="block text-fcolor hover:text-blue hover:underline">{ap2.pro2}</Link>
                           ))}
                         </div>
                         <div>
                           {ai_pro3.map((ap3) => (
                             <Link className="block text-fcolor hover:text-blue hover:underline">{ap3.pro3}</Link>
                           ))}
                         </div>
                    </div>
                    {/* responsive 425 in use */}
                    <div className='my-10 re_card'>
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 50}}/>}>
                            <Link className='text-5xl'>Account Managers</Link>
                          </AccordionSummary>
                          <AccordionDetails>
                            {ai_pro1.map((ap1) => (
                              <Link className='block text-4xl leading-snug'>{ap1.pro1}</Link>
                            ))}
                          </AccordionDetails>
                          <AccordionDetails>
                            {ai_pro2.map((ap2) => (
                              <Link className='block text-4xl leading-snug'>{ap2.pro2}</Link>
                            ))}
                          </AccordionDetails>
                          <AccordionDetails>
                            {ai_pro3.map((ap3) => (
                              <Link className='block text-4xl leading-snug'>{ap3.pro3}</Link>
                            ))}
                          </AccordionDetails>
                        </Accordion>
                    </div>

                    <p className="pt-8 text-2xl cross_name">Admin & Customer Support Projects</p>
                    <div className=" cross flex justify-between mt-5 leading-9">
                        <div>
                            {devlop.map((d) => (
                                <Link className="block text-fcolor hover:text-blue hover:underline">{d.project}</Link>
                            ))}
                        </div>
                        <div>
                            {devlop1.map((d1) => (
                                <Link className="block text-fcolor hover:text-blue hover:underline">{d1.project1}</Link>
                            ))}
                        </div>
                        <div>
                            {devlop2.map((d2) => (
                                <Link className="block text-fcolor hover:text-blue hover:underline">{d2.project2}</Link>
                            ))}
                        </div>
                        <div>
                            {devlop3.map((d3) => (
                                <Link className="block text-fcolor hover:text-blue hover:underline">{d3.project3}</Link>
                            ))}
                        </div>
                    </div>
                    {/* responsive 425 in use */}
                    <div className='my-10 re_card'>
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 50}}/>}>
                            <Link className='text-5xl'>Data Entry Services</Link>
                          </AccordionSummary>
                          <AccordionDetails>
                            {devlop1.map((d1) => (
                              <Link className='block text-4xl leading-snug'>{d1.project1}</Link>
                            ))}
                          </AccordionDetails>
                          <AccordionDetails>
                            {devlop2.map((d2) => (
                              <Link className='block text-4xl leading-snug'>{d2.project2}</Link>
                            ))}
                          </AccordionDetails>
                          <AccordionDetails>
                            {devlop3.map((d3) => (
                              <Link className='block text-4xl leading-snug'>{d3.project3}</Link>
                            ))}
                          </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Devloment;

