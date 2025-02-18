import React from 'react';

const FilterOption = ({ activeItem, filter, index, filterOptions, handleCategoryChange }) => {
  return (
    <li className='list-item'>
      <button
        className={`list-link btn-as-link ${activeItem === filter.name ? 'active' : ''}`}
        id={filter.id}
        onClick={() => handleCategoryChange(filter, activeItem)}
      >
        {filter.name}
        <span className={`filter-badge  ${activeItem === filter.name ? 'active' : ''}`}>{filter.quantity}</span>
      </button>
      &nbsp;
      {index < filterOptions.length - 1 ? '\t/' : ''}
    </li>
  );
};

export default FilterOption;
