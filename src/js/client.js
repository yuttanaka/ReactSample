import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

// class Layout extends React.Component {
//   constructor() {
//     super();
//     this.name = 'Tsutomu';
//   };
//   render() {
//     return (
//       <h1>It's {this.name}!</h1>
//     );
//   };
// };

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);