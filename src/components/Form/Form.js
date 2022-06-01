import { Input, Label, FormWrapper, InputWrapper, SearchButton, ResentButton } from './Form.styles';
import PropTypes from 'prop-types';
import React from 'react';

const Form = ({ value, onInputChange, onSearch, onReset }) => {
  return (
    <FormWrapper>
      <InputWrapper onSubmit={onSearch}>
        <Label htmlFor="input-number" />
        <Input id="input-number" value={value} onChange={onInputChange} placeholder="Enter your color number" />
      </InputWrapper>
      <SearchButton type="submit" onClick={onSearch}>
        Search
      </SearchButton>
      <ResentButton onClick={onReset}>Reset</ResentButton>
    </FormWrapper>
  );
};

Form.propTypes = {
  value: PropTypes.string,
  onInputChange: PropTypes.func,
  onSearch: PropTypes.func,
  onReset: PropTypes.func,
};

export default Form;
