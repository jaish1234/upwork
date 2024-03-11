import React, { useState } from 'react'
import "../Footer/footer.css"
import facebook from "../../assets/image/home-page/facebook.png"
import linkdin from "../../assets/image/home-page/linkedin.png"
import twiter from "../../assets/image/home-page/Twitter.png"
import youtube from "../../assets/image/home-page/youtube.png"
import insta from "../../assets/image/home-page/instagram.png"
import apple1 from "../../assets/image/home-page/apple1.png"
import robot from "../../assets/image/home-page/robot.png"

function Footer() {

    const [fread, setfview] = useState(false);
    const ftogglebutton = () => {
        setfview(!fread);
    };

    const [fread1, setfview1] = useState(false);
    const ftogglebutton1 = () => {
        setfview1(!fread1);
    };
    const [fread2, setfview2] = useState(false);
    const ftogglebutton2 = () => {
        setfview2(!fread2);
    };
    const [fread3, setfview3] = useState(false);
    const ftogglebutton3 = () => {
        setfview3(!fread3);
    };

  return (
    <>
        <div className="up_footer">
            <div className="foot">
                <div className="up_foo">
                    <p style={{color:'white'}}>For Clients</p>
                    <a href="@" className="first_how">How to Hire</a>
                    <a href="@">Talent Marketplace</a>
                    <a href="@">Project Catalog</a>
                    <a href="@">Hire an A Agency</a>
                    <a href="@">Enterprise</a>
                    <a href="@">Any Hire</a>
                    <a href="@">Contract-to-Hire</a>
                    <a href="@">Direct Contracts</a>
                    <a href="@">Hire Worldwide</a>
                    <a href="@">Hire in the USA</a>
                </div>
                <div className="up_foo">
                    <p style={{color:'white'}}>For Talent</p>
                    <a href="@" className="first_how">How to Find work</a>
                    <a href="@">Direct Contracts</a>
                    <a href="@">Find Freelancer Jobs Worldwide</a>
                    <a href="@">Find Freelancer Jobs in the USA</a>
                    <a href="@">Win work with ads</a>
                    <a href="@">Exclusive resources with Freelancer Plus</a>
                </div>
                <div className="up_foo">
                    <p style={{color:'white'}}>Resources</p>
                    <a href="@" className="first_how">Help & Support</a>
                    <a href="@">Success Stories</a>
                    <a href="@">Upwork Reviews</a>
                    <a href="@">Resources</a>
                    <a href="@">Blog</a>
                    <a href="@">Community</a>
                    <a href="@">Affiliate Program</a>
                    <a href="@">Free Business tools</a>
                </div>
                <div className="up_foo">
                    <p style={{color:'white'}}>Company</p>
                    <a href="/about" className="first_how">About Us</a>
                    <a href="@">Leadership</a>
                    <a href="@">Investor Relations</a>
                    <a href="@">Careers</a>
                    <a href="@">Our Impact</a>
                    <a href="@">Press</a>
                    <a href="@">Contact Us</a>
                    <a href="@">Trust, Safety & Security</a>
                    <a href="@">Modern Slavery Statement</a>
                </div>
            </div>
            <div className="foo_follow">
                <div className="social_footer">
                    <h4>Follow Us</h4>
                    <a href='https://www.facebook.com/upwork' target='_blank'><img src={facebook} style={{width:'2.2rem',height:'2.2rem'}} alt="Not Found"/></a>
                    <a href='https://www.linkedin.com/company/upwork/' target='_blank'><img src={linkdin} style={{width:'2.3rem',height:'2.3rem',border:'none'}} alt="Not Found"/></a>
                    <a href='https://twitter.com/Upwork' target='_blank'><img src={twiter} style={{padding:'0.4rem 0rem',width:'2.2rem'}} alt="Not Found"/></a>
                    <a href='https://www.youtube.com/channel/UCvxGFOnwUBDHHcxuPqhe4CQ' target='_blank'><img src={youtube} style={{width:'2.3rem',height:'2.3rem',padding:'0.5rem'}} alt="Not Found"/></a>
                    <a href='https://www.instagram.com/upwork/' target='_blank'><img src={insta} style={{width:'2.3rem',padding:'0.1rem'}} alt="Not Found"/></a>
                </div>
                <div className="social_footer">
                    <h4>Mobile app</h4>
                    <a href='https://apps.apple.com/us/developer/upwork-global-inc/id329377609' target='_blank'><img src={apple1} style={{width:'2.3rem',height:'2.3rem',padding:'0.6rem'}} alt="Not Found"/></a>
                    <a href='https://play.google.com/store/apps/dev?id=8802639270489632480' target='_blank'><img src={robot} style={{width:'2.4rem',padding:'0.4rem'}} alt="Not Found"/></a>
                </div>
            </div>
            <hr className="foo_hr"></hr>
            <div className="why_foo" style={{color:'white',display:'flex',alignItems:'center'}}>
                <div>
                    <p>© 2015 - 2024 Upwork® Global Inc.</p>
                </div>
                <div className="footer_terms">
                    <a href="@">Terms of Service</a>
                    <a href="@">Privacy Policy</a>
                    <a href="@">CA Notice at Collection</a>
                    <a href="@">Cookie Settings</a>
                    <a href="@">Accessibility</a>
                </div>
            </div>
        </div>
 

        {/* responsive in screen size 468 in code */}

        <div className='re_footer'>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>For Clients
                    {fread ? (
                         <>
                         {" "}
                            <div className='for_cli'>
                                <a href="@">How to Hire</a>
                                <a href="@">Talent Marketplace</a>
                                <a href="@">Project Catalog</a>
                                <a href="@">Hire an A Agency</a>
                                <a href="@">Enterprise</a>
                                <a href="@">Any Hire</a>
                                <a href="@">Contract-to-Hire</a>
                                <a href="@">Direct Contracts</a>
                                <a href="@">Hire Worldwide</a>
                                <a href="@">Hire in the USA</a>
                            </div>
                         </>
                    ): null}
                </p>
                <div className="f39" onClick={ftogglebutton}>
                    <span class="material-symbols-outlined">expand_more</span>
                </div>
            </div>
            <hr style={{margin:'4rem 0rem'}}></hr>

            <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>For Talents
                    {fread1 ? (
                         <>
                         {" "}
                            <div className='for_cli'>
                                <a href="@" className="first_how">How to Find work</a>
                                <a href="@">Direct Contracts</a>
                                <a href="@">Find Freelancer Jobs Worldwide</a>
                                <a href="@">Find Freelancer Jobs in the USA</a>
                                <a href="@">Win work with ads</a>
                                <a href="@">Exclusive resources with Freelancer Plus</a>
                            </div>
                         </>
                    ): null}
                </p>
                <div className="f39" onClick={ftogglebutton1}>
                    <span class="material-symbols-outlined">expand_more</span>
                </div>
            </div>
            <hr style={{margin:'4rem 0rem'}}></hr>

            <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>Resource
                    {fread2 ? (
                         <>
                         {" "}
                            <div className='for_cli'>
                                <a href="@" className="first_how">Help & Support</a>
                                <a href="@">Success Stories</a>
                                <a href="@">Upwork Reviews</a>
                                <a href="@">Resources</a>
                                <a href="@">Blog</a>
                                <a href="@">Community</a>
                                <a href="@">Affiliate Program</a>
                                <a href="@">Free Business tools</a>
                            </div>
                         </>
                    ): null}
                </p>
                <div className="f39" onClick={ftogglebutton2}>
                    <span class="material-symbols-outlined">expand_more</span>
                </div>
            </div>
            <hr style={{margin:'4rem 0rem'}}></hr>

            <div style={{display:'flex',justifyContent:'space-between'}}>
                <p>Company
                    {fread3 ? (
                         <>
                         {" "}
                            <div className='for_cli'>
                                <a href="/about">About Us</a>
                                <a href="@">Leadership</a>
                                <a href="@">Investor Relations</a>
                                <a href="@">Careers</a>
                                <a href="@">Our Impact</a>
                                <a href="@">Press</a>
                                <a href="@">Contact Us</a>
                                <a href="@">Trust, Safety & Security</a>
                                <a href="@">Modern Slavery Statement</a>
                            </div>
                         </>
                    ): null}
                </p>
                <div className="f39" onClick={ftogglebutton3}>
                    <span class="material-symbols-outlined">expand_more</span>
                </div>
            </div>
            <hr style={{margin:'4rem 0rem'}}></hr>
            
            <h6 style={{margin:'9rem 0rem 1rem 0rem'}}>Follow Us</h6>
            <div style={{display: 'flex',alignItems: 'center'}}>
                <a href='https://www.facebook.com/upwork' target='_blank'><img src={facebook} style={{width:'7rem',height:'7rem'}} alt="Not Found"/></a>
                <a href='https://www.linkedin.com/company/upwork/' target='_blank'><img src={linkdin} style={{width:'5rem',height:'5rem',border:'none'}} alt="Not Found"/></a>
                <a href='https://twitter.com/Upwork' target='_blank'><img src={twiter} style={{marginLeft:"1rem",padding:'0.9rem 0rem',width:'5rem',border:'1px solid white',borderRadius:'10rem'}} alt="Not Found"/></a>
                <a href='https://www.youtube.com/channel/UCvxGFOnwUBDHHcxuPqhe4CQ' target='_blank'><img src={youtube} style={{marginLeft:"1rem",width:'5.2rem',height:'5.2rem',padding:'0.5rem',border:'1px solid white',borderRadius:'10rem'}} alt="Not Found"/></a>
                <a href='https://www.instagram.com/upwork/' target='_blank'><img src={insta} style={{marginLeft:"1rem",width:'5rem',padding:'0.6rem',border:'1px solid white',borderRadius:'10rem'}} alt="Not Found"/></a>
            </div>
            <h6 style={{margin:'5rem 0rem 2rem 0rem'}}>Mobile App</h6>
            <div style={{display: 'flex',alignItems: 'center'}}>
                <a href='https://apps.apple.com/us/developer/upwork-global-inc/id329377609' target='_blank'><img src={apple1} style={{width:'5rem',height:'5rem',padding:'1rem',border:'1px solid white',borderRadius:'10rem'}} alt="Not Found"/></a>
                <a href='https://play.google.com/store/apps/dev?id=8802639270489632480' target='_blank'><img src={robot} style={{marginLeft:"1rem",width:'5rem',padding:'0.6rem',border:'1px solid white',borderRadius:'10rem'}} alt="Not Found"/></a>
            </div>
            <hr style={{margin:'4rem 0rem'}}></hr>

            <p>© 2015 - 2024 Upwork® Global Inc.</p>
            
            <div className='last_footer'>
                <a href="@">Terms of Service</a>
                <a href="@">Privacy Policy</a>
                <a href="@">CA Notice at Collection</a>
                <a href="@">Cookie Settings</a>
                <a href="@">Accessibility</a>
            </div>
        </div>
    </>
  )
}

export default Footer