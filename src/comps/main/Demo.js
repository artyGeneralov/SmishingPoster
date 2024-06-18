
import '../../style/Sections.css'
import '../../style/VideoPlayer.css'
import demoVideo from '../../style/images/demo.mp4';
import { useState } from "react";

const Demo = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="demo">
            <div className="content" id='demo'>
                <div className="content-image" id='video'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>

                    <video controls={isHovered}>
                        <source src={demoVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="content-right" id='demo-content'>
                    <h2>App Demo</h2>
                    <p>
                        • Simplistic UI</br>
			• Classiffies correctly a variety of different SMS</br>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Demo