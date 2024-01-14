import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/search/sortBar.css';
import {
  teacherClick,
  followerClick,
  scoreClick,
  sizeClick,
  teacherClickReverse,
  followerClickReverse,
  scoreClickReverse,
  sizeClickReverse
} from '../../redux/search/actions.js';

const PureSortBar = ({ result, teacherClick, followerClick, scoreClick, sizeClick, teacherClickReverse, followerClickReverse, scoreClickReverse, sizeClickReverse }) => {
  const [collapse, setCollapse] = useState(true);
  const [sortStyle, setSortStyle] = useState('searchSortDropButton');
  const [sortArrow, setSortArrow] = useState(faChevronUp);
  const [teacherArrow, setTeacherArrow] = useState(faChevronDown);
  const [teacherArrowState, setTeacherArrowState] = useState(true);
  const [followerArrow, setFollowerArrow] = useState(faMinus);
  const [followerArrowState, setFollowerArrowState] = useState(false);
  const [scoreArrow, setScoreArrow] = useState(faMinus);
  const [scoreArrowState, setScoreArrowState] = useState(false);
  const [sizeArrow, setSizeArrow] = useState(faMinus);
  const [sizeArrowState, setSizeArrowState] = useState(false);
  const [sortMessage, setSortMessage] = useState(' - Greatest to least');

  const navigate = useNavigate();

  const toggle = () => {
    setCollapse(prevCollapse => !prevCollapse);
    if (!collapse) {
      setSortStyle('searchSortDropButton');
      setSortArrow(faChevronUp);
    } else {
      setSortStyle('searchSortDropButton searchSearchDropBottom');
      setSortArrow(faChevronDown);
    }
  };

  const handleTeacherClick = () => {
    if (teacherArrowState) {
      teacherClickReverse(result);
      setTeacherArrow(faChevronUp);
      setTeacherArrowState(false);
      setFollowerArrow(faMinus);
      setFollowerArrowState(false);
      setScoreArrow(faMinus);
      setScoreArrowState(false);
      setSizeArrow(faMinus);
      setSizeArrowState(false);
      setSortMessage(' - Least to greatest');
    } else {
      teacherClick(result);
      setTeacherArrow(faChevronDown);
      setTeacherArrowState(true);
      setFollowerArrow(faMinus);
      setFollowerArrowState(false);
      setScoreArrow(faMinus);
      setScoreArrowState(false);
      setSizeArrow(faMinus);
      setSizeArrowState(false);
      setSortMessage(' - Greatest to least');
    }
  };

  const handleFollowerClick = () => {
    if (followerArrowState) {
      followerClickReverse(result);
      setTeacherArrow(faMinus);
      setTeacherArrowState(false);
      setFollowerArrow(faChevronUp);
      setFollowerArrowState(false);
      setScoreArrow(faMinus);
      setScoreArrowState(false);
      setSizeArrow(faMinus);
      setSizeArrowState(false);
      setSortMessage(' - Least to greatest');
    } else {
      followerClick(result);
      setTeacherArrow(faMinus);
      setTeacherArrowState(false);
      setFollowerArrow(faChevronDown);
      setFollowerArrowState(true);
      setScoreArrow(faMinus);
      setScoreArrowState(false);
      setSizeArrow(faMinus);
      setSizeArrowState(false);
      setSortMessage(' - Greatest to least');
    }
  };

  const handleScoreClick = () => {
    if (scoreArrowState) {
      scoreClickReverse(result);
      setTeacherArrow(faMinus);
      setTeacherArrowState(false);
      setFollowerArrow(faMinus);
      setFollowerArrowState(false);
      setScoreArrow(faChevronUp);
      setScoreArrowState(false);
      setSizeArrow(faMinus);
      setSizeArrowState(false);
      setSortMessage(' - Least to greatest');
    } else {
      scoreClick(result);
      setTeacherArrow(faMinus);
      setTeacherArrowState(false);
      setFollowerArrow(faMinus);
      setFollowerArrowState(false);
      setScoreArrow(faChevronDown);
      setScoreArrowState(true);
      setSizeArrow(faMinus);
      setSizeArrowState(false);
      setSortMessage(' - Greatest to least');
    }
  };

  const handleSizeClick =() => {
    if (sizeArrowState) {
      sizeClickReverse(result);
      setTeacherArrow(faMinus);
      setTeacherArrowState(false);
      setFollowerArrow(faMinus);
      setFollowerArrowState(false);
      setScoreArrow(faMinus);
      setScoreArrowState(false);
      setSizeArrow(faChevronUp);
      setSizeArrowState(false);
      setSortMessage(' - Least to greatest');
    } else {
      sizeClick(result);
      setTeacherArrow(faMinus);
      setTeacherArrowState(false);
      setFollowerArrow(faMinus);
      setFollowerArrowState(false);
      setScoreArrow(faMinus);
      setScoreArrowState(false);
      setSizeArrow(faChevronDown);
      setSizeArrowState(true);
      setSortMessage(' - Greatest to least');
    }
  };

  const handleSearchSortClick = () => {
    navigate('/search-sort');
  };

  return (
    <Container fluid={true}>
      <Row>
        <Col className="searchSortBar">
          <div className="searchSortButton" onClick={toggle}>
            <FontAwesomeIcon icon={sortArrow} className={sortStyle} />
            Sort by
          </div>
          <Collapse isOpen={!collapse} className="searchSortDrop">
            <div className="searchSortDropRow">
              <div className="searchSortDropButton" onClick={handleTeacherClick}>
                <FontAwesomeIcon icon={teacherArrow} className="searchSortDropIcon" />
                Teacher
              </div>
              <div className="searchSortDropButton" onClick={handleFollowerClick}>
                <FontAwesomeIcon icon={followerArrow} className="searchSortDropIcon" />
                Follower
              </div>
              <div className="searchSortDropButton" onClick={handleScoreClick}>
                <FontAwesomeIcon icon={scoreArrow} className="searchSortDropIcon" />
                Score
              </div>
              <div className="searchSortDropButton" onClick={handleSizeClick}>
                <FontAwesomeIcon icon={sizeArrow} className="searchSortDropIcon" />
                Size
              </div>
            </div>
          </Collapse>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  result: state.search.result
});

const mapDispatchToProps = {
  teacherClick,
  followerClick,
  scoreClick,
  sizeClick,
  teacherClickReverse,
  followerClickReverse,
  scoreClickReverse,
  sizeClickReverse
};

export const SearchSortBar = connect(mapStateToProps, mapDispatchToProps)(PureSortBar);
