import React, { useState } from 'react'
import '../Aiservices/Aiservices.css'
import a1 from "../../assets/image/devlopment-devloper-img/1.jpeg"
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
import side from "../../assets/image/devlopment-devloper-img/side.webp"
import slideai from "../../assets/image/devlopment-devloper-img/slideai.webp"
import work_sm from "../../assets/image/devlopment-devloper-img/work_sm.png"
import pinkstar from "../../assets/image/devlopment-devloper-img/pink_star.png"
import star2 from "../../assets/image/devlopment-devloper-img/star2.png"
import watch from "../../assets/image/devlopment-devloper-img/watch.png"
import ai1 from "../../assets/image/devlopment-devloper-img/ai1.png"
import ai2 from "../../assets/image/devlopment-devloper-img/ai2.png"
import ai3 from "../../assets/image/devlopment-devloper-img/ai3.png"
import ai4 from "../../assets/image/devlopment-devloper-img/ai4.png"
import ai5 from "../../assets/image/devlopment-devloper-img/ai5.png"
import bg from "../../assets/image/devlopment-devloper-img/bg.webp"
import profesional from "../../assets/image/devlopment-devloper-img/professional.png"
import ats from "../../assets/image/devlopment-devloper-img/ats.webp"
import loquer from "../../assets/image/devlopment-devloper-img/loquer.webp"
import ai_ex from "../../assets/image/devlopment-devloper-img/ai-expert.webp"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Link, useNavigate} from 'react-router-dom';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import All_talent from './Hire-tabs/all_talent1/All_talent';
import Custom from './Hire-tabs/custom-chatbox2/Custom';
import Aigenrate from './Hire-tabs/generate-ai3/Aigenrate';
import Genrate_art from './Hire-tabs/gerate-art4/Genrate_art';
import Aimodel from './Hire-tabs/al-model5/Aimodel';
import Data_annotation from './Hire-tabs/data-annotation/Data_anno';
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Stack } from '@mui/material';

function Aiservices() {

  let Hire_navigat = useNavigate()

  let Aiservices = [
    {
      name: 'Get advice and tips from an expert',
      dip: 'Learn how AI can transform your business—book a consultation with an industry expert.',
      render1: <Avatar alt="Not Found" src={a1}/>,
      render2: <Avatar alt="Not Found" src={a2}/>,
      render3: <Avatar alt="Not Found" src={a3}/>
    },
    {
      name: 'Build a custom chatbot',
      dip: 'Support your users when they need it most. Work with a pro to build a chatbot using the latest AI technology.',
      render1: <Avatar alt="Not Found" src={a4}/>,
      render2: <Avatar alt="Not Found" src={a5}/>,
      render3: <Avatar alt="Not Found" src={a6}/>
    },
    {
      name: 'Fine-tune your writing',
      dip: 'From blog posts to product descriptions, an editor can review and refine AI-generated text.',
      render1: <Avatar alt="Not Found" src={a7}/>,
      render2: <Avatar alt="Not Found" src={a8}/>,
      render3: <Avatar alt="Not Found" src={a9}/>
    },
    {
      name: 'Create eye-catching art',
      dip: 'Find a pro to create paintings, illustrations, digital graphics, and more using generative AI.',
      render1: <Avatar alt="Not Found" src={a10}/>,
      render2: <Avatar alt="Not Found" src={a11}/>,
      render3: <Avatar alt="Not Found" src={a12}/>
    },
    {
      name: 'Develop your own AI model',
      dip: 'An expert can help you build AI models to address your unique business goals.',
      render1: <Avatar alt="Not Found" src={a3}/>,
      render2: <Avatar alt="Not Found" src={a8}/>,
      render3: <Avatar alt="Not Found" src={a10}/>
    },
    {
      name: 'Label your training data',
      dip: 'Hire an expert to add informative labels to your data to start teaching your AI models.',
      render1: <Avatar alt="Not Found" src={a5}/>,
      render2: <Avatar alt="Not Found" src={a12}/>,
      render3: <Avatar alt="Not Found" src={a7}/>
    },
  ]

  let what_new = [
    {
      wht_img: <img src={side} className='side' alt='Not Found' />,
      heading: 'AI Resources for Talent'
    },
    {
      wht_img: <img src={slideai} className='side' alt='Not Found' />,
      heading: 'Hire an OpenAI Expert on Upwork'
    },
    {
      wht_img: <img src={work_sm} alt='Not Found' />,
      heading: 'Unlock the Future of Work with AI'
    }
  ]

  let business = [
    {
      render1: <img src={a1} className="rounded-full r_b_img" alt="Not Found" />,
      man_name: 'Ahmad S.',
      rate: 'Top Rated Plus',
      dollar_rate: '$25/30 min',
      indian_r: '4.77/5 (171 jobs)',
      conslutation: 'My consultation services span various cutting-edge technologies and industries, including game development...',
    },
    {
      render1: <img src={a2} className="rounded-full r_b_img" alt="Not Found" />,
      man_name: 'Ranbeer M.',
      rate: 'Top Rated Plus',
      dollar_rate: '$125/30 min',
      indian_r: '4.99/5 (93 jobs)',
      conslutation: 'As a Generative AI consultant, I can help you in: 1. Approaches to Gen AI projects - prompt based AI vs fine tuning vs RAG...',
    },
    {
      render1: <img src={a3} className="rounded-full r_b_img" alt="Not Found" />,
      man_name: 'Praveen J.',
      rate: 'Top Rated',
      dollar_rate: '$100/30 min',
      indian_r: '4.84/5 (22 jobs)',
      conslutation: 'As an IT Consultant specializing in AI/Machine Learning, chatbot development, Blockchain, and mobile...',
    },
    {
      render1: <img src={a4} className="rounded-full r_b_img" alt="Not Found" />,
      man_name: 'Nishant S.',
      rate: 'Top Rated Plus',
      dollar_rate: '$200/30 min',
      indian_r: '4.97/5 (52 jobs)',
      conslutation: '🏆 Expert-Vetted Top 1% ! Generative AI and Deep Learning engineer and advisor (Ph.D., CMU, x-IBM Research) with 20+...',
    },
  ]

  let all_ai = [
    {
      ai_img: <img src={ai1} className='w-16 all_ai_img' alt='Not Found'/>,
      ai_name: 'AI Devlopment & Integration',
      ai_part1: 'AI Agent % Chatbot Devlopment',
      ai_part2: 'AI App Devlopment',
      ai_part3: 'AI Api Integration',
      ai_part4: 'AI Model Devlopment',
      ai_part5: 'MLOps'
    },
    {
      ai_img: <img src={ai2} className='w-16 all_ai_img' alt='Not Found'/>,
      ai_name: 'Generative AI Art & Video',
      ai_part1: 'AI Image Generation & Editing',
      ai_part2: 'AI Speech & Audio Generation',
      ai_part3: 'AI Video Generation & Editing',
      ai_part4: '',
      ai_part5: ''
    },
    {
      ai_img: <img src={ai3} className='w-16 all_ai_img' alt='Not Found'/>,
      ai_name: 'Generative AI Writing & Editing',
      ai_part1: 'AI Content Editing',
      ai_part2: 'AI Content Writing',
      ai_part3: '',
      ai_part4: '',
      ai_part5: ''
    },
    {
      ai_img: <img src={ai4} className='w-14 all_ai_img' alt='Not Found'/>,
      ai_name: 'AI Data Services',
      ai_part1: 'Data Annotation & Labeling',
      ai_part2: 'Data Mining & Cleaning',
      ai_part3: 'Knowledge Representation',
      ai_part4: '',
      ai_part5: ''
    },
    {
      ai_img: <img src={ai5} className='w-16 all_ai_img' alt='Not Found'/>,
      ai_name: 'AI Compliance & Tutoring',
      ai_part1: 'AI Ethics & Compliance',
      ai_part2: 'AI Tutoring',
      ai_part3: '',
      ai_part4: '',
      ai_part5: ''
    },
  ]

  let latest = [
    {
      latest_img: <img src={side} className='lat_side image' alt='Not Found'/>,
      latest_name: 'AI Resources for Talent',
      latest_hov: 'See resource talent'
    },
    {
      latest_img: <img src={slideai} className='image' alt='Not Found'/>,
      latest_name: 'Hire an OpenAI Expert on Upwork',
      latest_hov: 'See Open AI experts'
    },
    {
      latest_img: <img src={ai_ex} className='image' alt='Not Found'/>,
      latest_name: 'Harness ChatGPT For Your Company Through AI Experts',
      latest_hov: 'Read Article'
    },
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

  let cross_fun = [
    {fun_name: 'AI Artists'},
    {fun_name: 'AI Chatbot Developers'},
    {fun_name: 'AI Content Creators'},
    {fun_name: 'AI Content Editors'},
    {fun_name: 'AI Developers'},
    {fun_name: 'AI Engineers'}
  ]
  let cross_fun1 = [
    {fun_name1: 'AI Researchers'},
    {fun_name1: 'AI Writers'},
    {fun_name1: 'ChatGPT Specialists'},
    {fun_name1: 'DALL-E Artists'},
    {fun_name1: 'Data Annotators'},
    {fun_name1: 'Data Scientists'}
  ]
  let cross_fun2 = [
    {fun_name2: 'Deep Learning Engineers'},
    {fun_name2: 'Generative AI Specialists'},
    {fun_name2: 'GPT-3 Specialists'},
    {fun_name2: 'Google BERT Specialists'},
    {fun_name2: 'Machine Learning Engineers'},
    {fun_name2: 'Midjourney Artists'}
  ]
  let cross_fun3 = [
    {fun_name3: 'Ontologists'},
    {fun_name3: 'OpenAI Codex Specialists'},
    {fun_name3: 'Prompt Engineers'},
    {fun_name3: 'Stable Diffusion Artists'}
  ]

  let devlop = [
    {project: 'AI Artists'},
    {project: 'AI Chatbot Specialists'},
    {project: 'AI Content Creators'},
    {project: 'AI Content Editors'}
  ]
  let devlop1 = [
    {project1: 'AI Designers'},
    {project1: 'AI Developers'},
    {project1: 'AI Researchers'},
    {project1: 'AI Text-to-Speech'}
  ]
  let devlop2 = [
    {project2: 'AI Writers'},
    {project2: 'Artificial Intelligence Engineers'},
    {project2: 'Chatbot Developers'},
    {project2: 'Generative AI'}
  ]
  let devlop3 = [
    {project3: 'Machine Learning Engineers'},
    {project3: 'Microsoft Azure AI Engineer'},
    {project3: 'Natural Language Processing'},
    {project3: 'Open AI Codex Specialists'}
  ]

  let ai_pro = [
    {pro: 'Chatbots'},
    {pro: 'Data Analysis Services'},
    {pro: 'Data Modeling Services'}
  ]
  let ai_pro1 = [
    {pro1: 'AI & Machine Learning Services'},
    {pro1: 'Chatbots Services'},
    {pro1: 'Generative AI Services'}
  ]
  let ai_pro2 = [
    {pro2: 'Other AI & Machine Learning Services'},
    {pro2: 'Database Services'},
    {pro2: 'Machine Learning Services'}
  ]
  let ai_pro3 = [
    {pro3: 'Data Entry & Cleaning Services'},
    {pro3: 'Data Analysis & Testing Services'}
  ]

  let re_Aiservices = [
    {
      responsive_render: <img src={a1} className="rounded-full w-44" alt="Not Found" />,
      responsive_name: 'Get advice and tips from an expert'
    },
    {
      responsive_render: <img src={a2} className="rounded-full w-32" alt="Not Found" />,
      responsive_name: 'Build a custom chatbot'
    },
    {
      responsive_render: <img src={a3} className="rounded-full w-32" alt="Not Found" />,
      responsive_name: 'Create eye-catching art'
    },
    {
      responsive_render: <img src={a3} className="rounded-full w-32" alt="Not Found" />,
      responsive_name: 'Devlop your own AI model'
    }
  ]

  // Tab use logic
  let tabs = ['All talent', 'Custom chatbots', 'Generative AI writing', 'Generative AI art', 'AI models', 'Data annotation']
  let [Activetab, setActivetab] = useState(tabs[0])

  let handleTab = (tab) => {
    setActivetab(tab)
  }

  return (
    <>
      <div className='page_ai'>
        <div className='smater_work'>
          <p className='smat_work'>WORK, SMARTER.</p>
          <p className='sm sm_part'>Partner with independent talent on Upwork to help AI work for your business.</p>
          <button className='ex_but'  onClick={() => Hire_navigat("/Signup")}>Hire an AI expert</button>

          <div className='all_box'>
            {Aiservices.map((ai) => (
              <div className='get_advice'>
                <p>{ai.name}</p>
                <p className='dip'>{ai.dip}</p>
                <div className="smat_img">
                  <Stack direction="row" spacing={-2}>
                    {ai.render1}
                    {ai.render2}
                    {ai.render3}
                  </Stack>
                  <Link className='down'><span class="material-symbols-outlined">south</span></Link>
                </div>
              </div>
            ))}
          </div>
          {/* responsive 425 screen box */}
          <div className='re_all_box'>
            {re_Aiservices.map((ra) => (
              <div className='flex items-center justify-between get_advice mt-7'>
                <div className='flex items-center'>
                  <p>{ra.responsive_render}</p>&nbsp;&nbsp;&nbsp;
                  <p className='sm'>{ra.responsive_name}</p>
                </div>
                <Link className='down'><span class="material-symbols-outlined">south</span></Link>
              </div>
            ))}
          </div>
            
          <div className='flex smart_talent'>
            <p className=''>FOR TALENT : </p>
            <Link to={"/"}> Find AI jobs and hone your skills</Link>
          </div>
        </div>

        {/* part 2 */}
        <div className='what_new'>
          <div className='whats'>
            <p className='expor_smart re_smat'>What's new</p>
            <Link className='underline text-lime-700 cursor-pointer sm down'>See all updates<span class="mt-1 material-symbols-outlined">arrow_downward</span></Link>
          </div>

          <div className='whats1 re_what'>
            {what_new.map((wh) => (
              <div className='whats2'>
                <p className='what_img'>{wh.wht_img}</p>
                &nbsp;&nbsp;&nbsp;<p>{wh.heading}</p>
              </div>
            ))}
          </div>
          {/* responsive 768 screen */}
          <div className='whats2 re_whats2 my-7'>
            <img src={side} className='w-64' alt='Not Found' />
            <p className='p-10 text-3xl'>AI Resources for Talent</p>
          </div>

          <p className='expor_smart re_smat'>Explore how AI can transform your business</p>
          <p className='book_paid sm'>Book a paid 1-on-1 consultation with an expert. They can help you create a plan for how AI fits into your innovation strategy. <Link className='text-lime-700 underline'>See all consultants<span class="material-symbols-outlined">arrow_forward</span></Link></p>
            
          <div className='expor_business'>
            {business.map((b) => (
              <Card className='business' sx={{borderRadius:'0.8rem'}}>
                <CardContent>
                  <p className='bus_img'>{b.render1}</p>
                  <p className='man_name'>{b.man_name}</p>
                  <p className='sm'>AI Consultant</p>
                  <div className='flex justify-between items-center my-3'>
                    <img src={pinkstar} className='w-7 pink_star' alt='Not Found'/>
                    <p className='sm'>{b.rate}</p>
                    <p className='d_rate sm'>{b.dollar_rate}</p>
                  </div>
                  <div className='flex justify-evenly text-fcolor card_star'>
                    <span class="material-symbols-outlined">star</span>
                    <p>{b.indian_r}</p>
                  </div>
                  <p className='conslutation'>{b.conslutation}</p>
                  <div className='flex'>
                    <img src={watch} className='pink_star' alt='Not Found' />
                    <p className='text-blue sm'>Next conslutation time: Now</p>
                  </div>
                  <button type='button' className='book_but'>Book conslutation</button>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* responsive 425 screen */}
          <div className='re_card'>
            {business.map((b1) => (
              <Card className='mt-7 p-10'>
                <div className='flex items-center'>
                  <p>{b1.render1}</p>
                  <p className='text-5xl ml-14'>{b1.man_name}</p>
                </div>
                <div className='flex space-x-56 mt-10 items-center px-7'>
                  <p className='text-5xl'>AI Consultant</p>
                  <div className='flex items-center'>
                    <img src={pinkstar} className='w-7 pink_star' alt='Not Found'/>
                    <p className='text-5xl'>{b1.rate}</p>
                  </div>
                </div>
                <div className='flex items-center mt-14 space-x-56 px-7'>
                  <p className='text-5xl'>{b1.dollar_rate}</p>
                  <div className='flex items-center text-5xl pown'>
                    <span class="material-symbols-outlined">star</span>
                    <p>{b1.indian_r}</p>
                  </div>
                </div>
                <p className='mt-16 mb-10 text-5xl'>{b1.conslutation}</p>
                <div className='flex ml-48'>
                  <img src={watch} className='w-24' alt='Not Found' />
                  <p className='text-blue text-5xl'>Next conslutation time: Now</p>
                </div>
                <button type='button' className='text-7xl border-lime-600 border-2 rounded-full p-8 px-56 mx-9 my-9'>Book conslutation</button>
              </Card>
            ))}
          </div>

          <button className='book1_but' onClick={() => Hire_navigat("/Signup")}>Hire an AI expert</button>

          <p className='expor_smart'>Hire the right talent for your project</p>
          <p className='book_paid sm1'>Find a pro with the skills and experience you need. Sign up to invite them to a job, then start a contract on Upwork when you’ve figured out the details. <Link className='text-lime-700 underline'>See all experts<span class="material-symbols-outlined">arrow_forward</span></Link></p>
          
          {/* Tab use */}
          <div>
            <ul className='tab'>
              {tabs.map((tab, index) => (
                <li key={index} className={`tab-item ${Activetab === tab ? 'active' : ''}`} onClick={() => handleTab(tab)}>{tab}</li>
              ))}
            </ul>
            <div>
              <p>{Activetab === 'All talent' ? <All_talent/> : Activetab === 'Custom chatbots' ? <Custom/> : Activetab === 'Generative AI writing' ? <Aigenrate/> : Activetab === 'Generative AI art' ? <Genrate_art/> : Activetab === 'AI models' ? <Aimodel/> : Activetab === 'Data annotation' ? <Data_annotation/> : <p>Default content or handle an error state</p>}</p>
            </div>
          </div>
          
          <button className='book1_but' onClick={() => Hire_navigat("/Signup")}>Hire an AI expert</button>

          <div className='rating'>
            <div>
              <div className='flex items-center'><img src={star2} className='w-7 h-6' alt='Not Found'/>
              &nbsp;&nbsp;<p className='man_name'>4.8/5</p></div>
              <p className='text-tab'>Average rating for work with AI talent</p>
            </div>
            <div>
              <p className='man_name'>20K+ contracts</p>
              <p className='text-tab'>Involving AI work in the last year</p>
            </div>
            <div>
              <p className='man_name'>250+ skills</p>
              <p className='text-tab'>Represented by talent on Upwork</p>
            </div>
          </div>

          <p className='expor_smart all_ai'>All the AI talent you could ever want</p>

          <div className='whats1 re_card1'>
            {all_ai.map((a1) => (
              <div className='all_ai1'>
                <p>{a1.ai_img}</p>
                <p className='man_name ai_name'>{a1.ai_name}</p>
                <Link to={"/"}>{a1.ai_part1}</Link>
                <Link to={"/"}>{a1.ai_part2}</Link>
                <Link to={"/"}>{a1.ai_part3}</Link>
                <Link to={"/"}>{a1.ai_part4}</Link>
                <Link to={"/"}>{a1.ai_part5}</Link>
              </div>
            ))}
            <div className='all_ai1'>
              <p className='ai_post sm'>Post a job today. Hire top talent tomorrow.</p>
              <p className='ai_our'>Our AI-powered job post generator can help you create a detailed post to attract top talent.</p>
              <button type='button' className='post_btn sm'>Post ajob now</button>
              <img src={bg} className='ai_round_img' alt='Not Found' /> 
            </div>
          </div>
          {/* responsive 425 screen */}
          <div className='re_card'>
            {all_ai.map((a2) => (
              <>
              <div>
                <Accordion sx={{background: 'black',color:'white',padding:'3rem'}}>
                <AccordionSummary className='text-5xl' expandIcon={<ExpandMoreIcon sx={{ fontSize: 50,color: 'white'}}/>}>{a2.ai_name}</AccordionSummary>
                  <div className='text-5xl underline p-10'>
                    <AccordionDetails>{a2.ai_part1}</AccordionDetails>
                    <AccordionDetails>{a2.ai_part2}</AccordionDetails>
                    <AccordionDetails>{a2.ai_part3}</AccordionDetails>
                    <AccordionDetails>{a2.ai_part4}</AccordionDetails>
                    <AccordionDetails>{a2.ai_part5}</AccordionDetails>
                  </div>
                </Accordion>
              </div>
              </>
              ))}
          </div>

          <p className='expor_smart sj1'>How to hire an AI professional on Upwork</p>
          <div className='flex mt-3'>
            <div>
              <div className='flex pro_ex'><span class="material-symbols-outlined">done</span><p>Explore</p></div>
              <p className='pro_see'>See what services are offered by professionals to help achieve your goal.</p>

              <div className='flex pro_ex'><span class="material-symbols-outlined">done</span><p>Find</p></div>
              <p className='pro_see'>Book a consultation or send an invite with your project details. If you haven’t found a pro yet, post a job to expand your search.</p>

              <div className='flex pro_ex'><span class="material-symbols-outlined">done</span><p>Connect</p></div>
              <p className='pro_see'>Talk about your project goals, deliverables, and budget.</p>

              <div className='flex pro_ex'><span class="material-symbols-outlined">done</span><p>Hire</p></div>
              <p className='pro_see'>Start a new contract with the details you discussed.</p>
            </div>
            <img src={profesional} className='profesional_img' alt='Not Found'/>
          </div>
        </div>

        {/* part 3 */}
        <div className='ats'>
          <div>
            <img src={ats} className='ats_img' alt='Not Found' />
            <p className='ats_dip'>“I was really lucky after some research to find Guy and Alex. I mean, quite frankly, my build would not be where it is without them. They could not be more professional and I could not speak highly enough of them. They're going to be my partners for years to come.”</p>
            <p className='ats_dip text-customGreen'>- Joshua Crandall, Founder and CEO</p>
          </div>
          <div>
            <img src={loquer} className='ats_img' alt='Not Found' />
            <p className='ats_dip mt-5'>“Through Upwork, I got access to high-caliber talent on terms that fit. Without the opportunity to work with professionals like Dr. Kami Anderson on a part-time basis, we would not have been able to launch. Period.”</p>
            <p className='ats_dip text-customGreen'>- Arvita Tripati, CEO</p>
          </div>
        </div>

        <div  className='what_new'>
          <div className='whats re_whats'>
            <p className='expor_smart'>Latest AI news from Upwork</p>
            <Link className='underline text-lime-700 cursor-pointer sm latest_check'>Check out more content in our AI Resources Center<span class="material-symbols-outlined">arrow_forward</span></Link>
          </div>

          <div className='whats1 lat'>
              {latest.map((l1) => (
                <div className='latest hover:cursor-pointer hover:bg-devlop'>

                  <div className='image-container'>
                    <p className='image'>{l1.latest_img}</p>
                    <Link className='overlay'>{l1.latest_hov}</Link>
                  </div>

                  <p className='lat_name'>{l1.latest_name}</p>
                </div>
              ))}
          </div>

          <div className="p-7 bg-devlop flex justify-between rounded-lg lat re_lat">
            <p className="text-4xl font-serif freq">Frequently asked questions</p>

            <div className=" w-35 ">
              {/* part 1 */}
              <p className="text-2xl font-semibold frequn re_fr">What is the first step to hiring development and IT talent and determining the project cost?</p>
              <p className="py-2 text-fcolor font-semibold sm1">One of the first steps in hiring any talent is to determine what skills you need for your project. For example, if you’re integrating AI into your applications</p>
              {read ? (
                  <>
                    <p className='text-fcolor font-semibold sm1'>you may need engineers or data scientists. Or, if you’re interested in using generative AI technologies to create content, you’ll want to explore working with an AI content editor to check AI outputs.</p>
                    <div className="text-fcolor font-semibold sm1">
                      <p className='mt-2 text-xl'>Examples of talent you’ll find on Upwork include:</p>
                      <ul className="px-5 py-3">
                        <li>1. Machine learning engineers</li>
                        <li>2. Data scientists</li>
                        <li>3. Generative AI specialists</li>
                        <li>4. Data annotators</li>
                        <li>5. Prompt engineers</li>
                        <li>6. Chatbot developers</li>
                        <li>7. AI artists</li>
                        <li>8. AI writers</li>
                        <li>9. AI content editors</li>
                      </ul>
                      <p>The cost of your project will depend on your scope of work and the specific skills you need. If you choose to post a job to hire talent on Upwork, you’ll need to consider the following: </p>
                      <ul className="px-5 pt-3 pb-10 space-y-2">
                        <li>1. Deliverables: What do you need done? Perhaps you need a professional to integrate AI into an existing application or annotate data.</li>
                        <li>2. Skills: Identify the tech and IT talent needed to complete the project (e.g., machine learning engineer or ChatGPT developer).</li>
                        <li>3. Project length: Let talent know whether this is a smaller or larger project, and what you expected deadline might be.</li>
                        <li>4. Budget: Set a budget and note your preference for either an hourly rate or a fixed-price contract.</li>
                      </ul>
                    </div>
                  </>
              ) : null}
              <div className="items-center flex text-customGreen cursor-pointer sm"  onClick={togglebutton}>
                  {read ? 'View Less' : 'Read More'}
                  {read ? <span class="material-symbols-outlined">expand_less</span> : <span class="material-symbols-outlined">expand_more</span>}
              </div>
              <hr className="my-3"></hr>
              
              {/* part 2 */}
              <p className="text-2xl font-semibold frequn">How can I connect with AI talent on Upwork?</p>
              <p className="py-2 text-fcolor font-semibold sm1">Upwork gives you the flexibility you need to find the right talent for your AI projects. Here’s how you can find an expert with the skills you need:...</p>
              {read1 ? (
                  <>
                    <div className="text-fcolor font-semibold sm1">
                      <ul className="px-5 pt-3 pb-10 space-y-2">
                        <li>1. Post a job: Find and source independent professionals for your AI projects directly from Upwork’s Talent Marketplace™.</li>
                        <li>2. Book a consultation: Not quite sure where to start or have questions? Book a consultation with an industry expert to get advice.</li>
                        <li>3. Buy a predefined project: Browse through thousands of projects on Project Catalog™, clearly defined and ready to start. Each project already includes pricing, terms, scope, and timing – so you can spend less time working out the details and more time getting to work.</li>
                        <li>4. Hire an agency: Upwork isn’t just for independent contractors; you can also find independent agencies that can help you fill your AI talent gaps with their own professional teams.</li>
                      </ul>
                    </div>
                  </>
              ) : null}
              <div className="items-center flex text-customGreen cursor-pointer sm"  onClick={togglebutton1}>
                  {read1 ? 'View Less' : 'Read More'}
                  {read1 ? <span class="material-symbols-outlined">expand_less</span> : <span class="material-symbols-outlined">expand_more</span>}
              </div>
              <hr className="my-3"></hr>
              
              {/* part 3 */}
              <p className="text-2xl font-semibold frequn">Why should I use Upwork to hire talent for AI services?</p>
              <p className="py-2 text-fcolor font-semibold sm1">When it comes to AI, you may need a multidisciplinary team to handle your project. You might need professionals like:</p>
              {read2 ? (
                  <>
                      <div className="text-fcolor font-semibold sm1">
                          <ul className="px-5 py-3">
                              <li>1. Software engineers to integrate AI technologies</li>
                              <li>2. Prompt engineers skilled at getting high-quality AI outputs</li>
                              <li>3. Data scientists to curate and analyze data sets</li>
                              <li>4. Data annotation specialists to label data for model training</li>
                              <li>5. Writers to edit and quality check AI-generated content</li>
                          </ul>
                          <p className="pt-10">Upwork is the leading online talent solution for companies looking to scale their teams and get work done. Here are some key advantages for businesses looking to find talent on Upwork.</p>
                          <ul className="px-5 pt-3 pb-10 space-y-2">
                              <li>1. On-demand talent: Access to a global talent pool of independent professionals and agencies.</li>
                              <li>2. Transparency: Simplified vetting thanks to freelancer reviews, work history, testimonials, and portfolios.</li>
                              <li>3. Technology: AI-assisted talent matching to help you find the right talent for your needs.</li>
                              <li>4. Flexibility: Hire individuals or agencies to complete any size project.</li>
                              <li>5. Simplicity: Hire, pay, and collaborate with remote teams all in one place.</li>
                          </ul>
                      </div>
                  </>
              ) : null}
              <div className="items-center flex text-customGreen cursor-pointer sm"  onClick={togglebutton2}>
                  {read2 ? 'View Less' : 'Read More'}
                  {read2 ? <span class="material-symbols-outlined">expand_less</span> : <span class="material-symbols-outlined">expand_more</span>}
              </div>
              <hr className="my-3"></hr>
              
              <p className="font-medium sm1">Still have questions? <a href="@" className="text-customGreen underline">Visit our Help Center</a></p>
            </div>
          </div>

          <div>
            <p className='expor_smart mt-10'>Find trusted talent with the AI skills you need</p>

            <p className="pt-8 text-2xl sm2">AI specialists</p>
            <div className="cross flex justify-between mt-5 leading-9 sm1">
              <div>
                {cross_fun.map((f1) => (
                  <Link className="block text-fcolor hover:underline">{f1.fun_name}</Link>
                ))}
              </div>
              <div>
                {cross_fun1.map((f2) => (
                  <Link className="block text-fcolor hover:underline">{f2.fun_name1}</Link>
                ))}
              </div>
              <div>
                {cross_fun2.map((f3) => (
                  <Link className="block text-fcolor hover:underline">{f3.fun_name2}</Link>
                ))}
              </div>
              <div>
                {cross_fun3.map((f4) => (
                  <Link className="block text-fcolor hover:underline">{f4.fun_name3}</Link>
                ))}
              </div>
            </div>
            {/* responsive 425 in use */}
            <div className='my-10 re_card'>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 50}}/>}>
                  <Link className='text-5xl'>AI Artists</Link>
                </AccordionSummary>
                <AccordionDetails>
                  {cross_fun1.map((f2) => (
                    <Link className='block text-4xl leading-snug'>{f2.fun_name1}</Link>
                  ))}
                </AccordionDetails>
                <AccordionDetails>
                  {cross_fun2.map((f3) => (
                    <Link className='block text-4xl leading-snug'>{f3.fun_name2}</Link>
                  ))}
                </AccordionDetails>
                <AccordionDetails>
                  {cross_fun3.map((f4) => (
                    <Link className='block text-4xl leading-snug'>{f4.fun_name3}</Link>
                  ))}
                </AccordionDetails>
              </Accordion>
            </div>

            <p className="pt-8 text-2xl sm2">Cross-functional roles</p>
            <div className=" cross flex justify-between mt-5 leading-9 sm1">
              <div>
                {devlop.map((d) => (
                  <Link className="block text-fcolor hover:underline">{d.project}</Link>
                ))}
              </div>
              <div>
                {devlop1.map((d1) => (
                  <Link className="block text-fcolor hover:underline">{d1.project1}</Link>
                ))}
              </div>
              <div>
                {devlop2.map((d2) => (
                  <Link className="block text-fcolor hover:underline">{d2.project2}</Link>
                ))}
              </div>
              <div>
                {devlop3.map((d3) => (
                  <Link className="block text-fcolor hover:underline">{d3.project3}</Link>
                ))}
              </div>
            </div>
            {/* responsive 425 in use */}
            <div className='my-10 re_card'>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 50}}/>}>
                  <Link className='text-5xl'>AI Artists</Link>
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

            <p className="pt-8 text-2xl sm2">AI projects</p>
            <div className=" cross flex justify-between mt-5 leading-9 sm1">
              <div>
                {ai_pro.map((ap) => (
                  <Link className="block text-fcolor hover:underline">{ap.pro}</Link>
                ))}
              </div>
              <div>
                {ai_pro1.map((ap1) => (
                  <Link className="block text-fcolor hover:underline">{ap1.pro1}</Link>
                ))}
              </div>
              <div>
                {ai_pro2.map((ap2) => (
                  <Link className="block text-fcolor hover:underline">{ap2.pro2}</Link>
                ))}
              </div>
              <div>
                {ai_pro3.map((ap3) => (
                  <Link className="block text-fcolor hover:underline">{ap3.pro3}</Link>
                ))}
              </div>
            </div>
            {/* responsive 425 in use */}
            <div className='my-10 re_card'>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 50}}/>}>
                  <Link className='text-5xl'>Chatbots</Link>
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
          </div>

        </div>
      </div>
    </>
  )
}

export default Aiservices