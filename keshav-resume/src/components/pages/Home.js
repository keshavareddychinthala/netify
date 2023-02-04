import React from "react";
import "./Home.css";

export const Home = () => {


    return (
        <div className="grey-bg container-fluid">
            <section id="stats-subtitle">
                <div className="row">
                    <div className="col-12 mt-3 mb-1">
                        <h4 className="text-uppercase">Experience</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6 col-md-12">
                        <div className="card overflow-hidden">
                            <div className="card-content">
                                <div className="card-body cleartfix">
                                    <div className="media align-items-stretch">
                                        <div className="align-self-center">
                                            <i className="icon-pencil primary font-large-2 mr-2"></i>
                                        </div>
                                        <div className="media-body">
                                            <h4>Leetcode  Count</h4>
                                            {/* <span>Monthly blog posts</span> */}
                                        </div>
                                        <div className="align-self-center">
                                            <h1>300</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-md-12">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body cleartfix">
                                    <div className="media align-items-stretch">
                                        <div className="align-self-center">
                                            <i className="icon-speech warning font-large-2 mr-2"></i>
                                        </div>
                                        <div className="media-body">
                                            <h4>Total Projects</h4>
                                        </div>
                                        <div className="align-self-center">
                                            <h1>10</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body cleartfix">
                                    <div className="media align-items-stretch">
                                        <div className="align-self-center">
                                            {/* <h1 className="mr-2">Experience</h1> */}
                                        </div>
                                        <div className="media-body">
                                            My name is  KeshavaReddy Chinthala, I am a Full Stack Web Developer. An Open Source enthusiast and a Computer Science student from India.

                                            I love working on new and exciting technologies emerging nowadays. I have good work experience as a MERN Stack Developer in  where I was core member of the development team and done quite some contribution to open source as well.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 item">
                        <div className="card item-card card-block">
                            <img src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg" alt="Photo of sunset" />
                            <h5 className="item card-title mt-3 mb-3">Problem Solving</h5>
                            <p className="card-text card-subtitle">I love solving problems whether programming problems or real life problems.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 item">
                        <div className="card item-card card-block">
                            <img src="https://static.pexels.com/photos/7357/startup-photos.jpg" alt="Photo of sunset" />
                            <h5 class="card-title  mt-3 mb-3">Web Development</h5>
                            <p class="card-text card-subtitle">I am a Full Stack Web Developer (MERN) and have quite some experience in it as well.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 item">
                        <div className="card item-card card-block">
                            <img src="https://static.pexels.com/photos/262550/pexels-photo-262550.jpeg" alt="Photo of sunset" />
                            <h5 className="card-title card-title  mt-3 mb-3">Web Design</h5>
                            <p className="card-text card-subtitle">I love designs and it's the first step before creating any website as I can give layout to my imagination.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 pb-5">
                    <center>
                        <div className="heading-3">Tech I'm familiar with</div>
                    </center>
                    <table>
                        <thead>
                            <tr>
                                <td>Skill</td>
                                <td>Level</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JavaScript</td>
                                <td><span className="percent">95%</span>
                                    <div className="bar one">
                                        <div className="fill" style={{ "width": "95%" }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>PHP</td>
                                <td>
                                    <span className="percent">95%</span>
                                    <div className="bar one">
                                        <div className="fill" style={{ "width": "95%" }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Python</td>
                                <td><span className="percent">35%</span>
                                    <div className="bar one">
                                        <div className="fill" style={{ "width": "35%" }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>VB .Net</td>
                                <td><span className="percent">99%</span>
                                    <div className="bar one">
                                        <div className="fill" style={{ "width": "98%" }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>C#</td>
                                <td><span className="percent">98%</span>
                                    <div className="bar one">
                                        <div className="fill" style={{ "width": "98%" }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Java</td>
                                <td><span className="percent">30%</span>
                                    <div className="bar two">
                                        <div className="fill" style={{ "width": "30%" }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>CSS</td>
                                <td><span className="percent">95%</span>
                                    <div className="bar one">
                                        <div className="fill" style={{ "width": "95%" }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>HTML5</td>
                                <td><span className="percent">99%</span>
                                    <div className="bar one">
                                        <div className="fill" style={{ "width": "99%" }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>jQuery</td>
                                <td><span className="percent">90%</span>
                                    <div className="bar one">
                                        <div className="fill" style={{ "width": "90%" }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>MySQL</td>
                                <td><span className="percent">95%</span>
                                    <div className="bar one">
                                        <div className="fill" style={{ "width": "95%" }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Node.js</td>
                                <td><span className="percent">80%</span>
                                    <div className="bar one">
                                        <div className="fill" style={{ "width": "80%" }}></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="last">Wordpress</td>
                                <td className="last"><span class="percent">55%</span>
                                    <div className="bar one">
                                        <div className="fill" style={{ "width": "55%" }}></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </section>
        </div>
    )
}