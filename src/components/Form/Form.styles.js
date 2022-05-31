import styled from 'styled-components';

export const Input = styled.input`
  height: 40px;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid gray;
  margin-right: 8px;

  display: flex;
  align-self: flex-start;
  text-align: start;

  min-width: max-content;
  width: 200px;

  &:focus,
  &:hover {
    //border: none;
    outline: none;
  }
  &::placeholder {
    text-align: start;
  }
`;

export const InputWrapper = styled.form`
  display: flex;
`;

export const Label = styled.label`
  display: flex;
`;

export const FormWrapper = styled.div`
  display: flex;

  button {
    margin-left: 8px;
  }
`;
