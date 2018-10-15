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
                        <h4>Log Menu</h4>
                    </div>
                    <ul className="list-unstyled components">
                        <li>
                            <a href="#homeSubmenu">Home</a>
                        </li>
                        <li className="active"> 
                            <a href="#classListSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" onClick={this.showMenu}>Class Lists</a>          
                        
                            {this.state.showMenu
                            ? (
                                <div className="ClassLists">
                                    <li>
                                        <a href="#a">Get class data</a>
                                    </li>
                                    <li>
                                        <a href="#b">From</a>
                                    </li>
                                    <li>
                                        <a href="#c">Database</a>
                                    </li>      
                                </div>
                            )
                            : (
                                null
                            )}
                            
                            </li>
                        <li>
                            <a href="#">Aother menu</a>
                        </li>
                        <li>
                            <a href="#">The other menu</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default SideNavBar;