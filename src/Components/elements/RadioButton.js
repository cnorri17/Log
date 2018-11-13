import React, { Component} from 'react';
import { Input, Button, Card, CardBody, radio3, FormInline} from 'mdbreact';


//wtfisthisguysaying

class InputPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radio3: false
    }
    this.onClick7 = this.onClick7.bind(this);
    this.onClick8 = this.onClick8.bind(this);
  }

  onClick7() {
    this.setState({radio3: 7});
  }

  onClick8() {
    this.setState({radio3: 8});
  }

  render () {
    return (
        
        <div>
            <FormInline>
                <Input onClick={this.onClick7} checked={this.state.radio3 === 7 ? true : false} label="Teacher" type="radio" id="radio7" />
                <Input onClick={this.onClick8} checked={this.state.radio3 === 8 ? true : false} label="Student" type="radio" id="radio8" />
            </FormInline>
        </div>
    );
  }
}export default InputPage;