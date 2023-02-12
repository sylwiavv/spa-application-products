import { Input, Label, FormWrapper, InputWrapper, SearchButton, ResentButton } from './Form.styles';
import React from 'react';

interface Props {
  value: number | '';
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.FormEvent) => void;
  onReset: () => void;
}

const Form = ({ value, onInputChange, onSearch, onReset }: Props) => {
  return (
    <FormWrapper>
      <InputWrapper onSubmit={onSearch}>
        <Label htmlFor="input-number" />
        <Input aria-label="input-number" value={value} onChange={onInputChange} placeholder="Enter your color number" />
      </InputWrapper>
      <SearchButton type="submit" onClick={onSearch}>
        Search
      </SearchButton>
      <ResentButton onClick={onReset}>Reset</ResentButton>
    </FormWrapper>
  );
};

export default Form;
