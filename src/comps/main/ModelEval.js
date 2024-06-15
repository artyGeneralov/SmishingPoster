import '../../style/ModelEval.css'

const ModelEval = () => {
    return (
        <div className="model-eval">
            <div className="huristic-model">
                <h1>Heuristic Model</h1>
                <h2>Key Smishing Features of the Heuristic Model:</h2>
                <ul>
                    <li>Has link</li>
                    <li>Contains call to action</li>
                    <li>Reference to money</li>
                    <li>Contains urgency related keywords</li>
                    <li>Contains suspicious keywords </li>
                    <li>Message length (Quantitative only feature)</li>
                </ul>
                <h2>Model Evaluation:</h2>
                <table>
                    <thead>
                        <th>Model</th>
                        <th>Precision</th>
                        <th>Recall</th>
                        <th>Accuracy</th>
                        <th>F1</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='focus'>Heuristic statistical model</td>
                            <td>0.74</td>
                            <td>0.9</td>
                            <td>0.78</td>
                            <td className='focus'>0.84</td>
                        </tr>
                        <tr>
                            <td className='focus'>Heuristic neural network</td>
                            <td>0.79</td>
                            <td>0.82</td>
                            <td>0.76</td>
                            <td className='focus'>0.81</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="ll-model">
                <h1>Large Language Model</h1>
                <h2>Model Evaluation:</h2>
                <table>
                    <thead>
                        <th>Model</th>
                        <th>Precision</th>
                        <th>Recall</th>
                        <th>Accuracy</th>
                        <th>F1</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='focus'>LM based neural network</td>
                            <td>0.92</td>
                            <td>0.91</td>
                            <td>0.89</td>
                            <td className='focus'>0.91</td>
                        </tr>
                        <tr>
                            <td className='focus'>Standalone RoBERTa</td>
                            <td>0.2070</td>
                            <td>1</td>
                            <td>0.2071</td>
                            <td className='focus'>0.3430</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ModelEval