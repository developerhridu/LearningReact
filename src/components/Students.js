import React from 'react';

let Student = (props) => {
    return (
        <div className="student"> 
             <h3>Name: {props.name}</h3>
             <h3>Department: {props.department}</h3>
             <h3>StdId: {props.stdId}</h3>
        </div>
    );
}

export default Student;