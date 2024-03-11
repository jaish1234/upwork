import React, { useState} from "react";
import "../Devloment/Devlopment.css";
import sals from "../../assets/image/sals-marketing/slas-work.png"
import micro from "../../assets/image/home-page/microsoft.png";
import air from "../../assets/image/home-page/airbnb.png";
import auto from "../../assets/image/home-page/auto.png";
import biseel from "../../assets/image/home-page/bissell.png";
import nasb from "../../assets/image/home-page/nasb.png";
import star1 from "../../assets/image/home-page/star1.png";
import star from "../../assets/image/home-page/star.png"
import da1 from "../../assets/image/sals-marketing/da1.jpeg"
import da2 from "../../assets/image/sals-marketing/da2.jpeg"
import da3 from "../../assets/image/sals-marketing/da3.png"
import da4 from "../../assets/image/sals-marketing/da4.jpeg"
import da5 from "../../assets/image/sals-marketing/da5.jpeg"
import da6 from "../../assets/image/sals-marketing/da6.jpeg"
import a1 from "../../assets/image/devlopment-devloper-img/1.jpeg";
import a2 from "../../assets/image/devlopment-devloper-img/2.jpeg";
import a3 from "../../assets/image/devlopment-devloper-img/3.jpeg";
import a4 from "../../assets/image/devlopment-devloper-img/4.jpeg";
import a5 from "../../assets/image/devlopment-devloper-img/5.jpeg";
import a6 from "../../assets/image/devlopment-devloper-img/6.jpeg";

import mdevlop from "../../assets/image/sals-marketing/mdevlop.jpeg"
import mdevlop1 from "../../assets/image/sals-marketing/mdevlop1.jpeg"
import mdevlop2 from "../../assets/image/sals-marketing/mdevlop2.jpeg"
import mdevlop3 from "../../assets/image/sals-marketing/mdevlop3.png"
import mdevlop4 from "../../assets/image/sals-marketing/mdevlop4.jpeg"
import mdevlop5 from "../../assets/image/sals-marketing/mdevlop5.jpeg"

import work from "../../assets/image/sals-marketing/work.jpg"
import sals_type from "../../assets/image/sals-marketing/sals_type.jpg"
import digital_work from "../../assets/image/sals-marketing/digital_work.png"
import digital_1 from "../../assets/svg/1.svg"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '../Devloment/VerticalTabs' 
import { a11yProps } from '../Devloment/vertical'
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Stack } from "@mui/material";

function Devloment() {
    let devlopers = [
        {
            type: "SEM Specialists",
            rate: "4.8/5 average rating",
            render1: <Avatar alt="Not Found" src={da1}/>,
            render2: <Avatar alt="Not Found" src={a2}/>,
            render3: <Avatar alt="Not Found" src={da2}/>
        },
        {
            type: "SEO Specialists",
            rate: "4.8/5 average rating",
            render1: <Avatar alt="Not Found" src={da3}/>,
            render2: <Avatar alt="Not Found" src={a1}/>,
            render3: <Avatar alt="Not Found" src={a5}/>
        },
        {
            type: "Social Media Managers",
            rate: "4.7/5 average rating",
            render1: <Avatar alt="Not Found" src={da4}/>,
            render2: <Avatar alt="Not Found" src={a6}/>,
            render3: <Avatar alt="Not Found" src={da5}/>
        },
        {
            type: "Paid Media Experts",
            rate: "4.7/5 average rating",
            render1: <Avatar alt="Not Found" src={a3}/>,
            render2: <Avatar alt="Not Found" src={da6}/>,
            render3: <Avatar alt="Not Found" src={a4}/>
        },
        {
            type: "Email Marketers",
            rate: "4.7/5 average rating",
            render1: <Avatar alt="Not Found" src={a6}/>,
            render2: <Avatar alt="Not Found" src={da3}/>,
            render3: <Avatar alt="Not Found" src={da6}/>
        },
        {
            type: "Marketing Analysts",
            rate: "4.8/5 average rating",
            render1: <Avatar alt="Not Found" src={a4}/>,
            render2: <Avatar alt="Not Found" src={a3}/>,
            render3: <Avatar alt="Not Found" src={da1}/>
        },
        {
            type: "Market Researchers",
            rate: "4.8/5 average rating",
            render1: <Avatar alt="Not Found" src={a2}/>,
            render2: <Avatar alt="Not Found" src={da3}/>,
            render3: <Avatar alt="Not Found" src={da2}/>
        },
        {
            type: 'Sales Representatives',
            rate: "4.6/5 average rating",
            render1: <Avatar alt="Not Found" src={da4}/>,
            render2: <Avatar alt="Not Found" src={a5}/>,
            render3: <Avatar alt="Not Found" src={da6}/>
        },
    ];

    let cross_fun = [
        {fun_name: 'Account Managers'},
        {fun_name: 'Affiliate Marketers'},
        {fun_name: 'B2B Marketers'},
        {fun_name: 'Brand Marketers'},
        {fun_name: 'Content Marketers'},
        {fun_name: 'Content Marketers'},
        {fun_name: 'Copywriters'},
        {fun_name: 'Digital Marketers'},
    ]
    let cross_fun1 = [
        {fun_name1: 'Direct Marketers'},
        {fun_name1: 'Direct Sales Representatives'},
        {fun_name1: 'Email Marketers'},
        {fun_name1: 'Influencer Marketers'},
        {fun_name1: 'Internet Marketers'},
        {fun_name1: 'Lead Generation Specialists'},
        {fun_name1: 'Marketers'},
        {fun_name1: 'Marketing Consultants'}
    ]
    let cross_fun2 = [
        {fun_name2: 'Marketing Managers'},
        {fun_name2: 'Marketing Strategists'},
        {fun_name2: 'Mobile Marketers'},
        {fun_name2: 'PPC Specialists'},
        {fun_name2: 'Product Marketers'},
        {fun_name2: 'Sales Consultants'},
        {fun_name2: 'Sales Copywriters'},
        {fun_name2: 'Sales Managers'}
    ]
    let cross_fun3 = [
        {fun_name3: 'Sales Optimization'},
        {fun_name3: 'Sales Representatives'},
        {fun_name3: 'Sales Strategists'},
        {fun_name3: 'Sales Writing '},
        {fun_name3: 'SEM Specialists'},
        {fun_name3: 'SEO Specialists'},
        {fun_name3: 'Social Media Managers'},
        {fun_name3: 'Telemarketers'}
    ]

    let ai_pro = [
        {pro: 'Brand Strategists'},
        {pro: 'Content Strategists'},
        {pro: 'Copy Editors'},
        {pro: 'Customer Service Representatives'}
      ]
      let ai_pro1 = [
        {pro1: 'Data Analysts'},
        {pro1: 'Full Stack Developers'},
        {pro1: 'Graphic Designers'},
        {pro1: 'Mobile App Developers'}
      ]
      let ai_pro2 = [
        {pro2: 'Project Managers'},
        {pro2: 'Sales Engineers'},
        {pro2: 'Video Editors'},
        {pro2: 'Web Developers'}
      ]
      let ai_pro3 = [
        {pro3: 'Marketing Managers'},
        {pro3: 'Mobile Marketers'},
        {pro3: 'Sales Strategy'},
        {pro3: 'Sales Copywriters'}
      ]

    let devlop = [
        {project: 'Content Marketing Services'},
        {project: 'Email Marketing Services'},
        {project: 'Influencer Marketing Services'},
        {project: 'Lead Generation Services'}
    ]
    let devlop1 = [
        {project1: 'Marketing Services'},
        {project1: 'Digital Marketing & PR'},
        {project1: 'Social Media Marketing'},
        {project1: 'Search Marketing'}
    ]
    let devlop2 = [
        {project2: 'Analytics & Strategy'},
        {project2: 'Other Marketing'},
        {project2: 'Video Marketing'},
        {project2: 'Lead Generation'}
    ]
    let devlop3 = [
        {project3: 'Music Promotion'},
        {project3: 'Podcast Marketing'},
        {project3: 'Email Marketing'},
        {project3: 'Social Media Management'}
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
                    <div className="rounded-lg flex justify-between bg-customGreen text-white p-4">
                        <div>
                            <p className="text-6xl w-35 font-serif design_hire">Scale when you need to with marketing and sales experts</p>
                            <p className="w-2/3 text-lg mt-4 mb-10 design_hire">Build some buzz around your business with professionals from the world’s work marketplace.</p>
                            <button type="button" className="gre_button py-2.5 px-8 border-0 rounded-full hover:bg-hbtn bg-white text-black">Get started</button>
                        </div>
                        <div>
                            <img src={sals} className="dev_img w-55 h-31 rounded-lg" alt="Not Found"/>
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

                      <p className="font-serif text-4xl mt-28 w-55 gre_trust sals_Market">Specialized sales experts and marketing professionals you can count on</p>
                      <div className="gre_be flex space-x-16 mt-7 mb-7">
                            <div className="gre_be1">
                                <div className="flex items-center">
                                    <img src={star1} className="w-6 h-6 re_star1" alt="not found"/>
                                    <p className="text-3xl ml-2 gre1">4.78/5</p>
                                </div>
                                <p className="w-14.8 text-fcolor gre2">Average client rating for work with sales and marketing talent.</p>
                            </div>
                            <div>
                                <p className="text-3xl gre1">65K+ contracts</p>
                                <p className="w-64 text-fcolor gre2">Involving sales and marketing work in the past year.</p>
                            </div>
                            <div>
                                <p className="text-3xl gre1">358 skills</p>
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
                        <p className="mt-24 text-4xl font-serif re_dev">Sales and marketing projects for your most pressing work</p>
                        <p className="text-xl text-fcolor re_look">Grow your following on Facebook, Instagram, and LinkedIn with a full range of social media management services.</p>
                    
                        <div className="cross">
                        <Box sx={{bgcolor: '#f2f7f2', borderRadius: '0.6rem', display: 'flex', height: 385,margin:'3rem 0rem 10rem 0rem'}}>
                            <Tabs
                              orientation="vertical"
                              value={value}
                              onChange={handleChange}
                              aria-label="Vertical tabs example"
                            >
                              <Tab label="Social Media Management" {...a11yProps(0)} />
                              <Tab label="Lead Generation" {...a11yProps(1)} />
                              <Tab label="SEO" {...a11yProps(2)} />
                              <Tab label="Facebook Advertising" {...a11yProps(3)} />
                              <Tab label="Marketing Strategy" {...a11yProps(4)} />
                              <Tab label="Video Marketing" {...a11yProps(5)} />
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
                            <p className="text-5xl font-semibold">Mobile App devlopment</p>
                            <div className="readd items-center flex text-blue-700 hover:text-blue-800 cursor-pointer"  onClick={leadbutton2}>
                                {lead2 ? <span class="material-symbols-outlined">expand_less</span> : <span class="material-symbols-outlined">expand_more</span>}
                            </div>
                        </div>
                        {lead2 ? (
                            <>
                                <div className="p-5 leading-relaxed text-5xl">
                                    <p>| Social Media Management</p>
                                    <p>Lead Generation</p>
                                    <p>SEO</p>
                                    <p>Facebook Advertising</p>
                                    <p>Marketing Strategy</p>
                                    <p>Video Marketing</p>
                                </div>
                            </>
                        ) : null}
                        <img src={mdevlop} className="h-96 w-99 rounded-tr-lg rounded-br-lg" alt="Not Found"/>
                        <button type="button" className="text-white text-5xl bg-green-700 px-14 mt-10 rounded-full pt-3 pb-4 hover:bg-green-600">Browse Projects</button>
                        </div>

                        <div className="flex bg-sals p-7 mt-36 mb-7 justify-between rounded-lg">
                            <div className="text-white text-xl">
                                <p className="fo_enter">For Enterprise</p>
                                <p className="text-6xl w-35 mt-5 how_work re_enter">This is how <span className="text-green-300 font-serif">Sales & Marketing </span> work now</p>
                                <p className="my-5 pr-24 fo_enter re_enter">Build an agile workforce that moves faster than the pace of business with Enterprise Suite. </p>
                                <button type="button" className="bg-white text-sals re_enter rebut text-base px-6 py-2 rounded-full">Find out how</button>
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
                        <p className="text-4xl font-serif">How Upwork works for clients</p>
                        <p className="text-fcolor text-xl">A graphic design pro creates a logo, branding, and style guide</p>
                        <p className="text-fcolor w-35 my-2">"If you have an opportunity to hire Felice, don't delay! He has great ideas, but is open to feedback and changes. He was always well prepared, kept me informed, met his timelines, and delivered what he said and more. My best experience on Upwork. In fact, I've started up another project with him and am still working with him."</p>
                        <div className="flex space-x-24">
                            <div className="flex items-center">
                                <img src={star} className="w-24 h-4" alt="Not Found"/>
                                <p>5/5</p>
                            </div>
                            <p>Budget: $1,580</p>
                        </div>
                        <div className="flex items-center space-x-2 mt-5">
                            <p>Skills: </p>
                            <button type="button" className="bg-white px-4 py-2 rounded-full">Brand Identity</button>
                            <button type="button" className="bg-white px-4 py-2 rounded-full">Logo Design</button>
                            <button type="button" className="bg-white px-4 py-2 rounded-full">Graphic Design</button>
                        </div>
                    </div>
                    <div>
                        <img src={sals_type} className="w-35 rounded-lg" alt="Not Found"/>    
                    </div>
                </div>
                <div className="flex justify-between pr-48 mt-24">
                    <div>
                        <img src={digital_work} className="w-35 rounded-lg" alt="Not Found"/>
                    </div>
                    <div className="pt-32">
                        <p className="text-4xl font-serif w-35">Nasdaq transforms itself into a digital media leader</p>
                        <p className="text-fcolor w-35 my-5">How freelance talent brought a fresh perspective to Nasdaq’s social media</p>
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <img src={digital_1} className="w-4" alt="Not Found"/>&nbsp;
                                <p>80-100 Facebook Live shows per month</p>
                            </div>
                            <button type="button" className="text-white bg-green-700 px-6 rounded-full pt-1 pb-2 hover:bg-green-600">Read case study</button>
                        </div>
                    </div>
                </div>
            </div> 
            {/* responsive width 768 in use  */}
            <div className="devlop1 bg-devlop py-16 add_swip1 add_swip2">
                <div className="p-7">
                    <p className="text-4xl font-serif mt-5 re_dev">How Upwork works for clients</p>
                    <img src={sals_type} className="w-99 h-45 mt-3" alt="Not Found"/>
                    <p className="text-fcolor text-3xl re_dev">A graphic design pro creates a logo, branding, and style guide</p>
                    <p className="text-fcolor text-2xl my-2 re_igor">"If you have an opportunity to hire Felice, don't delay! He has great ideas, but is open to feedback and changes. He was always well prepared, kept me informed, met his timelines, and delivered what he said and more. My best experience on Upwork. In fact, I've started up another project with him and am still working with him."</p>
                
                    <div className="flex space-x-24">
                        <div className="flex items-center">
                            <img src={star} className="w-24 h-4 re_star" alt="Not Found"/>
                            <p className="re_look">5/5</p>
                        </div>
                        <p className="re_look">Budget: $1,580</p>
                    </div>
                    <div className="flex items-center space-x-2 mt-5 re_dev_btn">
                        <p className="re_look">Skills: </p>
                        <button type="button" className="bg-white rounded-full">Brand Identity</button>
                        <button type="button" className="bg-white rounded-full">Logo Design</button>
                    </div>
                    <button type="button" className="bg-white text-5xl mt-5 py-6 px-10 rounded-full">Graphic Design</button>

                    <p className="text-4xl font-serif pt-24 re_dev">Nasdaq transforms itself into a digital media leader</p>
                    <img src={digital_work} className="w-99 h-45 mt-3" alt="Not Found"/>
                    <p className="text-fcolor mt-5 text-3xl re_igor">How freelance talent brought a fresh perspective to Nasdaq’s social media</p>
                    
                    <div className="flex justify-between mt-5">
                        <div className="flex items-center">
                            <img src={digital_1} className="w-10" alt="Not Found"/>&nbsp;
                                <p className="text-4xl">80-100 Facebook Live shows per month</p>
                            </div>
                        <button type="button" className="text-white re_ready text-2xl bg-green-700 px-6 rounded-full pt-1 pb-2 hover:bg-green-600">Read case study</button>
                    </div>
                </div>
            </div>

            <div className="devlop1 md1 px-44 py-24"> 
                <div className="p-7 bg-devlop flex justify-between rounded-lg gre_be">
                    <p className="text-4xl font-serif w-80 re_dev">Frequently asked questions</p>
                    <div className=" w-35 ">
                        {/* part 1 */}
                        <p className="text-2xl font-semibold re_look1">What is the first step to hiring sales and marketing talent and determining the project cost?</p>
                        <p className="py-2 text-fcolor font-semibold re_look1">One of the first steps in hiring any talent is to determine which skills you need for your project. You know you need help with sales and marketing, but what specific things are you trying to do?</p>
                        {read ? (
                            <>
                                <div className="text-fcolor font-semibold re_look">
                                    <p>Upwork matches you with proven remote talent who can help you with all your sales and marketing needs, including:</p>
                                    <ul className="px-5 py-3">
                                        <li>1. Sales calls and pitch decks</li>
                                        <li>2. Sales development</li>
                                        <li>3. Social media advertising</li>
                                        <li>4. Marketing Automation</li>
                                        <li>5. Podcast Promotion</li>
                                        <li>6. SEO</li>
                                        <li>7. Content marketing</li>
                                    </ul>
                                    <p>The cost of your project depends largely on your scope of work and the specific skills needed to complete your project. </p>
                                    <p className="pt-10">A sales and marketing project includes the following: </p>
                                    <ul className="px-5 pt-3 pb-10 space-y-2">
                                        <li>1. Deliverables: What do you need done? Perhaps you need a professional to develop strategy and planning or marketing campaigns.</li>
                                        <li>2. Skills: Identify the talent needed to complete the project (e.g., someone to integrate CRM with your marketing automation platform or a specialist to set up tracking and analytics).</li>
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
                        <p className="text-2xl font-semibold re_look1">What are the various ways I can connect with sales and marketing talent through Upwork?</p>
                        <p className="py-2 text-fcolor font-semibold re_look1">If you need help finding talent for your marketing project, Upwork gives you the flexibility you need to succeed.</p>
                        {read1 ? (
                            <>
                                <div className="text-fcolor font-semibold re_look">
                                    <ul className="px-5 pt-3 pb-10 space-y-2">
                                        <li>1. Talent Marketplace: Find and source independent professionals for your sales or marketing project directly from Upwork’s talent marketplace.</li>
                                        <li>2. Project Catalog: Project Catalog is a new way to quickly get started and expand your capabilities through Upwork. From market research and strategy to SEO and SEM services, projects are predefined for you, so you can get to know talent through a clearly defined project within their expertise, then easily scale up and down as needed.</li>
                                        <li>3. Talent Scout: With Talent Scout, our recruiters will match you with the top 1% of sales and marketing talent on Upwork. Hire in less time, with less effort—and with a lot more confidence.</li>
                                        <li>4. Specialized Teams: Upwork isn’t just for independent contractors; you can also find independent agencies that can help you fill your sales and marketing talent gaps with their own professional teams.</li>
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
                        <p className="text-2xl font-semibold re_look1">Why should I use Upwork to find talent for sales and marketing services?</p>
                        <p className="py-2 text-fcolor font-semibold re_look1">When it comes to sales and marketing, you may need a multidisciplinary team of talent to handle the various components of your project. Examples of professionals you might need for a sales and marketing projects include:</p>
                        {read2 ? (
                            <>
                                <div className="text-fcolor font-semibold re_look">
                                    <ul className="px-5 py-3">
                                        <li>1. A sales representative to handle sales calls and communicate with clients</li>
                                        <li>2. A professional to conduct brand research</li>
                                        <li>3. A consultant to identify a social media advertising strategy</li>
                                        <li>4. A consultant to help with marketing automation best practices and strategy</li>
                                        <li>5. A professional to advise you on podcast production</li>
                                        <li>6. An SEO expert to conduct competitor analysis and keyword research</li>
                                    </ul>
                                    <p className="pt-10">Upwork is the leading online talent solution for companies looking to scale their teams and get work done. Key advantages for businesses looking to source talent for their sales and marketing projects through Upwork include:</p>
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
                        
                        <p className="font-medium re_look1">Still have questions? <a href="@" className="text-blue hover:text-blue underline">Visit our Help Center</a></p>
                    </div>
                </div>

                <div className="pt-24">
                    <p className="text-4xl font-serif find_free">Find freelancers with the sales & marketing skills you need</p>
                    <p className="pt-8 text-2xl cross_name">Sales & Marketing Roles</p>
                    <div className="cross flex justify-between mt-5 leading-9">
                        <div>
                            {cross_fun.map((f1) => (
                                <Link className="block text-fcolor hover:text-blue hover:underline">{f1.fun_name}</Link>
                            ))}
                        </div>
                        <div>
                            {cross_fun1.map((f2) => (
                                <Link className="block text-fcolor hover:text-blue hover:underline">{f2.fun_name1}</Link>
                            ))}
                        </div>
                        <div>
                            {cross_fun2.map((f3) => (
                                <Link className="block text-fcolor hover:text-blue hover:underline">{f3.fun_name2}</Link>
                            ))}
                        </div>
                        <div>
                            {cross_fun3.map((f4) => (
                                <Link className="block text-fcolor hover:text-blue hover:underline">{f4.fun_name3}</Link>
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
                            {cross_fun1.map((f1) => (
                              <Link className='block text-4xl leading-snug'>{f1.fun_name1}</Link>
                            ))}
                          </AccordionDetails>
                          <AccordionDetails>
                            {cross_fun2.map((f2) => (
                              <Link className='block text-4xl leading-snug'>{f2.fun_name2}</Link>
                            ))}
                          </AccordionDetails>
                          <AccordionDetails>
                            {cross_fun3.map((f3) => (
                              <Link className='block text-4xl leading-snug'>{f3.fun_name3}</Link>
                            ))}
                          </AccordionDetails>
                        </Accordion>
                    </div>

                    <p className="pt-8 text-2xl cross_name">Cross-functional Roles</p>
                    <div className=" cross flex justify-between mt-5 leading-9">
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
                            <Link className='text-5xl'>Brand Strategists</Link>
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

                    <p className="pt-8 text-2xl cross_name">Sales & Marketing Projects</p>
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
                            <Link className='text-5xl'>Content Marketing Services</Link>
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

