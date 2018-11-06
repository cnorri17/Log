import React, { Component} from 'react';
import { element } from 'prop-types';


class ClassName extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            classList: this.props.classList,

        }
    }
    populateClassList = () => {
        const classElements = this.state.classList.map((element,i) => {
            return (
                <div key = {i}>
                    {element}
                </div>
            )

        })
        return classElements;
    }

    render() {
        return (
            <div>
                {/* {populateClassList()} */}
            </div>
            
        );
    }
}

export default ClassName;