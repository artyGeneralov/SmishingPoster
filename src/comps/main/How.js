
import '../../style/Sections.css'
import '../../style/How.css'
import { PiArrowFatLinesDownDuotone } from "react-icons/pi";
import { GoChevronRight } from "react-icons/go";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { SiRabbitmq } from "react-icons/si";

const How = () => {
    return (
        <div className="how">
            <div className='incoming-text'>
                <div className='how-pic' id='incoming-text-pic'></div>
                <div className='sms'>Smartphone Recives SMS</div>
            </div>
            <PiArrowFatLinesDownDuotone className='arrow-down' />
            <div className='process'>
                <div className='text-analysis'>
                    <div className='how-pic' id='text-analysis-pic'></div>
                    <div className='text-analysis-text'>
                        <h2>Text Analysis</h2>
                        <h3><GoChevronRight className='arrow-right' />Huristics</h3>
                        <p>1. Algorithm to calculate score from heuristics</p>
                        <p>2. Algorithm to calculate weights (NN??)</p>
                        <h3><GoChevronRight className='arrow-right' />Machine Learning</h3>
                        <p> Fine tuned LM </p>
                    </div>
                </div>
                <div className='url-analysis'>
                    <div className='url-analysis-text'>
                        <h2>Link Analysis</h2>
                        <h3><GoChevronRight className='arrow-right' />Link Analysis</h3>
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
            <PiArrowFatLinesDownDuotone className='arrow-down' />
            <div className='report'>
                <div className='how-pic' id='report-pic'></div>
                <div>
                    <div className='report-header'>App Gives User Report:</div>
                    <div className='report-points'>
                        <p>1. General Calculated Score (0 to 100)</p>
                        <p>2. Detailed Report</p>
                        <p>3. Sreenshot from Link </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default How