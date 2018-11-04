import React, { Component } from 'react';

import Students from '../../components/Students/Students';

class Result extends Component {
    state = {
        students: [
          {
            "name": "rajiv",
            "marks": {
              "Maths": "18",
              "English": "21",
              "Science": "45"
            },
            "rollNumber": "KV2017-5A2"
          },
          {
            "name": "abhishek",
            "marks": {
              "Maths": "43",
              "English": "30",
              "Science": "37"
            },
            "rollNumber": "KV2017-5A1"
          },
          {
            "name": "zoya",
            "marks": {
              "Maths": "42",
              "English": "31",
              "Science": "50"
            },
            "rollNumber": "KV2017-5A3"
          }
        ]
      }

    render() {
        return (
            <div>
                <Students students={this.state.students} />
            </div>
        );
    }
};

export default Result;