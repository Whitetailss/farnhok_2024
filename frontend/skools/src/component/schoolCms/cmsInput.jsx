import React, { Component } from 'react';
import {Row, Col, Input, Button, Form} from 'reactstrap';
import {connect} from 'react-redux';
import {saveInput} from '../../redux/cmsDetails/action';

class StudentAndTuition extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isAM: false,
            isPM: false,
            isFullDay: false,
            isLongFullDay: false,
            noOfStudentAM: '',
            tuitionAM: '',
            noOfStudentPM: '',
            tuitionPM: '',
            noOfStudentFD:'',
            tuitionFD: '',
            noOfStudentLFD: '',
            tuitionLFD: '',
            hasSubsidy: false,
            subsidyAmt: '',
            noOfTeacher: ''
         }

         this.handleAll = this.handleAll.bind(this)
         this.isAM = this.isAM.bind(this)
         this.isPM = this.isPM.bind(this)
         this.isFullDay = this.isFullDay.bind(this)
         this.isLongFullDay = this.isLongFullDay.bind(this)
         this.hasSubsidy = this.hasSubsidy.bind(this)
         this.saveDetails = this.saveDetails.bind(this)
        }

    handleAll = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    isAM =() => {
        this.setState(prevState => ({

           isAM:!prevState.isAM
        }))
    }

    isPM =() => {
        this.setState(prevState => ({

           isPM:!prevState.isPM
        }))
    }

    isFullDay =() => {
        this.setState(prevState => ({

           isFullDay:!prevState.isFullDay
        }))
    }

    isLongFullDay =() => {
        this.setState(prevState => ({

           isLongFullDay:!prevState.isLongFullDay
        }))
    }

    hasSubsidy = () => {
        this.setState(prevState => ({
            hasSubsidy: !prevState.hasSubsidy
        }))
    }

    saveDetails = e =>{
        // let contactObj ={
        //     // isAM: this.state.isAM,
        //     // isPM: this.state.isPM,
        //     // isFullDay: this.state.isFullDay,
        //     // isLongFullDay: this.state.isLongFullDay,
        //     // noOfStudentAM: this.state.noOfStudentAM,
        //     // tuitionAM: this.state.tuitionAM,
        //     // noOfStudentPM: this.state.noOfStudentPM,
        //     // tuitionPM: this.state.tuitionPM,
        //     // noOfStudentFD: this.state.noOfStudentFD,
        //     // tuitionFD: this.state.tuitionFD,
        //     // noOfStudentLFD: this.state.noOfStudentLFD,
        //     // tuitionLFD: this.state.tuitionLFD,
        //     // hasSubsidy: this.state.hasSubsidy,
        //     // subsidyAmt: this.state.subsidyAmt


        let inputType = e.target.name;
        console.log(inputType, this.state)

        this.props.saveInput(this.state, inputType)
    }


    render() { 
        return ( 
            <div className='smText'>
            <Form>
            <Row> 
                <Col>
                <h6>Classes offered (please check)</h6>
                </Col>
            </Row>

            <Row>
                <Col >
                    <div style={{paddingLeft: '5vw'}}>
                        <Input 

                            type="checkbox" 
                            id="has_am" 
                            name="has_am" 
                            onClick={this.isAM}/>
                        <label  className='smText' htmlFor='has_am'>AM</label> 
                    </div>
                </Col>
                <Col>
                    <div style={{paddingLeft: '5vw'}}>
                        <Input 
                            className='smText'  
                            type="checkbox" 
                            id="has_pm" 
                            name="has_pm" 
                            onClick={this.isPM}/>
                        <label  className='smText' htmlFor="has_pm">PM</label> 
                    </div>
                    </Col> 
                    <Col>
                    <div style={{paddingLeft: '5vw'}}>
                        <Input   className='smText' type="checkbox" id="has_full_day" name="has_full_day" onClick={this.isFullDay}/>
                        <label  className='smText' htmlFor="has_pm">Full-day</label> 
                    </div>
                </Col> 
                <Col>
                <div style={{paddingLeft: '5vw'}}>
                    <Input   className='smText' type="checkbox" id="has_long_full_day" name="has_long_full_day" onClick={this.isLongFullDay}/>
                    <label  className='smText' htmlFor="has_pm">Long full -day</label> 
                </div>
            </Col>
            </Row>

            {this.state.isAM ? (
            <Row>
                <Col>
                <div style={{paddingLeft:'3vw'}}>AM Details: </div>

                </Col>
                <Col>
                    <Input className='smText' type="text" name="noOfStudentAM" placeholder="No. of student" value={this.state.noOfStudentAM} onChange={this.handleAll}/>
                </Col>
                <Col>
                    <Input className='smText'  type="text" name="tuitionAM" placeholder="Tuition fee" value={this.state.tuitionAM} onChange={this.handleAll}/>
                </Col>
            </Row>) : (<div> </div>)}

            <Row>


            </Row> 
            {this.state.isPM ? (
            <Row>
            <Col>
            <div style={{paddingLeft:'3vw'}}>PM Details: </div>
            </Col>
                <Col>                   
                    <Input 
                        className='smText'
                        type="text" 
                        name="noOfStudentPM" 
                        placeholder="No. of student" 
                        value={this.state.noOfStudentPM} 
                        onChange={this.handleAll}/>
                </Col>

                <Col>
                    <Input 
                        className='smText'
                        type="text" 
                        name="tuitionPM" 
                        placeholder="Tuition fee" 
                        value={this.state.tuitionPM} 
                        onChange={this.handleAll}/>
                </Col>
            </Row>) : (<div> </div>)} 


            <Row>

            </Row>
            {this.state.isFullDay ? (
            <Row>
            <Col>
            <div style={{paddingLeft:'3vw'}}>Full-day Details: </div>
            </Col>
                <Col>       
                    <Input   className='smText' type="text" name="noOfStudentFD" placeholder="No. of student" value={this.state.noOfStudentFD} onChange={this.handleAll}/>
                </Col>
                <Col>
                    <Input   className='smText' type="text" name="tuitionFD" placeholder="Tuition fee" value={this.state.tuitionFD} onChange={this.handleAll}/>
                </Col>
            </Row>) : (
                <div> </div> 
            )} 


            <Row>

            </Row>
            {this.state.isLongFullDay? (
            <Row>
            <Col>
            <div style={{paddingLeft:'3vw'}}>Long full-day Details: </div>
            </Col>
                <Col>       
                    <Input className='smText' type="text" name="noOfStudentLFD" placeholder="No. of student" value={this.state.noOfStudentLFD} onChange={this.handleAll}/>
                </Col>
                <Col>
                    <Input className='smText' type="text" name="tuitionLFD" placeholder="Tuition fee" value={this.state.tuitionLFD} onChange={this.handleAll}/>
                </Col>
            </Row>) : (
               <div> </div>
            )} 


            <Row>
                <Col>
                    <div style={{paddingLeft: '5vw'}}>
                        <Input   className='smText' type="checkbox" name="hasSubsidy" onClick={this.hasSubsidy}/>
                        <label  className='smText' htmlFor="hasSubsidy"> Subsidy </label>
                    </div>
                </Col>{this.state.hasSubsidy ? (

                <Col>
                    <Input className='smText' type="text" name="subsidyAmt" placeholder="subsidy amount" value={this.state.subsidyAmt} onChange={this.handleAll}/> 
                </Col>
            ) : (<div> </div>)}
            </Row>
                    <Row>
                        <Col>
                        <Input className='smText' type="text" name="noOfTeacher" placeholder="No. of Teachers" value={this.state.noOfTeacher} onChange={this.handleAll} />
                        </Col>
                    </Row>
                <div  style={{display: 'flex', justifyContent: 'flex-end', alignItem: 'center'}}> 
                    <Button className='smText' name='other' onClick={this.saveDetails}>SAVE other details</Button>
                </div>
                </Form>
            </div> 
         );
    }

}

const mapDispatchToProps = (dispatch) =>{
    return {
        saveInput: (contactObj, inputType) => {
            dispatch(saveInput(contactObj, inputType))
        }
    }
}

export const OtherDetails = connect(null, mapDispatchToProps)(StudentAndTuition);

// import React, { useState } from 'react';
// import { Row, Col, Input, Button, Form } from 'reactstrap';
// import { connect } from 'react-redux';
// import { saveInput } from '../../redux/cmsDetails/action';

// const StudentAndTuition = ({ saveInput }) => {
//     const [isAM, setAM] = useState(false);
//     const [isPM, setPM] = useState(false);
//     const [isFullDay, setFullDay] = useState(false);
//     const [isLongFullDay, setLongFullDay] = useState(false);
//     const [noOfStudentAM, setNoOfStudentAM] = useState('');
//     const [tuitionAM, setTuitionAM] = useState('');
//     const [noOfStudentPM, setNoOfStudentPM] = useState('');
//     const [tuitionPM, setTuitionPM] = useState('');
//     const [noOfStudentFD, setNoOfStudentFD] = useState('');
//     const [tuitionFD, setTuitionFD] = useState('');
//     const [noOfStudentLFD, setNoOfStudentLFD] = useState('');
//     const [tuitionLFD, setTuitionLFD] = useState('');
//     const [hasSubsidy, setHasSubsidy] = useState(false);
//     const [subsidyAmt, setSubsidyAmt] = useState('');
//     const [noOfTeacher, setNoOfTeacher] = useState('');

//     const handleAll = (e) => {
//         const { name, value } = e.target;
//         switch (name) {
//             case 'noOfStudentAM':
//                 setNoOfStudentAM(value);
//                 break;
//             case 'tuitionAM':
//                 setTuitionAM(value);
//                 break;
//             case 'noOfStudentPM':
//                 setNoOfStudentPM(value);
//                 break;
//             case 'tuitionPM':
//                 setTuitionPM(value);
//                 break;
//             case 'noOfStudentFD':
//                 setNoOfStudentFD(value);
//                 break;
//             case 'tuitionFD':
//                 setTuitionFD(value);
//                 break;
//             case 'noOfStudentLFD':
//                 setNoOfStudentLFD(value);
//                 break;
//             case 'tuitionLFD':
//                 setTuitionLFD(value);
//                 break;
//             case 'subsidyAmt':
//                 setSubsidyAmt(value);
//                 break;
//             case 'noOfTeacher':
//                 setNoOfTeacher(value);
//                 break;
//             default:
//                 break;
//         }
//     };

//     const toggleCheckbox = (setState) => {
//         setState((prevState) => !prevState);
//     };

//     const isAM = () => {
//         toggleCheckbox(setAM);
//     };

//     const isPM = () => {
//         toggleCheckbox(setPM);
//     };

//     const isFullDay = () => {
//         toggleCheckbox(setFullDay);
//     };

//     const isLongFullDay = () => {
//         toggleCheckbox(setLongFullDay);
//     };

//     const hasSubsidy = () => {
//         toggleCheckbox(setHasSubsidy);
//     };

//     const saveDetails = (e) => {
//         let inputType = e.target.name;
//         console.log(inputType, {
//             isAM,
//             isPM,
//             isFullDay,
//             isLongFullDay,
//             noOfStudentAM,
//             tuitionAM,
//             noOfStudentPM,
//             tuitionPM,
//             noOfStudentFD,
//             tuitionFD,
//             noOfStudentLFD,
//             tuitionLFD,
//             hasSubsidy,
//             subsidyAmt,
//             noOfTeacher,
//         });

//         saveInput(
//             {
//                 isAM,
//                 isPM,
//                 isFullDay,
//                 isLongFullDay,
//                 noOfStudentAM,
//                 tuitionAM,
//                 noOfStudentPM,
//                 tuitionPM,
//                 noOfStudentFD,
//                 tuitionFD,
//                 noOfStudentLFD,
//                 tuitionLFD,
//                 hasSubsidy,
//                 subsidyAmt,
//                 noOfTeacher,
//             },
//             inputType
//         );
//     };

//     return (
//         <div className='smText'>
//             <Form>
//                 <Row>
//                     <Col>
//                         <h6>Classes offered (please check)</h6>
//                     </Col>
//                 </Row>

//                 <Row>
//                     <Col>
//                         <div style={{ paddingLeft: '5vw' }}>
//                             <Input
//                                 type='checkbox'
//                                 id='has_am'
//                                 name='has_am'
//                                 onClick={isAM}
//                             />
//                             <label className='smText' htmlFor='has_am'>
//                                 AM
//                             </label>
//                         </div>
//                     </Col>
//                     <Col>
//                         <div style={{ paddingLeft: '5vw' }}>
//                             <Input
//                                 className='smText'
//                                 type='checkbox'
//                                 id='has_pm'
//                                 name='has_pm'
//                                 onClick={isPM}
//                             />
//                             <label className='smText' htmlFor='has_pm'>
//                                 PM
//                             </label>
//                         </div>
//                     </Col>
//                     <Col>
//                         <div style={{ paddingLeft: '5vw' }}>
//                             <Input
//                                 className='smText'
//                                 type='checkbox'
//                                 id='has_fd'
//                                 name='has_fd'
//                                 onClick={isFullDay}
//                             />
//                             <label className='smText' htmlFor='has_fd'>
//                                 Full Day
//                             </label>
//                         </div>
//                     </Col>
//                     <Col>
//                         <div style={{ paddingLeft: '5vw' }}>
//                             <Input
//                                 className='smText'
//                                 type='checkbox'
//                                 id='has_lfd'
//                                 name='has_lfd'
//                                 onClick={isLongFullDay}
//                             />
//                             <label className='smText' htmlFor='has_lfd'>
//                                 Long Full Day
//                             </label>
//                         </div>
//                     </Col>
//                 </Row>

//                 <Row>
//                     <Col>
//                         <h6>Number of Students</h6>
//                     </Col>
//                 </Row>

//                 {isAM && (
//                     <Row>
//                         <Col>
//                             <div style={{ paddingLeft: '5vw' }}>
//                                 <Input
//                                     className='smText'
//                                     type='text'
//                                     id='noOfStudentAM'
//                                     name='noOfStudentAM'
//                                     value={noOfStudentAM}
//                                     onChange={handleAll}
//                                 />
//                                 <label className='smText' htmlFor='noOfStudentAM'>
//                                     AM
//                                 </label>
//                             </div>
//                         </Col>
//                     </Row>
//                 )}

//                 {isPM && (
//                     <Row>
//                         <Col>
//                             <div style={{ paddingLeft: '5vw' }}>
//                                 <Input
//                                     className='smText'
//                                     type='text'
//                                     id='noOfStudentPM'
//                                     name='noOfStudentPM'
//                                     value={noOfStudentPM}
//                                     onChange={handleAll}
//                                 />
//                                 <label className='smText' htmlFor='noOfStudentPM'>
//                                     PM
//                                 </label>
//                             </div>
//                         </Col>
//                     </Row>
//                 )}

//                 {isFullDay && (
//                     <Row>
//                         <Col>
//                             <div style={{ paddingLeft: '5vw' }}>
//                                 <Input
//                                     className='smText'
//                                     type='text'
//                                     id='noOfStudentFD'
//                                     name='noOfStudentFD'
//                                     value={noOfStudentFD}
//                                     onChange={handleAll}
//                                 />
//                                 <label className='smText' htmlFor='noOfStudentFD'>
//                                     Full Day
//                                 </label>
//                             </div>
//                         </Col>
//                     </Row>
//                 )}

//                 {isLongFullDay && (
//                     <Row>
//                         <Col>
//                             <div style={{ paddingLeft: '5vw' }}>
//                                 <Input
//                                     className='smText'
//                                     type='text'
//                                     id='noOfStudentLFD'
//                                     name='noOfStudentLFD'
//                                     value={noOfStudentLFD}
//                                     onChange={handleAll}
//                                 />
//                                 <label className='smText' htmlFor='noOfStudentLFD'>
//                                     Long Full Day
//                                 </label>
//                             </div>
//                         </Col>
//                     </Row>
//                 )}

//                 <Row>
//                     <Col>
//                         <h6>Tuition Fees</h6>
//                     </Col>
//                 </Row>

//                 {isAM && (
//                     <Row>
//                         <Col>
//                             <div style={{ paddingLeft: '5vw' }}>
//                                 <Input
//                                     className='smText'
//                                     type='text'
//                                     id='tuitionAM'
//                                     name='tuitionAM'
//                                     value={tuitionAM}
//                                     onChange={handleAll}
//                                 />
//                                 <label className='smText' htmlFor='tuitionAM'>
//                                     AM
//                                 </label>
//                             </div>
//                         </Col>
//                     </Row>
//                 )}

//                 {isPM && (
//                     <Row>
//                         <Col>
//                             <div style={{ paddingLeft: '5vw' }}>
//                                 <Input
//                                     className='smText'
//                                     type='text'
//                                     id='tuitionPM'
//                                     name='tuitionPM'
//                                     value={tuitionPM}
//                                     onChange={handleAll}
//                                 />
//                                 <label className='smText' htmlFor='tuitionPM'>
//                                     PM
//                                 </label>
//                             </div>
//                         </Col>
//                     </Row>
//                 )}

//                 {isFullDay && (
//                     <Row>
//                         <Col>
//                             <div style={{ paddingLeft: '5vw' }}>
//                                 <Input
//                                     className='smText'
//                                     type='text'
//                                     id='tuitionFD'
//                                     name='tuitionFD'
//                                     value={tuitionFD}
//                                     onChange={handleAll}
//                                 />
//                                 <label className='smText' htmlFor='tuitionFD'>
//                                     Full Day
//                                 </label>
//                             </div>
//                         </Col>
//                     </Row>
//                 )}

//                 {isLongFullDay && (
//                     <Row>
//                         <Col>
//                             <div style={{ paddingLeft: '5vw' }}>
//                                 <Input className='smText' type='text' id='tuitionLFD' name='tuitionLFD' value={tuitionLFD} onChange={handleAll} />
//                                 <label className='smText' htmlFor='tuitionLFD'>
//                                     Long Full Day
//                                 </label>
//                             </div>
//                         </Col>
//                     </Row>
//                 )}

//                 <Row> <Col> <h6>Subsidy</h6> </Col> </Row> <Row> <Col> <div style={{ paddingLeft: '5vw' }}> <Input className='smText' type='checkbox' id='has_subsidy' name='has_subsidy' onClick={hasSubsidy} /> <label className='smText' htmlFor='has_subsidy'> Yes, there is subsidy </label> </div> </Col> </Row>
//                 {hasSubsidy && (
//                     <Row>
//                         <Col>
//                             <div style={{ paddingLeft: '5vw' }}>
//                                 <Input className='smText' type='text' id='subsidyAmt' name='subsidyAmt' value={subsidyAmt} onChange={handleAll} />
//                                 <label className='smText' htmlFor='subsidyAmt'>
//                                     Subsidy Amount
//                                 </label>
//                             </div>
//                         </Col>
//                     </Row>
//                 )}

//                 <Row> <Col> <h6>Number of Teachers</h6> </Col> </Row> <Row> <Col> <div style={{ paddingLeft: '5vw' }}> <Input className='smText' type='text' id='noOfTeacher' name='noOfTeacher' value={noOfTeacher} onChange={handleAll} /> <label className='smText' htmlFor='noOfTeacher'> Number of Teachers </label> </div> </Col> </Row> <Row> <Col> <Button className='smText' color='primary' name='save' onClick={saveDetails} > Save </Button> </Col> </Row> </Form> </div>);
// };
// const mapDispatchToProps = (dispatch) => {
//     return {
//         saveInput: (inputData, inputType) =>
//             dispatch(saveInput(inputData, inputType)),
//     };
// };

// export const OtherDetails = connect(null, mapDispatchToProps)(StudentAndTuition);
