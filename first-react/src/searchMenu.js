import React from 'react';


class SearchMenu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchType: "name",
            value: "",
            database: [],
            filteredDatabase: []
        }
    }

    async fetchDatabase() {
        const response = await fetch("./db.json");
        const data = await response.json();
        this.setState({
            database: data
        });
    }

    createDisplay = () => {
        const dbDisplay = document.getElementById("db-display")
        dbDisplay.innerHTML = "";
        if (this.state.value === "") {
            for (let i = 0; i < this.state.database.length; i++) {
                const newEntry = this.state.database[i]

                const newDisplay = document.createElement("p")
                newDisplay.textContent = `Name: ${newEntry.name} | Position: ${newEntry.position} | Salary: ${newEntry.salary}`;

                dbDisplay.appendChild(newDisplay);
            }
        } else {
            for (let i = 0; i < this.state.filteredDatabase.length; i++) {
                const newEntry = this.state.filteredDatabase[i]

                const newDisplay = document.createElement("p")
                newDisplay.textContent = `Name: ${newEntry.name} | Position: ${newEntry.position} | Salary: ${newEntry.salary}`;

                dbDisplay.appendChild(newDisplay);
            }
        }
    }


componentDidMount = () => {
    this.fetchDatabase()
    setTimeout(this.createDisplay, 10)
}

handleReset = () => {
    this.setState({ value: "" })
    setTimeout(this.createDisplay, 10)
}

handleChangeDropdown = (event) => {
    const searchType = event.target.value;
    this.setState({ searchType }, () => {
    });
}

handleChangeInput = (event) => {
    this.setState({
        value: event.target.value
    });
}

handleSubmit = () => {
    this.filterDatabase(this.state.searchType, this.state.value)
    setTimeout(this.createDisplay, 10)
}

filterDatabase = (searchType, value) => {
    const filteredData = [];
    for (const entry of this.state.database) {
        if (entry[searchType].includes(value))
            filteredData.push(entry);

    }
    this.setState({ filteredDatabase: filteredData })
}


render() {
    return (
        <div>
            <div style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start"
            }}>
                <select id="dropdown" onChange={this.handleChangeDropdown}>
                    <option value="name">Name</option>
                    <option value="position">Position</option>
                </select>
                <input id="input" value={this.state.value} type="text" onChange={this.handleChangeInput} />

                <button id="submit" onClick={this.handleSubmit}>Submit</button>
                <button id="reset" onClick={this.handleReset}>Reset</button>
            </div>
            <h2>Database</h2>
            <hr style={{
                position: "relative",
                left: "-25%",
                width: "50%",
            }} />
            <div id="db-display">

            </div>
        </div>
    )
}
}


export default SearchMenu;       