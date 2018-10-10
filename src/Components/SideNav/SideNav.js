import React, { Component} from 'react';
import './SideNav.css'
import 'react-dropdown/style.css'



class SideNavBar extends Component{
    constructor() {
        super();
        
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
      
    //onClick(){
        //this.setState({
            //collapse: !this.state.collapse,
        //});
    //}


    render() {
        return (
            
            <div class="wrapper">
                <nav id="sidebar">
                    <div class="sidebar-header">
                        <h4>Log Menu</h4>
                    </div>
                    <ul class="list-unstyled components">
                        <li>
                            <a href="#homeSubmenu">Home</a>
                        </li>
                        <li class="active"> 
                            <a href="#classListSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle" onClick={this.showMenu}>Class Lists</a>          
                        
                            {this.state.showMenu
                            ? (
                                <div className="ClassLists">
                                <li>
                                    <a href="#a">CS 4850</a>
                                </li>
                                <li>
                                    <a href="#b">CS 4514</a>
                                </li>
                                <li>
                                    <a href="#c">CS 4322</a>
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