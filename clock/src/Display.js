import React, { Component } from 'react';

class Display extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { timeLeft, format } = this.props;
        return <div>
            <label>{format(timeLeft)[0]}</label> <br />
            <label>{format(timeLeft)[1]}</label> <br />
            <label>{format(timeLeft)[2]}</label>
        </div>
    }
}

export default Display;