import styled from 'styled-components';

export const TABLE = styled.table`
  border-spacing: 4px;
  border: 1px solid ${({ theme }) => theme.colors.mainBorderColor};
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  text-align: center;

  max-width: 660px;
  width: 100%;
`;
export const THEAD = styled.thead``;
export const THEADtr = styled.tr``;
export const THEADth = styled.th`
  font-size: 18px;
  padding: 0 8px 8px 0;
`;

export const TBODY = styled.tbody``;
export const TBODYtr = styled.tr`
  background-color: ${({ color }) => color};

  &:first-child {
    td:first-child {
      border-top-left-radius: 4px;
    }

    td:last-child {
      border-top-right-radius: 4px;
    }
  }

  &:last-child {
    td:first-child {
      border-bottom-left-radius: 4px;
    }
    td:last-child {
      border-bottom-right-radius: 4px;
    }
  }
`;

export const TBODYtd = styled.td`
  padding: 16px 8px;
  align-content: center;
  //border-radius: 4px;

  //&:first-child {
  //  border-radius: 50px;
  //}
`;
