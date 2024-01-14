import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import {
  addCompare,
  clearCompare,
  compareButtonTrue,
  clearOneCompare,
} from '../../redux/search/actions';
import '../../assets/css/search/schoolList.css';

export const SearchSchoolList = ({
  result,
  compare,
  compareButtonStatus,
  addCompare,
  clearCompare,
  clearOneCompare,
  compareButtonTrue,
}) => {
  const navigate = useNavigate();

  const compareSchool = (e) => {
    compareButtonTrue();
    const id = e.target.value;

    if (compare.length === 0) {
      addCompare(result[id]);
    } else if (
      compare.length < 2 &&
      compare[0].school_name !== e.target.name
    ) {
      addCompare(result[id]);
    } else if (
      compare[0].school_name === e.target.name ||
      compare[1].school_name === e.target.name
    ) {
      if (compare.length === 1) {
        clearCompare();
      } else if (compare.length === 2) {
        let school = compare.find(
          (school) => school.school_name === e.target.name
        );
        let index = compare.indexOf(school);
        let newCompare = compare.filter((i, j) => j !== index);
        clearOneCompare(newCompare);
      }
    }
    console.log(compare);
  };

  return (
    <div className={!compareButtonStatus ? '' : 'searchSchoolContainerMargin'}>
      {result.map((school, index) => {
        return (
          <div key={Math.random()} className="searchSchoolContainer">
            <Container>
              <Row>
                <Col className="searchSchoolBoxImg" md="3" sm="12">
                  {school.profile_pic === null ? (
                    <div>
                      <p>no image</p>
                    </div>
                  ) : (
                    <img src={school.profile_pic} alt="school" />
                  )}
                </Col>
                <Col className="searchSchoolBoxTitle" md="4" sm="12">
                  <p className="searchSchoolTitle searchSchoolHr">
                    {school.school_name}
                  </p>
                  <p className="searchSchoolWord searchSchoolHr">
                    {school.location}
                  </p>
                  <p className="searchSchoolWord">
                    School size: <span>{school.school_size}</span> square
                    meter.
                  </p>
                </Col>
                <Col
                  className="searchSchoolBoxStats"
                  md="3"
                  sm="9"
                  xs="6"
                >
                  <p className="searchSchoolWordTop searchSchoolHr">
                    No. of teachers: <span>{school.no_of_teacher}</span>
                  </p>
                  <p className="searchSchoolWord searchSchoolHr">
                    Followers: <span>{school.follower}</span>
                  </p>
                  <p className="searchSchoolWord">
                    Score: <span>{school.score}</span>
                  </p>
                </Col>
                <Col
                  className="searchSchoolBoxButton"
                  md="2"
                  sm="3"
                  xs="6"
                >
                  <button
                    key={index}
                    className="searchSchoolButton"
                    onClick={() => navigate(`/details/${school.id}`)}
                  >
                    Details
                  </button>
                  {!compareButtonStatus ? (
                    <button
                      value={index}
                      name={school.school_name}
                      className="searchSchoolButton"
                      onClick={compareSchool}
                    >
                      Compare
                    </button>
                  ) : compare.length === 1 ? (
                    <button
                      value={index}
                      name={school.school_name}
                      className={
                        compare[0].school_name === school.school_name
                          ? 'searchSchoolButtonClick'
                          : 'searchSchoolButton'
                      }
                      onClick={compareSchool}
                    >
                      {compare[0].school_name === school.school_name
                        ? 'Remove'
                        : 'Compare'}
                    </button>
                  ) : compare.length >= 2 ? (
                    <button
                      value={index}
                      name={school.school_name}
                      className={
                        compare[0].school_name === school.school_name ||
                        compare[1].school_name === school.school_name
                          ? 'searchSchoolButtonClick'
                          : 'searchSchoolButtonNA'
                      }
                      onClick={compareSchool}
                    >
                      {compare[0].school_name === school.school_name ||
                      compare[1].school_name === school.school_name
                        ? 'Remove'
                        : 'N/A'}
                    </button>
                  ) : null}
                </Col>
              </Row>
            </Container>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    result: state.search.result,
    compare: state.search.compare,
    compareButtonStatus: state.search.compareButtonStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCompare: (school) => {
      dispatch(addCompare(school));
    },
    clearCompare: () => {
      dispatch(clearCompare());
    },
    clearOneCompare: (newCompare) => {
      dispatch(clearOneCompare(newCompare));
    },
    compareButtonTrue: () => {
      dispatch(compareButtonTrue());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchSchoolList);
