import React, { Component} from 'react';
import './SideNavR.css'
import 'react-dropdown/style.css'



class SideNavR extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
          showMenu: false,
        }
    
      }


    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar2">
                    <div className="sidebar-header2">
                        <h4>Header</h4>
                    </div>
                    <ul className="list-unstyled components">
                        <li>
                            <button onClick={() => alert('Logging!')}>Log</button>
                        </li>
                        <li className='attendance'>
                            <h2>75%</h2>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default SideNavR;