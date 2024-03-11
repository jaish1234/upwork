import "./our-impact.css";
import React from 'react'
import buisnessman from '../images/buisnessman.jpg'
import don5 from '../images/don5.png'
import don6 from '../images/don6.svg'
import don7 from '../images/don7.png'
import don8 from '../images/don8.png'
import don9 from '../images/don9.svg'
import don10 from '../images/don10.png'
import work1 from '../images/work1.jpg'
import work2 from '../images/work2.webp'
import Rectangle from '../images/Rectangle.png'
import catalog from '../images/catalog.png'
import catalog1 from '../images/catalog1.png'
import catalog2 from '../images/catalog.svg'
 
function Ouimpact() {
  return (
    <>
        <div className="g1">
            <h1 className="g2">Our Impact</h1>
            <div className="under"></div>

            <img src={buisnessman} alt="not found" className="ig1"/>

            <p className="g3">“Our mission is to create economic opportunities so people have better lives. It attracts people to Upwork who want to accomplish extraordinary things. And it’s the ‘why’ that guides where and how we seek to have impact.”</p>

            <div className="under under1"></div>

            <h2 className="g4">Hayden Brown</h2>
            <p className="g5">President & CEO, Upwork</p>

            <p className="g6">What we’re focusing on</p>

            <div className="gg1">
                <div className="g7">
                    <img src={don5} alt="not found" className="ig2"/>

                    <p className="g8">Economic Opportunity</p>
                    <div className="g9">
                    <a href="@" style={{color:'#1f57c3'}}>Learn More</a>
                    <span class="material-symbols-outlined">arrow_right_alt</span>
                    </div>
                </div>

                <div className="g7 gg2">
                    <img src={don6} alt="not found" className="ig2"/>

                    <p className="g8 gj1">Business integrity</p>
                    <div className="g9">
                    <a href="@" style={{color:'#1f57c3'}}>Learn More</a>
                    <span class="material-symbols-outlined">arrow_right_alt</span>
                    </div>
                </div>

                <div className="g7 gg2">
                    <img src={don7} alt="not found" className="ig2"/>

                    <p className="g8 gj2">Diversity, Inclusion & Belonging</p>
                    <div className="g9">
                    <a href="@" style={{color:'#1f57c3'}}>Learn More</a>
                    <span class="material-symbols-outlined">arrow_right_alt</span>
                    </div>
                </div>
            </div>

            <div className="gg1">
                <div className="g7">
                    <img src={don8} alt="not found" className="ig2"/>

                    <p className="g8 gj2">Workforce Innovation & Wellbeing</p>
                    <div className="g9">
                    <a href="@" style={{color:'#1f57c3'}}>Learn More</a>
                    <span class="material-symbols-outlined">arrow_right_alt</span>
                    </div>
                </div>

                <div className="g7 gg2">
                    <img src={don9} alt="not found" className="ig2"/>

                    <p className="g8 gj3">Environmental Sustainability</p>
                    <div className="g9">
                    <a href="@" style={{color:'#1f57c3'}}>Learn More</a>
                    <span class="material-symbols-outlined">arrow_right_alt</span>
                    </div>
                </div>

                <div className="g7 gg2">
                    <img src={don10} alt="not found" className="ig2"/>

                    <p className="g8">Supplier Engagement</p>
                    <div className="g9">
                    <a href="@" style={{color:'#1f57c3'}}>Learn More</a>
                    <span class="material-symbols-outlined">arrow_right_alt</span>
                    </div>
                </div>
            </div>

            <p className="g10">News and updates</p>
            <div className="g11">
                <img src={work1} alt="not found" className="ig3"/>
                <p className="g12">2022 Impact Report</p>

                <button className="boot1">See the Highlights</button>
                <button className="boot2">Download PDF</button>
            </div>

            <div className="g13">
                <div>
                    <p className="g14">Hire for Impact</p>
                    <p className="g15">See how Upwork can help you build diverse teams and meet your supplier diversity goals.</p>
                    <button className="boot3">Learn More</button>  
                </div>
                <img src={work2} alt="not found" className="ig4"/>
            </div>

            <div className="g11 gg3">
                <img src={Rectangle} alt="not found" className="ig3"/>
                <p className="g12 gg4">Opportunity Unlimited</p>
                <p className="g16">An Upwork + Tent initiative designed to help thousands of displaced professionals find work.</p>

                <button className="boot1 booot">Learn More</button>
            </div>

            <p className="g17">Learn more about us</p>

            <div className="gg1">
                <div className="g7">
                    <img src={catalog} alt="not found" className="ig2"/>

                    <p className="g8" style={{marginTop:2,paddingLeft:110}}>Investor Relations</p>
                    <div className="g9">
                    <a href="@" style={{color:'#1f57c3'}}>Learn More</a>
                    <span class="material-symbols-outlined">arrow_right_alt</span>
                    </div>
                </div>

                <div className="g7 gg2">
                    <img src={catalog1} alt="not found" className="ig2"/>

                    <p className="g8" style={{marginTop:-5,paddingLeft:100}}>TalentHub Careers</p>
                    <div className="g9">
                    <a href="@" style={{color:'#1f57c3'}}>Learn More</a>
                    <span class="material-symbols-outlined">arrow_right_alt</span>
                    </div>
                </div>

                <div className="g7 gg2">
                    <img src={catalog2} alt="not found" className="ig2"/>

                    <p className="g8" style={{paddingLeft:110}}>ESG Reports Hub</p>
                    <div className="g9">
                    <a href="@" style={{color:'#1f57c3'}}>Learn More</a>
                    <span class="material-symbols-outlined">arrow_right_alt</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Ouimpact
