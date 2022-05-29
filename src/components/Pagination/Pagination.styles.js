import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 400px;
  margin: 16px auto;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    position: relative;
    padding: 8px;
    width: 48px;

    &:disabled,
    &[disabled] {
      //background-color: transparent;
    }

    &:hover {
      cursor: pointer;
    }

    svg {
      height: 24px;
      width: 48px;
    }
  }

  span {
    display: flex;
    align-items: center;
    margin: 0 24px;
  }
`;
