import { Input, Label, FormWrapper, InputWrapper } from './Form.styles';
import React from 'react';

const Form = ({ value, handleInputOnChange, handleButtonSearch, reset }) => {
  return (
    <FormWrapper>
      <InputWrapper onSubmit={handleButtonSearch}>
        <Label htmlFor="input" />
        <Input value={value} onChange={handleInputOnChange} placeholder="Enter your color number" />
      </InputWrapper>
      <button type="submit" onClick={handleButtonSearch}>
        Search
      </button>
      <button onClick={reset}>Reset</button>
    </FormWrapper>
  );
};

export default Form;
