import React, { Component } from 'react';

import Student from './Student/Student';

class Students extends Component {
    render() {

        let students = this.props.students;

        //Sort by name
        let sortStudents = students.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });

        const marksSumMin = obj => Object.values(obj).reduce((acc, c) => {

            //Total
            acc['total'] += parseInt(c, 10);

            //To find min. of all marks
            if (!acc['min']) {
                acc['min'] = parseInt(c, 10);
            }
            else if (acc['min'] > parseInt(c, 10)) {
                acc['min'] = parseInt(c, 10);
            }
            return acc;
        }, { total: 0 });

        //Add pass or fail and total
        sortStudents.forEach(student => {
            student['total'] = marksSumMin(student.marks).total;
            marksSumMin(student.marks).min < 20 ? student['status'] = 'fail' : student['status'] = 'pass';
        });

        //Find topper marks
        const checkTopper = sortStudents.map(x => x.total).reduce((a, c) => Math.max(a, c));

        //Set topper
        sortStudents.forEach(student => {
            if (checkTopper === student.total) student['status'] = 'topper';
        });

        let studentList = '';

        studentList = sortStudents.map(student => {
            return <Student
                key={student.rollNumber}
                name={student.name}
                rollno={student.rollNumber}
                total={student.total}
                status={student.status}
            />
        });
        return (
            <table className="table">
                <caption>Students Result Board</caption>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Roll Number</th>
                        <th>Total Marks</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList}
                </tbody>
            </table>
        );
    }
};

export default Students;