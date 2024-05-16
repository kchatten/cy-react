import React from 'react';
import Display from './storytellerdisplay.js';

class Library extends React.Component {

    static mediaPlayerLF = document.createElement("audio");

    constructor(props) {
        super(props);

        this.state = {
            longformLibrary: [],
        };
    }

    static getTitle(){
        let titleToReturn = Library.mediaPlayerLF.id;
        return titleToReturn;
    }

    static getPlayer() {
        let objToReturn = Library.mediaPlayerLF;
        return objToReturn;
    }

    componentDidMount() {
        this.fetchLongformDB()
    }

    fetchLongformDB() {
        fetch("/longformdb.json")
            .then(response => { return response.json() })
            .then(data => {
                this.setState({ longformLibrary: data }, () => {
                    // console.log("LFL State:", this.state.longformLibrary) DEBUGL: Log the library.
                });
            })
    }

    changeLongform(title) {

        let buttonClicked = document.getElementById(title.title);

        let arrayToCheck = document.getElementById("library-carousel")

        let buttonsToCheck = arrayToCheck.querySelectorAll("button")

        buttonsToCheck.forEach(button => {
            if (button.classList.contains("active")) {
                button.classList.remove("active");
            }
        });

        buttonClicked.classList.add("active");

        if (title.title === Library.mediaPlayerLF.id) {
            Library.mediaPlayerLF.pause();
        } else {
            Library.mediaPlayerLF.id = title.title;
            Library.mediaPlayerLF.src = title.src;
            Library.mediaPlayerLF.play();
        }
    }

    renderLongformLibrary() {
        return this.state.longformLibrary.map(element => (
            <button id={element.title} onClick={() => this.changeLongform(element)} className="longform" key={element.title}>
                <div className='stamp'>
                <p>{element.title}</p>
                <p>by: {element.composer}</p>
                </div>
            </button>
        ));
    }

    render() {
        return (
            <div id="library-carousel">
                {this.renderLongformLibrary()}
            </div>
        )
    };
};

export default Library;