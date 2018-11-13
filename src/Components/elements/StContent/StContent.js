import React, {Component} from 'react';
import './StContent.css';

class StContent extends Component {
    state = {
        classList: ['class1-section1', 'class2-section2','class1-section2']
    }

    renderClasses = () => {
        const classElements = classList.map( (element, i) => {
            return (
                <div key={i}>
                    {element}
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                Student Content
            </div>
            
        )
    }
}

export default StContent;