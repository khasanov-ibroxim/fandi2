import React from 'react';
import "./home.css"
import Home_header from "@/pages/Home/home_components/home_header/home_header.jsx";
import Home_s1 from "@/pages/Home/home_components/home_s1/home_s1.jsx";
import Home_s2 from "@/pages/Home/home_components/home_s2/home_s2.jsx";
import Home_s3 from "@/pages/Home/home_components/home_s3/home_s3.jsx";
import Home_s4 from "@/pages/Home/home_components/home_s4/home_s4.jsx";
import Home_s5 from "@/pages/Home/home_components/home_s5/home_s5.jsx";
import Home_s6 from "@/pages/Home/home_components/home_s6/home_s6.jsx";

const Home = () => {
    return (
        <>
            <div className={"main_container"}>
                <div className="container-fluid">
                    <Home_header/>
                    <Home_s1/>
                </div>
                <Home_s2/>
                <Home_s3/>
                <Home_s4/>
                <Home_s5/>
                {/*<Home_s6/>*/}
            </div>
        </>

    );
};

export default Home;