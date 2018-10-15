import React, { Component} from 'react';
import './SideNavR.css'
import 'react-dropdown/style.css'
import AttendanceRate from '../AttendanceRate/AttendanceRate';



class SideNavR extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
          showMenu: false,
          rate: 75,
          homeType: this.props.homeValue
        }
        
      }

    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar2">
                    <div className="sidebar-header2">
                        <h4>{this.state.homeType}</h4>
                    </div>
                    <ul className="list-unstyled components">
                            <li>
                                <button onClick={() => alert('Logging!')}>Log</button>
                            </li>
                            <li>
                                <AttendanceRate rate={this.state.rate} />
                            </li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default SideNavR;