
import React from 'react';
import ReactDOM from 'react-dom/client';
import Great from './App';
// import { useState } from 'react';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </>
//   );
// }

root.render(
  <Great name='Adebolu' title='Obayemi' />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
