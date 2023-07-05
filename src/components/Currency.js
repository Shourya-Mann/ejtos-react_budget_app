import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Select from 'react-select';

const Currency = (props) => {
  const [currency, setCurrency] = useState('');
  const { dispatch } = useContext(AppContext);

  const updateCurrency = (selectedOption) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: selectedOption.value,
    });
    setCurrency(selectedOption.value);
  };

  const currencyOptions = [
    { value: '£', label: '£ Pound' },
    { value: '$', label: '$ Dollar' },
    { value: '€', label: '€ Euro' },
    { value: '₹', label: '₹ Rupee' },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#14A44D',
      borderColor: '#14A44D',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'white' : '#14A44D',
      color: 'black',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#14A44D',
    }),
  };

  return (
    <div className='alert alert-secondary'>
      <label style={{ marginLeft: '1rem', backgroundColor: '#14A44D', color: 'black' }}>
        Currency
      </label>
      <Select
        className='currency-select'
        options={currencyOptions}
        value={currencyOptions.find((option) => option.value === currency)}
        onChange={updateCurrency}
        styles={customStyles}
      />
    </div>
  );
};

export default Currency;
