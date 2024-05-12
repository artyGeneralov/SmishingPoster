
import '../../style/Sections.css'

const About = () => {
    return (
        <div className="About">
            <div className="content" id='problem'>
                <div className="content-left">
                    <h2>Problem</h2>
                    <p>
                        Description of the problem we are trying to solve.

                        Talk about how smishing is a growing problem and how it is affecting people.

                        Talk about how people are not aware of the dangers of smishing and how they can be easily fooled.
                    </p>
                </div>
                <div className="content-image" id='problem-image'></div>
            </div>
            <div className="content" id='solution'>
                <div className="content-image" id='solution-image'></div>
                <div className="content-right">
                    <h2>Our Solution & Goals</h2>
                    <p>
                        Description of our solution and goals.

                        Talk about how our solution can help people avoid being scammed by smishing.

                        Talk about the user-friendly approach and in a few short words about the underlying mechanism.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About