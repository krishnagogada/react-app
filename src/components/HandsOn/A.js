// import React from 'react'
// import { Provider } from 'mobx-react';
// import { inject, observer } from 'mobx-react';
// import { observable } from 'mobx';


// class A extends React.Component {


//     render() {
//         return <Provider temp = "inject">
//                     <B hari='bala'/>
//                 </Provider>;
//     }
// }

// @inject("temp")
// @observer
// class B extends React.Component {
//     @observable name = '';

//     onChange = (event) => {
//         this.name = event.target.value;
//     }
//     render() {
//         const { temp, hari } = this.props;
//         return <div>{temp}<input onChange={this.onChange} defaultValue={this.name}/><C name={this.name}/></div>;
//     }
// }

// class C extends React.Component {
//     render() {
//         const { name } = this.props;
//         console.log(name);
//         return <div>{name}</div>;
//     }
// }
// export { A };
