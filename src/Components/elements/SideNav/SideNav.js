import React, { Component} from 'react';
import './SideNav.css'
import 'react-dropdown/style.css'



class SideNavBar extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
          showMenu: false,
        }
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
      }

    showMenu(event) {
        event.preventDefault();
    
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }

      closeMenu() {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
      }

    render() {
        return (
            <div className="container">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h4>Class Lists</h4>
                    </div>
                    <ul className="list-unstyled components">
                        <li className="active"> 
                            <a href="#classListSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" onClick={this.showMenu}>CS 1301</a>          
                        
                            {this.state.showMenu
                            ? (
                                <div className="ClassLists">
                                    <li>
                                        <a href="/teacher">Section 1</a>
                                    </li>
                                    <li>
                                        <a href="#b">Section 2</a>
                                    </li>
                                    <li>
                                        <a href="#c">Section 3</a>
                                    </li>      
                                </div>
                            )
                            : (
                                null
                            )}
                            
                            </li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default SideNavBar;