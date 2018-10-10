import React, { Component} from 'react';
import './SideNav.css'


class SideNavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <div class="wrapper">
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h4>Log Menu</h4>
                </div>
                <ul class="list-unstyled components">
                    <li class="active">
                        <a href="#homeSubmenu">Home</a>
                    </li>
                    <li class="dropdown"> 
                        <a href="#classListSubmenu" data-toggle="collapse" class="dropdown-toggle" aria-expanded="true" >Class List</a>          
                            <ul class="collapse list-unstyled" id="classListSubmenu">
                                <li>
                                    <a href="#">CS 4850</a>
                                </li>
                                <li>
                                    <a href="#">CS 4514</a>
                                </li>
                                <li>
                                    <a href="#">CS 4322</a>
                                </li>
                            </ul>
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