import React from 'react';

function FilterButtons({ setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
    </div>
  );
}

export default FilterButtons;
