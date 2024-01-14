import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBack = (props) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button
        id='goBack'
        className={props.goBackClass}
        onClick={goBack}
      >
        {props.goBack}
      </button>
    </div>
  );
};

export default GoBack;