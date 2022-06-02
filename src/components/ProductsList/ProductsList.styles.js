import styled from 'styled-components';

export const StyledTable = styled.table`
  border-spacing: 4px;
  border: 1px solid ${({ theme }) => theme.colors.mainBorderColor};
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  text-align: center;

  max-width: 660px;
  width: 100%;
`;
export const StyledThead = styled.thead``;
export const StyledTheadTr = styled.tr``;
export const StyledTheadTh = styled.th`
  font-size: 18px;
  padding: 0 8px 8px 0;
`;

export const StyledTbody = styled.tbody``;
export const StyledTbodyTr = styled.tr`
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

export const StyledTbodyTd = styled.td`
  padding: 16px 8px;
  align-content: center;
  //border-radius: 4px;

  //&:first-child {
  //  border-radius: 50px;
  //}
`;
