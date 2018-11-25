import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        value: 0
     }
    render() { 
        return ( 
            <React.Fragment>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </React.Fragment>
        );
    }
    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero': value;
        // return value === 0 ? <h1>Zero</h1>: value;
    }
}
 
export default Counter;