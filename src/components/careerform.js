import React, { useState } from 'react';

const CareerForm = ({ onRecommend }) => {
  const [interests, setInterests] = useState('');
  const [skills, setSkills] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRecommend(interests, skills);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Interests:</label>
        <input
          type="text"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
      </div>
      <div>
        <label>Skills:</label>
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
      </div>
      <button type="submit">Get Recommendations</button>
    </form>
  );
};

export default CareerForm;
