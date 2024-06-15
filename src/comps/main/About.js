
import '../../style/Sections.css'
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { SiRabbitmq } from "react-icons/si";

const About = () => {
    return (
        <div className="About">
            <div className="content" id='problem'>
                <div className="content-left">
                    <h2>Problem</h2>
                    <p>
                        <p>In the digital age, SMS phishing has become a prevalent threat.</p>
                        These messages often <b><u>deceive users</u></b> into:
                        <ul>
                            <li><h3>Revealing personal information</h3></li>
                            <li><h3>Downloading malware</h3></li>
                            <li><h3>Accessing phishing sites</h3></li>
                        </ul>
                        <p>Posing significant security risks to individuals and organizations.</p>

                    </p>
                </div>
                <div className="content-image" id='problem-image'></div>
            </div>
            <div className="content" id='solution'>
                <div className="content-image" id='solution-image'></div>
                <div className="content-right">
                    <h2>Our Solution & Goals</h2>
                    <p>
                        We have developed an innovative Android application<br />
                        designed to combat smishing by providing  <u>real-time analysis</u> of incoming messages.
                        <h4><br />Our application employs a multi-faceted approach:</h4>
                        <ul>
                            <li><strong>Heuristic Analysis</strong>: Utilizes a set of weighted heuristics to evaluate message characteristics.</li><br />
                            <li><strong>Semantic Analysis</strong>: Leverages a language model to classiffy messages based on their content.</li><br />
                            <li><strong>Link Analysis</strong>: Analyzes and verifies links within messages against known security databases.</li>
                        </ul>

                    </p>
                </div>
            </div>
            <div className='tech'>
                <h2>Tech Stack</h2>
                <span>
                    <p className='icon'>
                        <FaPython className='icon-icon' />
                        Python
                    </p>
                    <p className='icon'>
                        <FaJava className='icon-icon' />
                        Java
                    </p>
                    <p className='icon'>
                        <FaAndroid className='icon-icon' />
                        Android
                    </p>
                    <p className='icon'>
                        <IoLogoFirebase className='icon-icon' />
                        FCM
                    </p>
                    <p className='icon'>
                        <GrMysql className='icon-icon' />
                        MySQL
                    </p>
                    <p className='icon'>
                        <SiRabbitmq className='icon-icon' />
                        RabbitMQ
                    </p>
                </span>
            </div>
        </div>
    )
}

export default About