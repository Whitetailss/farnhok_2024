import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Select from 'react-select';
import '../../assets/css/home/searchBar.css';

export const PureSearchBar = (props) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedDay, setSelectedDay] = useState([]);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const handleLocation = (selectedLocation) => {
    setSelectedLocation(selectedLocation);
  };

  const handleDay = (selectedDay) => {
    setSelectedDay(selectedDay);
    console.log(selectedDay);
  };

  const onSearch = (e) => {
    e.preventDefault();
    navigate('/search');
  };

  return (
    <div id='homeSearchContainer'>
      <div id='homeSearchTextBox'>
        <h1 id='homeSearchHeader' className='homeSearchTitle'>
          Find the Best Kindergartens
        </h1>
        <p className='homeSearchTitle'>
          We compare all Kindergartens in Hong Kong and help you find the best one for you and your kids.
        </p>
      </div>
      <Container>
        <Row>
          <Col id='homeSearchLeftImg' md='3'></Col>
          <Col md='6'>
            <form id='homeSearchForm'>
              <div>
                <label>Which kindergarten are you looking for?</label>
                <br />
                <input
                  className='homeSearchInput'
                  type='text'
                  name='name'
                  placeholder='All School'
                  value={name}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div>
                <label>which Location?</label>

                <Select
                  isMulti
                  placeholder='Select All'
                  value={selectedLocation}
                  name='selectedLocation'
                  onChange={handleLocation}
                  options={props.location}
                  closeMenuOnSelect={false}
                />
              </div>
              <div>
                <label>Half-Day or Full-Day?</label>

                <Select
                  isMulti
                  placeholder='Select All'
                  value={selectedDay}
                  name='selectedDay'
                  onChange={handleDay}
                  options={props.day}
                  closeMenuOnSelect={false}
                />
              </div>
              <div id='homeSearchButtonBox'>
                <button className='homeSearchButton' onClick={onSearch}>
                  Search
                </button>
              </div>
            </form>
          </Col>
          <Col id='homeSearchRightImg' md='3'></Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    day: state.search.day,
    location: state.search.location,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // searchSchool: () => {
    //     dispatch(searchSchool())
    // }
  };
};

export const HomeSearchBar = connect(mapStateToProps, mapDispatchToProps)(PureSearchBar);