import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        value: 0
     }

    render() { 

        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";

        return ( 
            <React.Fragment>
                {/* span.badge.badge-primary.m-2 */}
                <span className={classes} >{this.formatCount()}</span>
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