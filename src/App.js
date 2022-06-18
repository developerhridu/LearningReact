import React from 'react';
import './App.css';
import Student from './components/Students';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello Hridu</h1> */}
       <Student name= "Rahim" department="ECE" stdId= "1702100"/>
      <Student name= "Karim" department="CSE" stdId= "1702001"/>
       <Student name= "Hridu" department="EEE" stdId= "1702100"/>
      <Student name= "Rahim" department="ECE" stdId= "1702100"/>

      
      
    </div>
  );
  // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, "Hello World"), <Student />, <Test />);
}

// function Student() {
//   // return (
//   //   <div className="Student">
//   //     <h2>I am From Student</h2>
//   //   </div>
//   // )
//   return React.createElement('div', { className: 'Student'}, React.createElement('h2', null, "I am From Student"));
// }

// Class Component
// class Test extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1> I am From Class </h1>
//       </div>
//     )
//   }
// }



export default App;
