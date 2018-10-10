import React, { Component} from 'react';
import './HtContent.css';
import StudentList from '../StudentList/StudentList';



class HtContent extends Component {
    state = {
        list: ["Steven", "John", "Amy", "Conner", "Caylor","Steven", "John", "Amy", "Conner", "Caylor","Steven", "John", "Amy", "Conner", "Caylor","Steven", "John", "Amy", "Conner", "Caylor"]
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        empty
                    </div>
                    <div className="col-2">
                        <StudentList list={this.state.list}/>
                    </div>
                    <div className="col-1">
                        <button onClick={() => alert('Logging!')}>Log</button>
                        <div className='attendance'>
                            <h2>75%</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HtContent;