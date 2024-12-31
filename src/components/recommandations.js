import React from 'react';

const Recommendations = ({ careers }) => {
  return (
    <div>
      <h2>Recommended Careers</h2>
      {careers.length > 0 ? (
        <ul>
          {careers.map((career, index) => (
            <li key={index}>{career}</li>
          ))}
        </ul>
      ) : (
        <p>No recommendations found. Try refining your input.</p>
      )}
    </div>
  );
};

export default Recommendations;
