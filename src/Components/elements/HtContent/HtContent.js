import React, { Component, Children } from 'react';
import './HtContent.css';
import StudentList from '../StudentList/StudentList';
import ClassDisplay from '../../Home/ClassDisplay';



class HtContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: ["Steven", "John", "Amy", "Conner", "Caylor","Steven", "John", "Amy", "Conner", "Caylor","Steven", "John", "Amy", "Conner", "Caylor","Steven", "John", "Amy", "Conner", "Caylor"]
        }
    }




    render() {
        return (
            <div className = 'divStuff'>
                <h1>User: {this.props.firstName} {this.props.lastName}</h1>
                {/* <StudentList list={this.state.list}/> */}
                {/* {children} */}
                {this.props.children.map( (doc,key) => {
                    return (
                        <ClassDisplay
                            key={key}
                            name={doc.className}
                            section={doc.section}
                            classID={doc.classID}
                            rate={doc.attendanceRate}
                        />
                    )
                })}
            </div>

        )
    }
}

export default HtContent;