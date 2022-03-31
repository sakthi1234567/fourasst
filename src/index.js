import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './Form'
// import Form from './controlledForm';
// import App from './App';
// import Cart from './pricecart';
//import PricingTable from './pricingTable';
import reportWebVitals from './reportWebVitals';
import Class from './controlledForm';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Cart /> */}
    {/* <PricingTable /> */}
     <Form /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


