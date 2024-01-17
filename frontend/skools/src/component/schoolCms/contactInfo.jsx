// import React from 'react';
// import { Form, FormGroup, Input, Button, Row, Col} from 'reactstrap';
// import Select from 'react-select';
// import {connect} from 'react-redux';
// import {saveInput} from '../../redux/cmsDetails/action';

// // import "../assets/css/BasicInfo.css"

// class BasicInfo extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             name: '',
//             address: '',
//             selectedLocation: '',
//             contactNumber: '',
//             website: '',
//             email: '',
//          }
//          this.handleAll = this.handleAll.bind(this);
//          this.handleLocation = this.handleLocation.bind(this);

//         }


//     handleAll = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     saveInput = e =>{
//         let contactObj ={
//             name: this.state.name,
//             address: this.state.address,
//             location: this.state.selectedLocation,
//             contactNumber: this.state.contactNumber,
//             website: this.state.website,
//             email: this.state.email}

//         let inputType = e.target.name;   
//         console.log(inputType) 

//         this.props.saveInput(contactObj, inputType)
//     }

//     handleLocation = location => {
//         this.setState({selectedLocation: location});
//     }

//     render() {
//         return (
//             <Form>
//                 <FormGroup>
//                     <Input
//                         type="text"
//                         name="name"
//                         placeholder="School Name"
//                         bsSize='lg'
//                         value={this.state.name}
//                         onChange={this.handleAll} />
//                 </FormGroup>

//                 <FormGroup>
//                 <Row>
//                 <Col>              
//                     <Input
//                         className='smText'
//                         type="text"
//                         name="contactNumber"
//                         placeholder="School Contact Number"
//                         bsSize='xs'
//                         value={this.state.contactNumber}
//                         onChange={this.handleAll} />
                       
               
//                 </Col>
//                 <Col>
               
//                     <Input
//                         className='smText'
//                         type="email"
//                         name="email"
//                         placeholder="School Contact Email"
//                         bsSize='xs'
//                         value={this.state.email}
//                         onChange={this.handleAll} />
               
//                 </Col>
//                 </Row>
//                 </FormGroup>

//                     <Input
//                         className='smText'
//                         type="text"
//                         name="website"
//                         placeholder="School Website (optional)"
//                         bsSize='xs'
//                         value={this.state.website}
//                         onChange={this.handleAll} />
               

//                 <FormGroup >
//                 <Row>
//                 <Col>
               
//                 <Input
//                     className='smText'
//                     type="textarea"
//                     name="address"
//                     placeholder="School Address"
//                     bsSize='xs'
//                     value={this.state.address}
//                     onChange={this.handleAll} />
             
//                 </Col>
//                 <Col>
               
//                 <Select 
//                 className='smText'
//                 placeholder='School District'
//                 value={this.state.selectedLocation}
//                 name="selectedLocation"
//                 width=""
//                 onChange={this.handleLocation}
//                 options={this.props.location}/>
                
//                 </Col>
//                 </Row>
//                 <div  style={{display: 'flex', justifyContent: 'flex-end', alignItem: 'center'}}> 
//                     <Button className='smText' name='contact' onClick={this.saveInput}>SAVE contact info</Button>
//                 </div>
//             </FormGroup>

//             </Form>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         location: state.search.location,
//     }
// };

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         saveInput: (contactObj, inputType) =>{
//             dispatch(saveInput(contactObj, inputType))
//         }
//     }
// }

// export const DetailsInput = connect(mapStateToProps, mapDispatchToProps)(BasicInfo);

import React, { useState } from 'react';
import { Form, FormGroup, Input, Button, Row, Col } from 'reactstrap';
import Select from 'react-select';
import { connect } from 'react-redux';
import { saveInput } from '../../redux/cmsDetails/action';

const BasicInfo = ({ location, saveInput }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');

  const handleAll = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'selectedLocation':
        setSelectedLocation(value);
        break;
      case 'contactNumber':
        setContactNumber(value);
        break;
      case 'website':
        setWebsite(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleLocation = (location) => {
    setSelectedLocation(location);
  };

  const saveInputData = (e) => {
    e.preventDefault();
    const contactObj = {
      name,
      address,
      location: selectedLocation,
      contactNumber,
      website,
      email,
    };
    const inputType = e.target.name;
    saveInput(contactObj, inputType);
  };

  return (
    <Form>
      <FormGroup>
        <Input
          type="text"
          name="name"
          placeholder="School Name"
          bsSize="lg"
          value={name}
          onChange={handleAll}
        />
      </FormGroup>

      <FormGroup>
        <Row>
          <Col>
            <Input
              className="smText"
              type="text"
              name="contactNumber"
              placeholder="School Contact Number"
              bsSize="xs"
              value={contactNumber}
              onChange={handleAll}
            />
          </Col>
          <Col>
            <Input
              className="smText"
              type="email"
              name="email"
              placeholder="School Contact Email"
              bsSize="xs"
              value={email}
              onChange={handleAll}
            />
          </Col>
        </Row>
      </FormGroup>

      <Input
        className="smText"
        type="text"
        name="website"
        placeholder="School Website (optional)"
        bsSize="xs"
        value={website}
        onChange={handleAll}
      />

      <FormGroup>
        <Row>
          <Col>
            <Input
              className="smText"
              type="textarea"
              name="address"
              placeholder="School Address"
              bsSize="xs"
              value={address}
              onChange={handleAll}
            />
          </Col>
          <Col>
            <Select
              className="smText"
              placeholder="School District"
              value={selectedLocation}
              name="selectedLocation"
              width=""
              onChange={handleLocation}
              options={location}
            />
          </Col>
        </Row>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItem: 'center' }}>
          <Button className="smText" name="contact" onClick={saveInputData}>
            SAVE contact info
          </Button>
        </div>
      </FormGroup>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.search.location,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveInput: (contactObj, inputType) => {
      dispatch(saveInput(contactObj, inputType));
    },
  };
};

export const DetailsInput = connect(mapStateToProps, mapDispatchToProps)(BasicInfo);