import React, { useState } from 'react';
import CareerForm from '../components/careerform';
import Recommendations from '../components/recommandations';
import careerData from '../data/career';

const Home = () => {
  const [recommendedCareers, setRecommendedCareers] = useState([]);

  const handleRecommend = (interests, skills) => {
    const filteredCareers = careerData.filter((career) =>
      career.keywords.some((keyword) =>
        [interests, skills].some((term) => term.toLowerCase().includes(keyword))
      )
    );
    setRecommendedCareers(filteredCareers.map((career) => career.name));
  };

  return (
    <div>
      <h2>Welcome to Career Guidance</h2>
      <CareerForm onRecommend={handleRecommend} />
      <Recommendations careers={recommendedCareers} />
    </div>
  );
};

export default Home;
