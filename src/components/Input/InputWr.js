import { Input, Label, FormWrapper, InputWrapper } from './Input.styles';
import React from 'react';

const InputWr = ({ value, onChange, handleButtonSearch, reset, handleKeyDown }) => {
  return (
    <FormWrapper>
      <InputWrapper as="form" onSubmit={handleButtonSearch}>
        <Label htmlFor="input" />
        <Input value={value} onChange={onChange} placecholder="Enter your color number" />
      </InputWrapper>
      <button type="submit" onClick={handleButtonSearch}>
        Search
      </button>
      <button onClick={reset}>Reset</button>
    </FormWrapper>
  );
};

export default InputWr;
