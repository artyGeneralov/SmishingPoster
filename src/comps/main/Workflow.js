import '../../style/Sections.css'
import '../../style/Workflow.css'
import { BiSolidDownArrow } from "react-icons/bi";
import { GoChevronRight } from "react-icons/go";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { SiRabbitmq } from "react-icons/si";

const Workflow = () => {
    return (
        <div className="workflow">
            <div className='incoming-text'>
                <div className='how-pic' id='incoming-text-pic'></div>
                <div className='sms'>Smartphone Recives SMS</div>
            </div>
            <BiSolidDownArrow className='arrow-down' />
            <div className='process'>
                <div className='text-analysis'>
                    <div className='how-pic' id='text-analysis-pic'></div>
                    <div className='text-analysis-text'>
                        <h2>Text Analysis</h2>
                    </div>
                    <div className='hidden-right'>
                        <h3><GoChevronRight className='arrow-right' />Huristics</h3>
                        <p>1. Does the message contain links?</p>
                        <p>2. Are the links accessible / new?</p>
                        <p>3. Does the message contain calls to action?</p>
                        <p>4. Does the message contain references to money?</p>
                        <p>5. Does the message contain a phone number?</p>
                        <h3><GoChevronRight className='arrow-right' />Machine Learning</h3>
                        <p> Fine-tuned LM (BERT) that classifies messegas according to the content </p>
                    </div>
                </div>



                <div className='url-analysis'>
                    <div className='hidden-left'>
                        <h3><GoChevronRight className='arrow-right' />Link Analysis</h3>
                        <p>1. Check link authenticity using VirusTotal API</p>
                        <p>2. Retrieve screenshot of website using ***** API</p>
                    </div>
                    <div className='url-analysis-text'>
                        <h2>Link Analysis</h2>
                    </div>
                    <div className='how-pic' id='url-analysis-pic'></div>
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
            <BiSolidDownArrow className='arrow-down' />
            <div className='report'>
                <div className='how-pic' id='report-pic'></div>
                <div>
                    <div className='report-header'>App Gives User Report</div>
                    <div className='hidden-right' id='hidden-user-report'>
                        <div className='report-points'>
                            <p>1. General Calculated Score (0 to 100)</p>
                            <p>2. Detailed Report</p>
                            <p>3. Sreenshot from Link </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workflow