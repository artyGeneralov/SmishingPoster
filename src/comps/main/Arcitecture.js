
import '../../style/Sections.css'
import '../../style/Arcitecture.css'
import { PiArrowBendLeftDown, PiArrowUp } from "react-icons/pi";
import { PiArrowBendRightDown } from "react-icons/pi";
import { PiArrowDown } from "react-icons/pi";

const Arcitecture = () => {

    return (
        <div className='arcitecture'>
            <div className='android'>Android</div>
            <div className='hidden-right-android'>
            <p>This component of our system offers a user-friendly interface, 
            designed for simplicity and ease of use. It handles several core functions:</p>
            <ul>
                <li>Fetching incoming SMS messages for analysis.</li><br/>
                <li>Handling communications.</li><br/>
                <li>Displaying detailed reports and alerts to the user.</li>
            </ul>




            </div>
            <div className='second-layer'>
                <div className='api'>API</div>
                <div>
                    <PiArrowDown className='archi-arrow' />
                    <PiArrowUp className='archi-arrow' />
                </div>
                <div className='fcm-callback'>FCM callback</div>
            </div>
            <div className='flask'>Flask</div>
            <div className='hidden-left-flask'>
            <p> This component acts as the backbone of our system's<br/> communication architecture.<br/> It's responsible for several crucial operations:</p>
            <ul>
                <li>Receiving messages from the Android app and<br/> managing API endpoints.</li><br/>
                <li>Storing messages in databases and updating<br/> them based on analysis results.</li><br/>
                <li>Routing messages to the analysis engine,<br/> then sending the results back to the user via FCM.</li>
            </ul>
            </div>
            <PiArrowDown className='archi-arrow' />
            <div className='fourth-layer'>
                <PiArrowBendLeftDown className='archi-arrow' />
                <div className='rabbitmq'>RabbitMQ</div>
                <div className='hidden-right-rabbitmq'>
                <p><strong>RabbitMQ Module:</strong> This component manages the flow of data within our system.
                <br/>It performs the following key functions:</p>
                <ul>
                    <li>Handling job queues, ensuring efficient and orderly processing of messages.</li><br/>
                    <li>Facilitates reliable message delivery between the Flask server and the analysis engine.</li>
                </ul>

                </div>
                <PiArrowBendRightDown className='archi-arrow' />
            </div>
            <div className='fith-layer'>
                <PiArrowBendLeftDown className='archi-arrow' />
                <div className='fith-inner'>
                    <div className='analyzer'>Text Analyzer</div>
                    <div className='hidden-left-analyzer'>
                    <p> The core analytical engine<br/>
                        of our system, designed<br/>
                        to scrutinize SMS content for<br/>
                        potential smishing threats.<br/><br/>
                        Advanced techniques to evaluate<br/>
                        messages comprehensively, <br/>
                        ensure accurate threat detection<br/>
                        and assessment.<br/><br/>
                        The final score is calculated by this<br/>
                        module and returned to the server.
                        </p>

                    </div>
                    <PiArrowDown className='archi-arrow' />
                </div>
                <PiArrowBendRightDown id='fith-layer-arrow-right' className='archi-arrow' />
                <div className='link-analysis'>Link Analyzer</div>
                <div className='hidden-right-link'>
                <p>This dedicated module specializes in evaluating<br/>
                links contained within SMS messages.<br/><br/>
                Upon detecting a link, it extracts and verifies<br/>
                it against databases of known security vendors<br/>
                using external APIs.<br/><br/>
                Additionally, the module captures and provides<br/>
                a screenshot of the website, allowing for visual<br/>
                verification of the link's safety and context.</p>

                </div>
            </div>
            <div className='sixth-layer'>
                <div className='husitic'>Statistics-based Heuristic Analyser</div>
                <div className='hidden-bottom-husitic'>
                    <p>Operates by assigning weights to a predefined<br/> 
                    set of heuristics based on a statistical analysis of our dataset.<br/><br/>
                    Each message is scored by counting occurrences of these heuristics,<br/> 
                    with each heuristic weighted according to its relevance<br/> 
                    identified through past data.</p>

                </div>
                <div className='nn'>NN-based Heuristic Analyser</div>
                <div className='hidden-bottom-nn'>
                    <p>This module employs a trained perceptron model<br/>
                    to assign weights to the same set of heuristics used in the<br/> 
                    statistics-based analysis.<br/><br/>
                    The MLP model adapts and learns from our dataset to dynamically<br/>
                    adjust weights and compute a score for each message.</p>

                </div>
                <div className='ml'>Machine Learning Semantic Analyser</div>
                <div className='hidden-right-ml'>
                    <p>This module leverages a fine-tuned RoBERTa model,<br/>
                    to capture the numerical,  deep semantic representation<br/>
		    of the text of the message.<br/><br/>
		    This is then used to train a Neural Network to classify <br/>
		    SMS messages based on their semantic content.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Arcitecture