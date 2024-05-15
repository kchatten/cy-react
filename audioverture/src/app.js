import React from 'react';
import './css/app.css';
import Storyteller from './storyteller';
import AccentSounds from './accentsounds';


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', height: '90vh'}}>
                <h1 id="app-title"><span className='gradient'>AudiOverture</span></h1>
                <AccentSounds />
                <Storyteller />
            </div>
        )
    };
};

export default App;