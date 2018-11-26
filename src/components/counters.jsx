// imrc
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 4 },
            {id: 2, value: 0 },
            {id: 3, value: 0 },
            {id: 4, value: 0 }
        ]
     }
     
     handleDelete = (counterId) => {
        //  console.log('handle delete',counterId);
        const counters = this.state.counters.filter(c =>
            c.id !== counterId
        )
        this.setState({counters})
     }
    render() { 
        const {counters} = this.state;
        return ( 
        <div>
            {counters.map(counter => 
              <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id} />
            )}
        </div> 
        );
    }
}
 
export default Counters;