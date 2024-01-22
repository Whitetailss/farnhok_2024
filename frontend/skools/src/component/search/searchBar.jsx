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


let wantedCriterias = {
  schoolName: 'Happy Kindergarten',
  selectedLocation: [
    'Islands',
    'Kwai Tsing',
    'North',
    'Kowloon city',
    'Eastern',
    'Sham Shui Po'
  ],
  day1: false,
  day2: false,
  day3: false,
  day4: false
}


let SD1 = [
  {
    school_id: 1,
    am_student: 50,
    pm_student: 60,
    full_day_student: null,
    long_full_day_student: null,
    full_day_tuition: null,
    long_full_day_tuition: null,
    has_subsidy: true,
    subsidy_amt: 1800,
    has_am: true,
    has_pm: true,
    has_full_day: false,
    has_long_full_day: false,
    no_of_teacher: 40,

    profile_pic: 'https://i0.wp.com/hongkongschools.com.hk/wp-content/uploads/listing-uploads/gallery/2022/04/ESF-International-Kindergarten-Hillside-1.jpg?fit=5472%2C3648&ssl=1',
    school_name: 'Happy Kindergarten',
    location: 'Wong Tai Sin',
    am_tuition: null,
    pm_tuition: null,
    half_day_tuition: '0'
  },
  {
    school_id: 2,
    am_student: 48,
    pm_student: 46,
    full_day_student: 14,
    long_full_day_student: null,
    full_day_tuition: 5400,
    long_full_day_tuition: null,
    has_subsidy: true,
    subsidy_amt: 1500,
    has_am: true,
    has_pm: true,
    has_full_day: true,
    has_long_full_day: false,
    no_of_teacher: 38,

    profile_pic: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/HK_Peak_Guildford_Road_German_Swiss_Intl_Sch_L.JPG',
    school_name: 'Everyday Kindergarten',
    location: 'Central',
    am_tuition: null,
    pm_tuition: null,
    half_day_tuition: '1700'
  },
  {
    school_id: 3,
    am_student: 48,
    pm_student: 46,
    full_day_student: 14,
    long_full_day_student: null,
    full_day_tuition: 5400,
    long_full_day_tuition: null,
    has_subsidy: true,
    subsidy_amt: 1500,
    has_am: true,
    has_pm: true,
    has_full_day: true,
    has_long_full_day: false,
    no_of_teacher: 38,

    profile_pic: 'https://hf.creative.edu.hk/wp-content/uploads/sites/34/2022/01/00D7942C-FF5D-4377-AACA-DCDE11EB3E28.jpeg',
    school_name: 'Creative Kindergarten',
    location: 'Eastern',
    am_tuition: null,
    pm_tuition: null,
    half_day_tuition: '1700'
  },
  {
    school_id: 4,
    am_student: 48,
    pm_student: 46,
    full_day_student: 14,
    long_full_day_student: null,
    full_day_tuition: 5400,
    long_full_day_tuition: null,
    has_subsidy: true,
    subsidy_amt: 1500,
    has_am: true,
    has_pm: true,
    has_full_day: true,
    has_long_full_day: false,
    no_of_teacher: 38,
    profile_pic: 'https://media.timeout.com/images/105663276/750/422/image.jpg',
    school_name: 'Causeway Bay Victoria Kindergarten and International Nursery',
    location: 'Wan Chai',
    am_tuition: null,
    pm_tuition: null,
    half_day_tuition: '1700'
  },
  {
    school_id: 5,
    am_student: 48,
    pm_student: 46,
    full_day_student: 14,
    long_full_day_student: null,
    full_day_tuition: 5400,
    long_full_day_tuition: null,
    has_subsidy: true,
    subsidy_amt: 1500,
    has_am: true,
    has_pm: true,
    has_full_day: true,
    has_long_full_day: false,
    no_of_teacher: 38,
    profile_pic: 'https://www.itseducation.asia/assets/images/article-images/3bdbf_9eb44_mvcps_(1).jpg',
    school_name: 'Malvern College Pre-School Hong Kong',
    location: 'Central and Western',
    am_tuition: null,
    pm_tuition: null,
    half_day_tuition: '1700'
  }
]

let wantedArray = SD1.filter((item) => wantedCriterias.selectedLocation.includes(item.location))

console.log('wantedArray', wantedArray)

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