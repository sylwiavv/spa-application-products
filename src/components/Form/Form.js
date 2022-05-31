import { Input, Label, FormWrapper, InputWrapper, SearchButton, ResentButton } from './Form.styles';
import React from 'react';

const Form = ({ value, onInputChange, onSearch, onReset }) => {
  return (
    <FormWrapper>
      <InputWrapper onSubmit={onSearch}>
        <Label htmlFor="input" />
        <Input value={value} onChange={onInputChange} placeholder="Enter your color number" />
      </InputWrapper>
      <SearchButton type="submit" onClick={onSearch}>
        Search
      </SearchButton>
      <ResentButton onClick={onReset}>Reset</ResentButton>
    </FormWrapper>
  );
};

export default Form;
