import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Appointment from './models/appointment.model'


fetch("http://localhost:3000/query", { 
  method: 'POST', 
  headers: { 'Content-Type': 'application/json' }, 
  body: JSON.stringify({ query: 'SELECT * from naikj.f21_s001_13_appointment where ROWNUM <= 5'})
}).then(res => res.json())
.then(
  (result) => { result.rows.forEach(data => { console.log(new Appointment(data)); }) },
  (error) => { console.error(error); }
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
