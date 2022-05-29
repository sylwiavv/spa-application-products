import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 400px;
  margin: 16px auto;

  button {
    //background-color: red;
    background-color: olivedrab;
    border: 2px solid lightgray;
    border-radius: 4px;
    padding: 8px;

    &:disabled,
    &[disabled] {
      background-color: lightgray;
    }

    &:hover {
      cursor: pointer;
    }
  }

  span {
    display: flex;
    align-items: center;
    margin: 0 24px;
  }
`;
