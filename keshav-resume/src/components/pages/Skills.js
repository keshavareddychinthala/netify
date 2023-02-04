import React from "react";

export const Skills = () => {
    return (
        <div>
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
    )
}
export default Skills;