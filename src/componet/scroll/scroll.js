import React, { useRef } from "react";
import "./scroll.css"; 
import stress from '../images/stress.jpg'
import leptopwork from '../images/leptopwork.webp'
import Group from '../images/Group.jpg'
import Group1 from '../images/Group1.jpg'
import Group2 from '../images/Group2.jpg'
import work from '../images/work.jpg'
import work1 from '../images/work1.jpg'
import work2 from '../images/work2.webp'

const ScrollComponent = () => {
    const containerRef = useRef(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 200; // Adjust the value to control the scroll distance
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 200; // Adjust the value to control the scroll distance
        }
    };

    return (
        <div className="scroll-container" ref={containerRef}>
            <div className="image-buttons">
                <img src={stress} alt="not found" />
                <img src={leptopwork} alt="not found" />
                <img src={Group} alt="not found" />
                <img src={Group1} alt="not found" />
                <img src={Group2} alt="not found" />
                <img src={work} alt="not found" />
                <img src={work1} alt="not found" />
                <img src={work2} alt="not found" />
            </div>

            <button className="scroll-button" onClick={scrollLeft}>
                Scroll Left
            </button>
            <button className="scroll-button" onClick={scrollRight}>
                Scroll Right
            </button>
        </div>
    );
};

export default ScrollComponent;
