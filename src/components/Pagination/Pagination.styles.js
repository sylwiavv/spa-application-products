import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: left;

  max-width: 400px;
  margin: auto auto 16px 0;

  button {
    display: flex;
    background-color: transparent;
    border: none;
    position: relative;
    padding-left: 0;

    &:hover {
      cursor: pointer;
    }

    svg {
      height: 14px;
      width: 40px;
    }
  }

  span {
    display: flex;
    align-items: center;
    margin: 0 16px;
  }
`;

export const PaginationWrapperPage = styled.div`
  display: flex;
  align-self: center;
  margin: 0 8px;
`;

export const PaginationActualPage = styled.div`
  position: relative;

  &:after {
    content: ' / ';
    color: ${({ theme }) => theme.colors.mainFontColor};
    font-weight: 400;
  }
`;

export const PaginationTotalPage = styled.div`
  margin-left: 4px;
  font-weight: 700;
`;
