
import '../style/Navbar.css'

const Navbar = (props) => {
    const { changeChosenPage, chosenPage } = props;

    return (
        <nav className='navbar'>
            <button id={chosenPage === 'About' ? 'chosen-page' : undefined}
                onClick={() => changeChosenPage('About')}>About</button>

            <button id={(chosenPage === 'Arcitecture' || chosenPage === 'Workflow' || chosenPage === 'Model') ?
                'chosen-page' : undefined} className='dropdown'>Arcitecture</button>

            <div class="dropdown-content">
                <button id='dropdown-btn' onClick={() => changeChosenPage('Arcitecture')}>System Arcitecture</button>
                <button id='dropdown-btn' onClick={() => changeChosenPage('Workflow')}>Workflow</button>
                <button id='dropdown-btn' onClick={() => changeChosenPage('ModelEval')}>Model Evaluation</button>
            </div>

            <button id={chosenPage === 'demo' ? 'chosen-page' : undefined}
                onClick={() => changeChosenPage('demo')}>Demo</button>
        </nav>
    )
}

export default Navbar