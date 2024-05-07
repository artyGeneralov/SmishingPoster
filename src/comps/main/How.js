
import '../../style/Sections.css'

const How = () => {
    return (
        <div className="how">
            <div className="content" id='step-one'>
                <div className="content-left">
                    <h2>Step 1: Huristics</h2>
                    <p>
                        Explain the heuristic algorithm we are using.

                        Show how the weights of the heuristics are calculated.
                    </p>
                </div>
                <div className="content-image" id='step-one-image'></div>
            </div>
            <div className="content" id='step-two'>
                <div className="content-image" id='step-two-image'></div>
                <div className="content-right">
                    <h2>Step 2: Machine Learning</h2>
                    <p>
                        Talk about the LM model we are using and how it is trained.
                    </p>
                </div>
            </div>
            <div className="content" id='step-three'>
                <div className="content-left">
                    <h2>Step 3: Link Analysis</h2>
                    <p>
                        Show how the link analysis is done and how the results are calculated.
                    </p>
                </div>
                <div className="content-image" id='step-three-image'></div>
            </div>
        </div>
    )
}

export default How