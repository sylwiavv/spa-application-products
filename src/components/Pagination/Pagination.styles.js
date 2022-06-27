import styled from 'styled-components';
import { darken } from 'polished';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  max-width: 400px;
  margin: auto auto 16px 0;

  button {
    display: flex;
    background-color: transparent;
    border: none;
    position: relative;
    padding-left: 0;

    &:not(:disabled) {
      &:before {
        opacity: 0;
        content: '';
        transition: opacity 0.3s;
      }
    }

    #icon-line rect {
      fill: ${({ theme }) => theme.colors.mainIconLine};
    }

    #icon-left-arr rect,
    #icon-right-arr rect {
      fill: ${({ theme }) => theme.colors.mainIconArr};
      transition: fill 0.2s;
    }

    &:not(:disabled) {
      &:hover {
        cursor: pointer;

        &:before {
          content: '';
          position: absolute;
          background-color: ${({ theme }) => theme.colors.mainIconArr};
          opacity: 0.1;
          border-radius: 20%;
          width: 32px;
          height: 26px;
          left: 4px;
          top: -5px;
        }

        #icon-left-arr rect,
        #icon-right-arr rect {
          fill: ${({ theme }) => darken(0.9, theme.colors.mainIconArr)};
        }
      }
    }

    svg {
      height: 14px;
      width: 40px;
    }
  }

  span {
    display: flex;
    align-items: center;
    margin: 0 4px;
  }
`;

export const PaginationWrapperPage = styled.div`
  display: flex;
  align-self: center;
  margin: 0 8px;
`;

export const PaginationActualPage = styled.div`
  position: relative;
  font-weight: 700;
`;

export const PaginationTotalPages = styled.div``;
