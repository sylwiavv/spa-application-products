import styled from 'styled-components';

export const StyledInput = styled.input`
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

export const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  width: 70%;

  button {
    width: 200px;
    height: 40px;
  }
`;
