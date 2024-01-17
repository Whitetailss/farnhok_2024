import React from 'react';
import '../../assets/css/home/recommend.css';
import { useNavigate } from 'react-router-dom';

const item = [
  {
    src: 'https://lh3.googleusercontent.com/p/AF1QipOqZuUSnzP3A0wS-MBkyTibv-vvjOEyBlU4i38Y=s1360-w1360-h1020',
    altText: 'Slide 2',
    caption: 'Harrow School',
  },
];

const FeaturedSchool = () => {
  const navigate = useNavigate();

  const pushLink = () => {
    navigate('/detail');
  };

  return (
    <div
      id='homeFeaturedSchool'
      onClick={() => pushLink()}
    >
      <img
        id='homeFeaturedSchoolImage'
        src={item[0].src}
        alt={item.altText}
      />
      <div id='homeFeaturedSchoolText'>
        <h5>Featured Kindergarten</h5>
        <h4>Harrow International School Hong Kong</h4>
        <p>- Leadership for a better world</p>
        <p className='homeFeaturedSchoolTextBold'>Learn more &gt;</p>
      </div>
    </div>
  );
};

export default FeaturedSchool;