import React from "react";
import linkedinpic from "../../assets/images/linkedin.png";
import leetcodepic from "../../assets/images/leetcode.png";
import instagrampic from "../../assets/images/instagram.png";
import "./common.css";
export const Footer = () => {

  const handleURl=(url)=>{
    window.location.href=url;
  }

    return (
        <div className="footer row pb-5 pt-2">
            <footer className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">

                    </a>
                    <span className="mb-3 mb-md-0 text-muted" style={{ 'fontWeight': 'bold' }}>© 2023 KeshavaResume</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3 p-2"><a  href="https://www.linkedin.com/in/chinthala-keshavareddy-620055170/"></a> <img src={linkedinpic} onClick={()=>handleURl("https://www.linkedin.com/in/chinthala-keshavareddy-620055170/")} /></li>
                    <li className="ms-3 p-2"><a  href="#"></a>  <img src={leetcodepic} style={{ 'height': '47px', 'width': '47px' }} onClick={()=>handleURl("https://leetcode.com/keshava1997/")} /></li>
                    <li className="ms-3 p-2"><a  href="#"></a>  <img src={instagrampic} /></li>
                </ul>
            </footer>
        </div>

    )
}
export default Footer;