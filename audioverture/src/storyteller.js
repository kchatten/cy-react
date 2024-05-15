import React from 'react';
import Display from './storytellerdisplay';
import Library from './library';



class Storyteller extends React.Component {
    constructor(props) {
        super(props)
        
        this.updateVol = this.updateVol.bind(this);
    }

    componentDidMount() {
        let slider = document.getElementById("vol-slider")
        slider.addEventListener("input", this.updateVol)
    }

    openVol() {
        let container = document.getElementById("vol-container");
        if(container.classList.contains("hidden")){
            container.classList.remove("hidden")
        } else {
            container.classList.add("hidden")
        }
    }

    updateVol(event) {
        let audio = Library.getPlayer();

        let normalizedVolume = event.target.value / 100;
        audio.volume = normalizedVolume;

        document.getElementById("vol-slider").value = event.target.value;
    }

    handlePlay() {
        let audio = Library.getPlayer();
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    render() {
        return (
            <div id="storyteller">
                <div id="media-control-panel">
                    <button onClick={() => this.openVol()}>
                        <div id="vol-container" className="hidden">
                            <p style={{'transform': 'rotate(90deg)'}}>0</p>
                            <input onChange={(event)=> this.updateVol(event)} onClick={(event)=> event.stopPropagation()} type="range" min="0" max="100" id="vol-slider"></input>
                            <p style={{'transform': 'rotate(90deg)'}}>100</p>
                        </div>
                        Vol
                    </button>
                    <button onClick={() => this.handlePlay()}>|▷</button>
                </div>
                <Display />
                <Library />
            </div>
        )
    };
};

export default Storyteller;

