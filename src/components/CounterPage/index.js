import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

//import { div, div, div, div, div, div } from './styledComponent.js'
import stores from '../../stores';
const counterStore = stores.counterStore;

// type Props = {
//   initialCount: number
// }

// @observer
// class CounterPage extends Component<Props> {
//   functionCalling

//   handleIncrement = () => {
//     counterStore.incrementCounter()
//   }
// @observer
// class CounterPage extends Component {
//   handleIncrement = () => {
//     counterStore.incrementCounter()
//   }

//   handleDecrement = () => {
//     if (counterStore.count !== 0) {
//       counterStore.decrementCounter()
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>{counterStore.count}</h1>
//         <button onClick={this.handleIncrement}>+</button>
//         <button onClick={this.handleDecrement}>-</button>
//       </div>
//     )
//   }
// }

// export default CounterPage
@observer
class Counter extends Component {
    increment = () => {
        counterStore.increment();
    }
    decrement = () => {
        counterStore.decrement();
    }
    onChange = (event) => {
        counterStore.onChange(event.target.value);
    }
    render() {
        return (
            <div>
                <div>Counter</div>
                <div>
                    <div onClick={this.increment}>+</div>
                    <input type='text' value={counterStore.count} onChange={this.onChange}/>
                    <div onClick={this.decrement}>-</div>
                </div>
            </div>
        );
    }
}
export default Counter;
