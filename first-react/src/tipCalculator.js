import React from 'react'

class TipCalculator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            bill: 0,
            tip: 0,
            tipAmount: 0,
            parties: 0,
            partyAmount: 0,
            finalValue: 0
        }
    }

    handleChangeParties = (event) => {
        const input = event.target.value
        this.setState({
            parties: input
        })
    }

    handleChangeBill = (event) => {
        const input = event.target.value
        this.setState({
            bill: input
        })
    }

    handleTip = (percent) => {
        this.setState({
            tip: percent
        })
    }

    handleCustom = () => {
       const cInput = document.getElementById("custom-input").value;
    
       this.setState({
            tip: parseFloat(cInput)
       })
    }

    handleCalculate = () => {

        const partyPays = parseFloat(this.state.bill / this.state.parties)
        console.log(partyPays)
        const tipAmount = parseFloat(partyPays * this.state.tip) / 100
        console.log(tipAmount)
        this.setState({
            partyAmount: partyPays,
            tipAmount: tipAmount,
            finalValue: (partyPays + tipAmount).toFixed(2)
        })
    }

    render() {
        return (
            <div id="background">
                <div id="calculator-base">
                    <div id="input-container">
                        <h5>Number of People splitting: {this.state.parties}</h5>
                        <input id="parties-input" onChange={this.handleChangeParties}id="parties" />

                        <h5>Bill Amount: {this.state.bill}</h5>
                        <input id="bill-input" onChange={this.handleChangeBill} id="bill" />

                        <h5>Tip Percentage = {this.state.tip}%</h5>
                        <div id="tip-percent-container">
                            <button onClick={() => this.handleTip(5)}>5%</button>
                            <button onClick={() => this.handleTip(10)}>10%</button>
                            <button onClick={() => this.handleTip(15)}>15%</button>
                            <button onClick={() => this.handleTip(20)}>20%</button>
                            <input id="custom-input"/>
                            <button onClick={this.handleCustom}>Custom</button>
                        </div>
                    </div>
                    <div id="output-container">
                        <h4>Output</h4>
                        <p>If {this.state.parties} people are splitting a bill of ${this.state.bill}, they each owe {this.state.finalValue}, (bill: {this.state.partyAmount} + tip: {this.state.tipAmount} )</p>
                        <button onClick={this.handleCalculate}>Calculate!</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default TipCalculator