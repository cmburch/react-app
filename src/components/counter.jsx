import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        value: 0,
        tags: ['tag1','tag2','tag3']

     };

     renderTags = () => {
        const { tags } = this.state;

        if(tags.length === 0) return <p>There are no tags!</p>;
        return (   <ul>
                    {tags.map(tag =>
                        <li key={tag}>{tag}</li>
                    )}
                </ul>
                )
     }
    render() { 
        return ( 
            <React.Fragment>
                {/* compare a boolen && string the string will display if first condition is true */}
                {this.state.tags.length === 0 && "Please create a new tag" }
                {this.renderTags()}
            </React.Fragment>
        );
    }
 
}
 
export default Counter;