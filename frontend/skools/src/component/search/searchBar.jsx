import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import { searchSchool } from '../../redux/search/actions';
import Loading from '../loading';
import '../../assets/css/search/searchBar.css';

const SearchBarComponent = ({ location, day, searchSchool, storeState }) => {

  console.log('Store bigState', storeState)

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedDay, setSelectedDay] = useState([]);
  const [collapse, setCollapse] = useState(true);
  const [searchStyle, setSearchStyle] = useState('searchSearchDropButton');
  const [arrow, setArrow] = useState(faChevronUp);
  const [loading, setLoading] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
    if (collapse === false) {
      setSearchStyle('searchSearchDropButton');
      setArrow(faChevronUp);
    } else {
      setSearchStyle('searchSearchDropButton searchSearchDropBottom');
      setArrow(faChevronDown);
    }
  };

  const handleLocation = (selectedLocation) => {
    setSelectedLocation(selectedLocation);
  };

  const handleDay = (selectedDay) => {
    setSelectedDay(selectedDay);
  };

  const onSearch = () => {
    setLoading(true);

    const locationValues = selectedLocation.map(({ value }) => value);
    const dayValues = selectedDay
      .filter(({ value }) => value)
      .map(({ value }) => value);

    const searchResult = {
      schoolName: name,
      selectedLocation: locationValues,
      day1: dayValues.includes(1),
      day2: dayValues.includes(2),
      day3: dayValues.includes(3),
      day4: dayValues.includes(4),
    };

    console.log('searchResult', searchResult)

    searchSchool(searchResult)
    navigate('/search');

    setLoading(false);
    setName('');
    setSelectedLocation([]);
    setSelectedDay([]);
  };

  return (
    <div>
      <div className="searchSearchButtonDrop">
        <div className={searchStyle} onClick={toggle}>
          <h5 className="searchSearchArrow">What would you like to find?</h5>
          <FontAwesomeIcon
            className="searchSearchArrow"
            size="lg"
            icon={arrow}
            color="#0FACF3"
          />
        </div>
      </div>
      <Collapse isOpen={collapse}>
        <div id="searchSearchForm">
          <Container>
            <Row>
              <Col md="3">
                <label>School Name?</label>
                <input
                  className="searchSearchInput"
                  type="text"
                  name="name"
                  placeholder="All School"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col md="3">
                <label>Location?</label>
                <Select
                  isMulti
                  placeholder="Select All"
                  value={selectedLocation}
                  name="selectedLocation"
                  onChange={handleLocation}
                  options={location}
                  closeMenuOnSelect={false}
                />
              </Col>
              <Col md="3">
                <label>Half / Full-Day?</label>
                <Select
                  isMulti
                  placeholder="Select All"
                  value={selectedDay}
                  name="selectedDay"
                  onChange={handleDay}
                  options={day}
                  closeMenuOnSelect={false}
                />
              </Col>
              <Col id="searchSearchButtonBox" md="3">
                <button className="searchSearchButton" onClick={onSearch}>
                  Search
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </Collapse>
      {loading ? <Loading /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    day: state.search.day,
    location: state.search.location,
    result: state.search.result,
    storeState: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchSchool: (result) => {
      dispatch(searchSchool(result));
    },
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
export const SearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBarComponent);

// import store from 