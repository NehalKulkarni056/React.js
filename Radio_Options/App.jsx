import React, { useState } from 'react';

function RadioOptions() {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [formError, setFormError] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption) {
      console.log('Selected option:', selectedOption);
      setFormError('');
    } else {
      setFormError('Please select an option');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        Option 2
      </label>
      <label>
        <input
          type="radio"
          value="option3"
          checked={selectedOption === 'option3'}
          defaultChecked={true}
          onChange={handleOptionChange}
        />
        Option 3
      </label>
      {formError && <p>{formError}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
export default RadioOptions;