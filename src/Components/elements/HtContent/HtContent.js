import React, { Component, Children } from 'react';
import './HtContent.css';
import StudentList from '../StudentList/StudentList';



class HtContent extends Component {
    state = {
        list: ["Steven", "John", "Amy", "Conner", "Caylor","Steven", "John", "Amy", "Conner", "Caylor","Steven", "John", "Amy", "Conner", "Caylor","Steven", "John", "Amy", "Conner", "Caylor"]
    }



    render() {
        return (
            <div className = 'divStuff'>
                <h1>User: {this.props.firstName} {this.props.lastName}</h1>
                <StudentList list={this.state.list}/>
                {/* {children} */}
                {/* {Children} */}
            </div>

        )
    }
}

export default HtContent;