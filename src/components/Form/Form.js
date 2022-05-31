import { Input, Label, FormWrapper, InputWrapper } from './Form.styles';
import React from 'react';

const Form = ({ value, onInputChange, onSearch, onReset }) => {
  return (
    <FormWrapper>
      <InputWrapper onSubmit={onSearch}>
        <Label htmlFor="input" />
        <Input value={value} onChange={onInputChange} placeholder="Enter your color number" />
      </InputWrapper>
      <button type="submit" onClick={onSearch}>
        Search
      </button>
      <button onClick={onReset}>Reset</button>
    </FormWrapper>
  );
};

export default Form;
