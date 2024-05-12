
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Sed do eiusmod tempor incididunt ut labore. </p>
                <p>Sed do eiusmod tempor incididunt ut labore. </p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Sed do eiusmod tempor incididunt ut labore. </p>
                <p>Sed do eiusmod tempor incididunt ut labore. </p>
            </div>
            <PiArrowDown className='archi-arrow' />
            <div className='fourth-layer'>
                <PiArrowBendLeftDown className='archi-arrow' />
                <div className='rabbitmq'>RabbitMQ</div>
                <div className='hidden-right-rabbitmq'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Sed do eiusmod tempor incididunt ut labore. </p>
                    <p>Sed do eiusmod tempor incididunt ut labore. </p>
                </div>
                <PiArrowBendRightDown className='archi-arrow' />
            </div>
            <div className='fith-layer'>
                <PiArrowBendLeftDown className='archi-arrow' />
                <div className='fith-inner'>
                    <div className='analyzer'>Text Analyzer</div>
                    <div className='hidden-left-analyzer'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Sed do eiusmod tempor incididunt ut labore. </p>
                        <p>Sed do eiusmod tempor incididunt ut labore. </p>
                    </div>
                    <PiArrowDown className='archi-arrow' />
                </div>
                <PiArrowBendRightDown id='fith-layer-arrow-right' className='archi-arrow' />
                <div className='link-analysis'>Link Analyzer</div>
                <div className='hidden-right-link'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Sed do eiusmod tempor incididunt ut labore. </p>
                    <p>Sed do eiusmod tempor incididunt ut labore. </p>
                </div>
            </div>
            <div className='sixth-layer'>
                <div className='husitic'>Preset Huristic Algorythm</div>
                <div className='hidden-bottom-husitic'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Sed do eiusmod tempor incididunt ut labore. </p>
                    <p>Sed do eiusmod tempor incididunt ut labore. </p>
                </div>
                <div className='nn'>Neural Network</div>
                <div className='hidden-bottom-nn'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Sed do eiusmod tempor incididunt ut labore. </p>
                    <p>Sed do eiusmod tempor incididunt ut labore. </p>
                </div>
                <div className='ml'>Machine Learning</div>
                <div className='hidden-right-ml'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Sed do eiusmod tempor incididunt ut labore. </p>
                    <p>Sed do eiusmod tempor incididunt ut labore. </p>
                </div>
            </div>
        </div>
    )
}

export default Arcitecture