import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../assets/css/compare/compareBar.css';
import { clearCompare, clearOneCompare } from '../../redux/search/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const PureCompareBar = ({ compare, compareButtonStatus, clearCompare, clearOneCompare }) => {
  const clearAll = () => {
    clearCompare();
  };

  const clearFirstCompare = () => {
    if (compare.length === 1) {
      clearCompare();
    } else {
      clearOneCompare([compare[1]]);
    }
  };

  const clearSecondCompare = () => {
    clearOneCompare([compare[0]]);
  };

  return (
    <div>
      {!compareButtonStatus ? (
        ''
      ) : (
        <div id="compareBarContainer">
          <div id="compareBarBoxContainer">
            {compare[0] ? (
              <button className="compareBarBox compareBarBoxResult" value="0" onClick={clearFirstCompare}>
                <p className="compareBarWord">{compare[0].school_name}</p>
                <FontAwesomeIcon className="compareBarDeleteButton" size="md" icon={faTimes} />
              </button>
            ) : (
              'Error'
            )}
            {compare[1] ? (
              <button className="compareBarBox compareBarBoxResult" onClick={clearSecondCompare}>
                <p className="compareBarWord">{compare[1].school_name}</p>
                <FontAwesomeIcon className="compareBarDeleteButton" size="md" icon={faTimes} />
              </button>
            ) : (
              <div className="compareBarBox">
                <p className="compareBarWordEmpty">Add School To Compare</p>
              </div>
            )}
          </div>
          <div id="compareBarButtonBox">
            <button className="compareBarButtonBoxButton" onClick={clearCompare}>
              Clear All
            </button>
            {compare.length === 1 ? (
              <p>Compare</p>
            ) : (
              <NavLink className="compareBarButtonBoxButton" to="/compare">
                Compare
              </NavLink>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    compare: state.search.compare,
    compareButtonStatus: state.search.compareButtonStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCompare: () => {
      dispatch(clearCompare());
    },
    clearOneCompare: (newCompare) => {
      dispatch(clearOneCompare(newCompare));
    },
  };
};

export const CompareBar = connect(mapStateToProps, mapDispatchToProps)(PureCompareBar);