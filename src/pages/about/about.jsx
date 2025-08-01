import React from 'react';
import "./about.css"
import About_s1 from "@/pages/about/about_component/about_s1/about_s1.jsx";
import About_s2 from "@/pages/about/about_component/about_s2/about_s2.jsx";
import About_s3 from "@/pages/about/about_component/about_s3/about_s3.jsx";
import Home_s6 from "@/pages/Home/home_components/home_s6/home_s6.jsx";

const About = () => {
    return (
        <div className={"main_container"}>
            <About_s1/>
            <About_s2/>
            <About_s3/>
            <div className="a3_box">
                {/*<Home_s6/>*/}
            </div>
        </div>
    );
};

export default About;