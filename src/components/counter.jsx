import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        value: 0
     }

     style = {
         fontSize: 50,
         fontWeight: "bold"
     }
    render() { 
        return ( 
            <React.Fragment>
                {/* span.badge.badge-primary.m-2 */}
                <span style={this.style} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
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