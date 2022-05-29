import { StyledInput, WrapperInput } from './Input.styles';
import React, { useContext } from 'react';
import { ListContext } from '../../provides/GlobalContext';

const InputWr = () => {
  const { inputValue, onChangeHandler, handleKeyDown, reset, handleButtonSearch } = useContext(ListContext);

  return (
    <WrapperInput>
      <StyledInput
        id="input-autocomplete"
        placeholder="Choose your color id"
        value={inputValue}
        onChange={(e) => onChangeHandler(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleButtonSearch}>Search</button>
      <button onClick={reset}>Reset</button>
    </WrapperInput>
  );
};

export default InputWr;
