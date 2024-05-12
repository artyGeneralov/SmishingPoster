
import About from './main/About'
import Arcitecture from './main/Arcitecture'
import Workflow from './main/Workflow'
import ModelEval from './main/ModelEval'
import Demo from './main/Demo'
import Navbar from './Navbar'
import { useState } from 'react';

import '../style/Main.css'

const Main = () => {
    const [chosenPage, changeChosenPage] = useState('About')
    const pagesDict = {
        'About': <About />,
        'Arcitecture': <Arcitecture />,
        'Workflow': <Workflow />,
        'ModelEval': <ModelEval />,
        'demo': <Demo />
    }

    return (
        <div className="main">
            <Navbar changeChosenPage={changeChosenPage} chosenPage={chosenPage} />
            {pagesDict[chosenPage]}
        </div>
    )
}

export default Main