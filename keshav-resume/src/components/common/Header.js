import React,{} from "react";
import profilepic from "../../assets/images/profilepic.png";
import "./common.css";
import { useNavigate } from "react-router-dom";
export const Header = () => {
    const navigate = useNavigate();
    console.log(navigate,"navifg/atel..")
    return (
        <div className="row no-gutters header">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand c-white" href="#" onClick={()=>navigate('/home')}>KeshavaReddy Chinthala</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active c-white">
                                <a className="nav-link c-white" href="#"  onClick={()=>navigate('/aboutme')}>About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link c-white" href="#" onClick={()=>navigate('/projects')}>Projects</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link c-white" href="#" onClick={()=>navigate('/skills')}>Skills</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link c-white" href="#" onClick={()=>navigate('/interests')}>Interests</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link c-white" href="#" onClick={()=>navigate('/certifications')}>Certifications</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link c-white" href="#" onClick={()=>navigate('/resume')}>Resume</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link c-white" href="#" onClick={()=>navigate('/connect')}>Connect</a>
                            </li>
                    </ul>
                    <div className="profile">
                    <img src={profilepic} style={{'borderRadius':'20px'}} />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;