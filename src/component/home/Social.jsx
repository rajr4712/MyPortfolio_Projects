import React from "react";
// import {FaHackerrank} from "react-icons/fa";

const Social = () => {
    return (
        <div className="home_social">
            <a href="https://www.linkedin.com/in/rahul-kumar37b/" className="home_social-icon" target="_blank">
            <i class="uil uil-linkedin"></i></a>   {/*icon import*/}
           
            <a href="https://twitter.com/Sidharth2378" className="home_social-icon" target="_blank">
            <i class="uil uil-twitter"></i>
            </a>
           
            <a href="https://instagram.com/it_sidharth_gupta" className="home_social-icon" target="_blank">
            <i class="uil uil-instagram-alt"></i>
            </a>
           
            <a href="https://github.com/rajr4712" className="home_social-icon" target="_blank">
            <i class="uil uil-github"></i>
            </a>
            
        </div>
    )
}

export default Social;     
