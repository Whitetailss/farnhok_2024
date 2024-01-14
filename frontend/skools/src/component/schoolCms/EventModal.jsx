import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container } from 'reactstrap';
import { addEventName } from "../../redux/event/action";
import axios from 'axios';
import "../../assets/css/CmsEvent/EventModal.css";

export const EventModal = (props) => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [event, setEvent] = useState({
    event_name: null,
    date: null,
    startTime: null,
    venue: null,
    description: null,
    amount: null,
    isNotFree: false,
    price: null
  });

  const toggle = () => {
    setModal(!modal);
  };

  const isNotFree = () => {
    setEvent(prevState => ({
      ...prevState,
      isNotFree: !prevState.isNotFree
    }));
  };

  const handleAll = (e) => {
    const { name, value } = e.target;
    setEvent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    toggle();
    props.addEventName(event);

    const eventData = {
      data: { abc: event }
    };

    axios.post(`https://localhost:8080/cms/events`, eventData)
      .then(res => {
        console.log(res);
      });
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>Add event</Button>
      <Modal isOpen={modal} toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle}>Add event</ModalHeader>
        <ModalBody>
          <div className='mainContent'>
            <Container>
              <h6>Event name:</h6>
              <input type="text" name="event_name" placeholder="Enter event name" value={event.event_name} onChange={handleAll} />

              <h6>Date and start time:</h6>
              <input type="date" name="date" value={event.date} onChange={handleAll} />
              <input type="text" name="startTime" placeholder="Enter start time" value={event.startTime} onChange={handleAll} />

              <h6>Venue:</h6>
              <input type="text" name="venue" placeholder="Enter venue" value={event.venue} onChange={handleAll} />

              <h6>Is it free?</h6>

              <div className="not">
                <input type="checkbox" id="free" name="free" />
                <label htmlFor="free">Yes</label>

                <input type="checkbox" id="notFree" name="notFree" onClick={isNotFree} />
                <label htmlFor="notFree">No</label>

                {event.isNotFree ? (
                  <div>
                    <h6>Price:</h6>
                    <input type="number" name="price" placeholder="Enter price" value={event.price} onChange={handleAll} />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>

              <h6>Description:</h6>
              <textarea type="text" name="description" placeholder="Enter description" value={event.description} onChange={handleAll}></textarea>
            </Container>

            <div className="saveEditDeleteButton">
              {/* Buttons */}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="submitButton" onClick={handleSubmit}>Submit</button>
          <button className="cancelButton" onClick={toggle}>Cancel</button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    result: state.EventModal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEventName: (result) => {
      dispatch(addEventName(result));
    }
  };
};

export const EventModalSpecial = connect(mapStateToProps, mapDispatchToProps)(EventModal);