import React from 'react';

const Student = (props) => {
    return (
        <tr className={props.status}>
            <td>{props.name}</td>
            <td>{props.rollno}</td>
            <td>{props.total}</td>
            <td>{props.status}</td>
        </tr>
    );
};

export default Student;