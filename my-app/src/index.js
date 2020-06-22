import React from 'react';
import ReactDOM from 'react-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css'
import HealthProviderRegistration from "./HealthProviderRegistration.js";
import './FormStyle.css'

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

const handleInput = (value) => {
  return (
    value.replace(phoneRegex, '($1) $2-$3')
  )
}

  class RegistrationForm extends React.Component{
    constructor(props) {
      super(props)
  
      this.state = {
        value: ''
      }
    }

  render(){
    
    return(
      
      <Container className="p-3">
       <Jumbotron className="pb-1">
        <HealthProviderRegistration />
      </Jumbotron>
      </Container>

    );
  }  

}

ReactDOM.render(<RegistrationForm />, document.getElementById('root'));



