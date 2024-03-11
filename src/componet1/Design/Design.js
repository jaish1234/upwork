import React, { useState} from "react";
import "../Devloment/Devlopment.css";
import design from "../../assets/image/design-page/design.png"
import micro from "../../assets/image/home-page/microsoft.png";
import air from "../../assets/image/home-page/airbnb.png";
import auto from "../../assets/image/home-page/auto.png";
import biseel from "../../assets/image/home-page/bissell.png";
import nasb from "../../assets/image/home-page/nasb.png";
import star1 from "../../assets/image/home-page/star1.png";
import star from "../../assets/image/home-page/star.png"
import da1 from "../../assets/image/design-page/da1.jpeg"
import da2 from "../../assets/image/design-page/da2.jpeg"
import da3 from "../../assets/image/design-page/da3.jpeg"
import da4 from "../../assets/image/design-page/da4.jpeg"
import da5 from "../../assets/image/design-page/da5.jpeg"
import da6 from "../../assets/image/design-page/da6.jpeg"
import da7 from "../../assets/image/design-page/da7.jpeg"
import da8 from "../../assets/image/design-page/da8.jpeg"
import da9 from "../../assets/image/design-page/da9.jpeg"
import da10 from "../../assets/image/design-page/da10.jpeg"

import mdevlop from "../../assets/image/design-page/mdevlop.jpeg"
import mdevlop1 from "../../assets/image/design-page/mdevlop1.png"
import mdevlop2 from "../../assets/image/design-page/mdevlop2.jpeg"
import mdevlop3 from "../../assets/image/design-page/mdevlop3.png"
import mdevlop4 from "../../assets/image/design-page/mdevlop4.jpeg"
import mdevlop5 from "../../assets/image/design-page/mdevlop5.png"

import work from "../../assets/image/design-page/work.jpg"
import phone from "../../assets/image/design-page/phone.png"

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
            type: "UX/UI Designers",
            rate: "4.8/5 average rating",
            render1: <Avatar alt="Not Found" src={da1}/>,
            render2: <Avatar alt="Not Found" src={da2}/>,
            render3: <Avatar alt="Not Found" src={da3}/>
        },
        {
            type: "Graphic Designers",
            rate: "4.9/5 average rating",
            render1: <Avatar alt="Not Found" src={da4}/>,
            render2: <Avatar alt="Not Found" src={da5}/>,
            render3: <Avatar alt="Not Found" src={da6}/>
        },
        {
            type: "Art Directors",
            rate: "4.9/5 average rating",
            render1: <Avatar alt="Not Found" src={da7}/>,
            render2: <Avatar alt="Not Found" src={da8}/>,
            render3: <Avatar alt="Not Found" src={da9}/>
        },
        {
            type: "Web Designers",
            rate: "4.8/5 average rating",
            render1: <Avatar alt="Not Found" src={da10}/>,
            render2: <Avatar alt="Not Found" src={da2}/>,
            render3: <Avatar alt="Not Found" src={da1}/>
        },
        {
            type: "Motion Designers",
            rate: "4.9/5 average rating",
            render1: <Avatar alt="Not Found" src={da8}/>,
            render2: <Avatar alt="Not Found" src={da7}/>,
            render3: <Avatar alt="Not Found" src={da9}/>
        },
        {
            type: "Animators",
            rate: "4.8/5 average rating",
            render1: <Avatar alt="Not Found" src={da10}/>,
            render2: <Avatar alt="Not Found" src={da1}/>,
            render3: <Avatar alt="Not Found" src={da9}/>
        },
        {
            type: "Video Editors",
            rate: "4.9/5 average rating",
            render1: <Avatar alt="Not Found" src={da3}/>,
            render2: <Avatar alt="Not Found" src={da2}/>,
            render3: <Avatar alt="Not Found" src={da7}/>
        },
        {
            type: 'Voice Artists',
            rate: "4.9/5 average rating",
            render1: <Avatar alt="Not Found" src={da6}/>,
            render2: <Avatar alt="Not Found" src={da5}/>,
            render3: <Avatar alt="Not Found" src={da4}/>
        },
    ];

    let cross_fun = [
        {fun_name: '3D Designers'},
        {fun_name: 'Architectural Designers'},
        {fun_name: 'Art Directors'},
        {fun_name: 'Book Cover Designers'},
        {fun_name: 'Brand Identity Designers'},
        {fun_name: 'Brochure Designers'},
        {fun_name: 'CAD Designers'},
        {fun_name: 'Character Designers'},
    ]
    let cross_fun1 = [
        {fun_name1: 'Communication Designers'},
        {fun_name1: 'Creative Design Experts'},
        {fun_name1: 'Creative Directors'},
        {fun_name1: 'Creative Strategists'},
        {fun_name1: 'Digital Artists'},
        {fun_name1: 'Digital Designers'},
        {fun_name1: 'Editorial Designers'},
        {fun_name1: 'Fashion Designers'}
    ]
    let cross_fun2 = [
        {fun_name2: 'Flyer Designers'},
        {fun_name2: 'Graphic Designers'},
        {fun_name2: 'Illustrators'},
        {fun_name2: 'Industrial Designers'},
        {fun_name2: 'Information Designers'},
        {fun_name2: 'Interviewers'},
        {fun_name2: 'Logo Designers'},
        {fun_name2: 'Motion Graphics Designers'}
    ]
    let cross_fun3 = [
        {fun_name3: 'Photo Editors'},
        {fun_name3: 'Presentation Designers'},
        {fun_name3: 'Social Media Designers'},
        {fun_name3: 'Typography Designers'},
        {fun_name3: 'UI Designers'},
        {fun_name3: 'UX Designers'},
        {fun_name3: 'Web Design Consultants'},
        {fun_name3: 'Web Designers'}
    ]

    let ai_pro = [
        {pro: 'Brand Strategists'},
        {pro: 'Content Strategists'},
        {pro: 'Copy Editors'}
      ]
      let ai_pro1 = [
        {pro1: 'Creative Design Experts'},
        {pro1: 'Creative Strategists'},
        {pro1: 'Social Media Design'}
      ]
      let ai_pro2 = [
        {pro2: 'Marketers'},
        {pro2: 'Copywriters'},
        {pro2: 'Architects'}
      ]
      let ai_pro3 = [
        {pro3: 'Data Analysts'},
        {pro3: 'Creative Directors'},
        {pro3: 'Web Developers'}
      ]

    let devlop = [
        {project: 'Logo Design Services'},
        {project: 'Illustration Services'},
        {project: 'Video Editing Services'},
        {project: 'Sound Design Services'}
    ]
    let devlop1 = [
        {project1: 'Brand Identity Design'},
        {project1: 'NFT Art'},
        {project1: 'Drawing & Illustration'},
        {project1: 'Packaging & Merchandise Design'}
    ]
    let devlop2 = [
        {project2: 'Digital Design'},
        {project2: 'Photography & Image Editing'},
        {project2: 'Other Design Services'},
        {project2: 'Illustration'}
    ]
    let devlop3 = [
        {project3: 'Game Design'},
        {project3: 'Brand Identity Design'},
        {project3: 'Book Design Services'},
        {project3: 'Packaging Design'}
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
    return (
        <>
            <div className="devlop1">
                <div className="dev_main p-8 -mt-60">
                    <div className="rounded-lg flex justify-between bg-customGreen text-white p-4">
                        <div>
                            <p className="text-6xl w-42 font-serif design_hire">Hire freelance design and creative experts to help you scale</p>
                            <p className="w-2/3 text-lg mt-4 mb-10 design_hire">Thousands of pros ready to kick-start your creative overhaul from day one.</p>
                            <button type="button" className="gre_button py-2.5 px-8 border-0 rounded-full hover:bg-hbtn bg-white text-black">Get started</button>
                        </div>
                        <div>
                            <img src={design} className="dev_img w-55 h-31 rounded-lg" alt="Not Found"/>
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

                        <p className="font-serif text-4xl mt-28 gre_trust">Specialized design and creative experts you can count on</p>
                        <div className="gre_be flex space-x-16 mt-7 mb-7">
                            <div className="gre_be1">
                                <div className="flex items-center">
                                    <img src={star1} className="w-6 h-6 re_star1" alt="not found"/>
                                    <p className="text-3xl ml-2 gre1">4.92/5</p>
                                </div>
                                <p className="w-14.8 text-fcolor gre2">Average rating for work with design and creative talent.</p>
                            </div>
                            <div>
                                <p className="text-3xl gre1">184K+ contracts</p>
                                <p className="w-64 text-fcolor gre2">Involving design and creative work in the past year.</p>
                            </div>
                            <div>
                                <p className="text-3xl gre1">468 skills</p>
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
                        <p className="mt-24 text-4xl font-serif re_dev">Design and creative projects for your most pressing work</p>
                        <p className="text-xl text-fcolor re_look">Get a custom logo design that will inspire something deeper than credibility and make your brand stand out from the crowd.</p>
                    
                        <div className="cross">
                        <Box sx={{bgcolor: '#f2f7f2', borderRadius: '0.6rem', display: 'flex', height: 385,margin:'3rem 0rem 10rem 0rem'}}>
                            <Tabs
                              orientation="vertical"
                              value={value}
                              onChange={handleChange}
                              aria-label="Vertical tabs example"
                            >
                              <Tab label="Logo Design" {...a11yProps(0)} />
                              <Tab label="Photoshop Editing" {...a11yProps(1)} />
                              <Tab label="Web & Mobile Design" {...a11yProps(2)} />
                              <Tab label="Presentation Design" {...a11yProps(3)} />
                              <Tab label="Architecture & Interior Design" {...a11yProps(4)} />
                              <Tab label="Video Editing" {...a11yProps(5)} />
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
                                    <p>| Logo Design</p>
                                    <p>Photoshop Editing</p>
                                    <p>Web & Mobile Design</p>
                                    <p>Presentation Design</p>
                                    <p>Architecture & Interior Design</p>
                                    <p>Video Editing</p>
                                </div>
                            </>
                        ) : null}
                        <img src={mdevlop} className="h-96 w-99 rounded-tr-lg rounded-br-lg" alt="Not Found"/>
                        <button type="button" className="text-white text-5xl bg-green-700 px-14 mt-10 rounded-full pt-3 pb-4 hover:bg-green-600">Browse Projects</button>
                        </div>

                        <div className="flex bg-design p-7 mt-36 mb-7 justify-between rounded-lg">
                            <div className="text-black text-xl">
                                <p className="fo_enter">For Enterprise</p>
                                <p className="text-6xl w-96 mt-5 how_work re_enter">This is how <g className="text-blue font-serif">Creatives </g> work now</p>
                                <p className="my-5 pr-24 fo_enter re_enter">Build an agile workforce that moves faster than the pace of business with Enterprise Suite. </p>
                                <button type="button" className="bg-black text-design re_enter rebut text-black text-base px-6 py-2 rounded-full">Find out how</button>
                            </div>
                            <div className="work">
                                <img src={work} className="rounded-lg work"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="devlop1 phone bg-devlop px-10 pt-28 pb-48">
                <div className="flex justify-between">
                    <div className="pt-14 pl-44">
                        <p className="text-4xl font-serif">The brand book your creatives need</p>
                        <p className="text-fcolor text-xl w-35">A graphic designer quickly created a robust brand guide for visual identity</p>
                        <p className="text-fcolor w-35 my-2">"Working with Kostadin is incredible and I value him as an important member of my digital team."</p>
                        <div className="flex space-x-24">
                            <div className="flex items-center">
                                <img src={star} className="w-24 h-4"/>
                                <p>5/5</p>
                            </div>
                            <p>Budget: $4,637</p>
                        </div>
                        <div className="flex items-center space-x-2 mt-5">
                            <p>Skills: </p>
                            <button type="button" className="bg-white px-4 py-2 rounded-full">Graphic Design</button>
                            <button type="button" className="bg-white px-4 py-2 rounded-full">Print Layout Design</button>
                            <button type="button" className="bg-white px-4 py-2 rounded-full">Brand Identity</button>
                        </div>
                    </div>
                    <div>
                        <img src={phone} className="w-35 rounded-lg" />    
                    </div>
                </div>
            </div> 
            {/* responsive width 768 in use  */}
            <div className="devlop1 bg-devlop py-16 add_swip1 add_swip2">
                <div className="p-7">
                    <p className="text-4xl font-serif mt-5 re_dev">The brand book your creatives need</p>
                    <img src={phone} className="w-99 h-45 mt-3" />
                    <p className="text-fcolor text-3xl re_dev">A graphic designer quickly created a robust brand guide for visual identity</p>
                    <p className="text-fcolor text-2xl my-2 re_igor">"Working with Kostadin is incredible and I value him as an important member of my digital team."</p>
                
                    <div className="flex space-x-24">
                        <div className="flex items-center">
                            <img src={star} className="w-24 h-4 re_star"/>
                            <p className="re_look">5/5</p>
                        </div>
                        <p className="re_look">Budget: $4,637</p>
                    </div>
                    <div className="flex items-center space-x-2 mt-5 re_igor">
                        <p className="re_look">Skills: </p>
                        <button type="button" className="bg-white px-4 py-2 rounded-full">Graphic Design</button>
                        <button type="button" className="bg-white px-4 py-2 rounded-full">Print Layout Design</button>
                        <button type="button" className="bg-white px-4 py-2 rounded-full">Brand Identity</button>
                    </div>
                </div>
            </div>

            <div className="devlop1 md1 px-44 py-24"> 
                <div className="p-7 bg-devlop flex justify-between rounded-lg gre_be">
                    <p className="text-4xl font-serif w-80 re_dev">Frequently asked questions</p>
                    <div className=" w-35 ">
                        {/* part 1 */}
                        <p className="text-2xl font-semibold re_look1">What is the first step to hiring design and creative talent and determining the project cost?</p>
                        <p className="py-2 text-fcolor font-semibold re_look1">One of the first steps in hiring any talent is to determine which skills you need for your project. You know you need help with design and creative, but what specific things are you trying to do? Upwork</p>
                        {read ? (
                            <>
                                <div className="text-fcolor font-semibold re_look">
                                    <ul className="px-5 py-3">
                                        <li>1. Logo design</li>
                                        <li>2. Product photography</li>
                                        <li>3. Social media graphics</li>
                                        <li>4. Voice-overs</li>
                                        <li>5. Podcast production</li>
                                        <li>6. Animation videos</li>
                                    </ul>
                                    <p>The cost of your project depends largely on your scope of work and the specific skills needed to complete your project. </p>
                                    <p className="pt-10">A design and creative services project includes the following: </p>
                                    <ul className="px-5 pt-3 pb-10 space-y-2">
                                        <li>1. Deliverables: What do you need done? Perhaps you need a professional to develop a style guide or a branded template.</li>
                                        <li>2. Skills: Identify the design and creative services talent needed to complete the project (e.g., a designer of banner ads or a photo retoucher).</li>
                                        <li>3. Project Length: Your job post should indicate whether this is a smaller or larger project.</li>
                                        <li>4. Budget: Set a budget and note your preference for either an hourly rate or fixed-price contract.</li>
                                    </ul>
                                </div>
                            </>
                        ) : null}
                        <div className="items-center flex text-customGreen hover:text-blue-800 cursor-pointer re_look" onClick={togglebutton}>
                            {read ? 'View Less' : 'Read More'}
                            {read ? <span class="material-symbols-outlined">expand_less</span> : <span class="material-symbols-outlined">expand_more</span>}
                        </div>
                        <hr className="my-3"></hr>
                        
                        {/* part 2 */}
                        <p className="text-2xl font-semibold re_look1">What are the various ways I can connect with design and creative talent through Upwork?</p>
                        <p className="py-2 text-fcolor font-semibold re_look1">Upwork gives you the flexibility you need to find the right talent for your design and creative services projects.</p>
                        {read1 ? (
                            <>
                                <div className="text-fcolor font-semibold re_look">
                                    <ul className="px-5 pt-3 pb-10 space-y-2">
                                        <li>1. Talent Marketplace: Find and source independent professionals for your design and creative projects directly from Upwork’s talent marketplace.</li>
                                        <li>2. Project Catalog: Project Catalog is a new way to quickly get started and expand your capabilities through Upwork. From web and mobile design to logo design services, projects are predefined for you, so you can get to know talent through a clearly defined project within their expertise, then easily scale up and down as needed.</li>
                                        <li>3. Talent Scout: With Talent Scout, our recruiters will match you with the top 1% of design and creative talent on Upwork. Hire in less time, with less effort—and with a lot more confidence.</li>
                                        <li>4. Specialized Teams: Upwork isn’t just for independent contractors; you can also find independent agencies who can help you fill your design and creative talent gaps with their own professional teams.</li>
                                    </ul>
                                </div>
                            </>
                        ) : null}
                        <div className="items-center flex text-customGreen re_look hover:text-blue-800 cursor-pointer"  onClick={togglebutton1}>
                            {read1 ? 'View Less' : 'Read More'}
                            {read1 ? <span class="material-symbols-outlined">expand_less</span> : <span class="material-symbols-outlined">expand_more</span>}
                        </div>
                        <hr className="my-3"></hr>
                        
                        {/* part 3 */}
                        <p className="text-2xl font-semibold re_look1">Why should I use Upwork to find talent for design and creative services?</p>
                        <p className="py-2 text-fcolor font-semibold re_look1">When it comes to design and creative, you may need a multidisciplinary team to handle the various components of your project. Examples of professionals you might need for design and creative projects include:</p>
                        {read2 ? (
                            <>
                                <div className="text-fcolor font-semibold re_look">
                                    <ul className="px-5 py-3">
                                        <li>1. A video editor to create social media ads</li>
                                        <li>2. A graphic designer to develop a new brand identity</li>
                                        <li>3. An illustrator to create custom graphics</li>
                                        <li>4. Front-end developer to build a series of HTML5 emails</li>
                                        <li>5. UX designer for website redesign</li>
                                    </ul>
                                    <p className="pt-10">Upwork is the leading online talent solution for companies looking to scale their teams and get work done. Key advantages for businesses looking to source talent for their design and creative projects through Upwork include:</p>
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
                        <div className="items-center flex text-customGreen re_look hover:text-blue-800 cursor-pointer"  onClick={togglebutton2}>
                            {read2 ? 'View Less' : 'Read More'}
                            {read2 ? <span class="material-symbols-outlined">expand_less</span> : <span class="material-symbols-outlined">expand_more</span>}
                        </div>
                        <hr className="my-3"></hr>
                        
                        <p className="font-medium re_look1">Still have questions? <a href="@" className="text-blue hover:text-blue underline">Visit our Help Center</a></p>
                    </div>
                </div>

                <div className="pt-24">
                    <p className="text-4xl font-serif find_free">Find freelancers with the design and creative skills you need</p>
                    <p className="pt-8 text-2xl cross_name">Design & Creative Roles</p>
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
                            <Link className='text-5xl'>3D Designers</Link>
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
                    <div className=" cross flex justify-between mt-5 leading-9 sm1">
                         <div>
                           {ai_pro.map((ap) => (
                             <Link className="block text-fcolor hover:text-blue hover:text-blue hover:underline">{ap.pro}</Link>
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

                    <p className="pt-8 text-2xl cross_name">Development & IT Projects</p>
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
                            <Link className='text-5xl'>Logo Design Services</Link>
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

