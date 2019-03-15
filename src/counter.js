import React from 'React';


class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count : 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment(){
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement(){
        this.setState({
            count: this.state.count - 1
        })
    }

    reset() {
        this.setState({
            count : this.state.count = 0
        })
    }
    render() {
        return (<div className="main">
            <h2>Count : {this.state.count}</h2>
            <button className="generic-button" onClick={this.increment}>Increment</button>
            <button className="generic-button" onClick={this.decrement}>Decrement</button>
            <button className="generic-button" onClick={this.reset}>Reset</button>
        </div>)
    }
}

export default Counter;