import React from 'react';

class Display extends React.Component {
    constructor(props) {
        super(props)
    }

    toggleDisplay = () => {
        let storyteller = document.getElementById("storyteller");

        if(!storyteller.classList.contains("hidden")) {
            storyteller.classList.add("hidden");
        } else {
            storyteller.classList.remove("hidden");
        }
    }

    componentDidMount(){
        let display = document.getElementById("display");
        display.addEventListener("click", this.toggleDisplay)

    }

    render() {
        return (
            <div id="display">
                <div className="speaker-line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        )
    };
};

export default Display;