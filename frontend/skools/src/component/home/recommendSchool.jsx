import React, { useState } from 'react';
import '../../assets/css/home/recommend.css'

const items = [
    {
        src: 'https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2023/09/22/ac32309b-6c1a-48a1-9bb1-7a1025e38bd5_72ad748a.jpg',
        altText: 'Slide 1',
        school_name: 'Kentville Kindergarten',
        location: 'Kowloon city'
    },
    {
        src: 'https://soka.edu.hk/uploads/pages_blocks/ntOlPo3UwUi66M51Sqd8YaYasY8r218R8j1yMyzv.jpg',
        altText: 'Slide 2',
        school_name: 'Hong Kong Soka Kindergarten',
        location: 'Kowloon city'
    },
    {
        src: 'https://www.cannan.edu.hk/image/catalog/second/campuses/kowloontong.jpg',
        altText: 'Slide 3',
        school_name: 'Cannan Kindergarten',
        location: 'Kowloon city'
    },
    {
        src: 'https://playgroup.msc.edu.hk/images/img_application.jpg',
        altText: 'Slide 4',
        school_name: 'Munsang College Kindergarten',
        location: 'Kowloon city'
    }
];

const RecommendSchool = () => {
    const [loading, setLoading] = useState(false);
  
    // const recommendSchoolHandleScroll = () => {
    //   // handle scroll logic
    // };
  
    return (
      <div id='homeRecommendSchool'>
        {loading ? null : (
          <div>
            <h5>Recommended School</h5>
            <div id='homeRecommendSchooContainer'>
              {items.map((item, index) => (
                <div key={index} className={`homeRecommendSchoolBox homeRecommendSchoolBox${index}`}>
                  <img id='homeRecommendSchoolImage' src={item.src} alt={item.altText} />
                  <div id='homeRecommendSchoolText'>
                    <p className='homeRecommendSchoolTextBold'>{item.school_name}</p>
                    <div>
                      <p>{item.location}</p>
                      <p>score: 4.8</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default RecommendSchool;


