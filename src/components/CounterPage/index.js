import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { CounterApp, CounterHeading, UserInputAndButtons, IncreamentButton, UserCounterInput, DecreamentButton } from './styledComponent.js'
import stores from '../../stores';
const counterStore = stores.counterStore;

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
            <CounterApp>
                <CounterHeading>Counter</CounterHeading>
                <UserInputAndButtons>
                    <IncreamentButton onClick={this.increment}>+</IncreamentButton>
                    <UserCounterInput type='text' value={counterStore.count} onChange={this.onChange}/>
                    <DecreamentButton onClick={this.decrement}>-</DecreamentButton>
                </UserInputAndButtons>
            </CounterApp>
        );
    }
}
export default Counter;
