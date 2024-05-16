import React from 'react';

class AccentSounds extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            shortformLibrary: [],
        };
    }

    componentDidMount() {
        this.fetchShortformDB()
    }

    fetchShortformDB() {
        fetch('./shortformdb.json')
            .then(response => { return response.json() })
            .then(data => {
                this.setState({ shortformLibrary: data }, () => {
                    // console.log("SFL State:", this.state.shortformLibrary) DEBUG: Log the library.
                })
            })
    }

    playSound(title) {
        let audio = document.getElementById(title.title)
        let buttonClicked = document.getElementById(title.title + '-button');

        if (buttonClicked.classList.contains("active")) {
            buttonClicked.classList.remove("active");
        } else {
            buttonClicked.classList.add("active");
        };



        if (!audio.paused) {
            audio.pause();
        } else {
            audio.play();
        };
    }


    updateVol(element) {

        let slider = document.getElementById(element.title + "-slider");
        let audio = document.getElementById(element.title);
        let normalizedVolume = slider.value / 100;

        audio.volume = normalizedVolume;
    }

    renderShortformLibrary() {
        return this.state.shortformLibrary.map(element => (
            <div className='sound-container' key={element.title}>
                <button onClick={() => { this.playSound(element); }} id={element.title + '-button'} className="accent-sound">
                    {element.title}
                    <input onChange={(event) => this.updateVol(element)} onClick={(event)=> event.stopPropagation()} type="range" min="0" max="100" id={element.title + '-slider'}></input>
                </button>
                <audio id={element.title} src={element.src} loop="loop" />
            </div>
        ));
    }

    render() {
        return (
            <div id='accent-sound-container'>
                <img id='background-image' src='/moon.png' />
                {this.renderShortformLibrary()}
            </div>
        )
    };
};

export default AccentSounds;