import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        value: 0,
        tags: ['tag1','tag2','tag3']

     };

     handleIncrement = () => {
         console.log('Increment Clicked',this)
         this.setState({value: this.state.value + 1})
     }

    render() { 
        
        const { tags } = this.state;
        return ( 
            <React.Fragment>
                <span className={this.getBadgeClasses()} >{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {tags.map(tag =>
                        <li key={tag}>{tag}</li>
                    )}
                </ul>
            </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
       
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero': value;
        // return value === 0 ? <h1>Zero</h1>: value;
    }
}
 
export default Counter;