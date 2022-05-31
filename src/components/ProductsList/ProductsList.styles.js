import styled from 'styled-components';

export const TABLE = styled.table`
  border-spacing: 4px 2px;
  border: 1px solid ${({ theme }) => theme.colors.mainBorderColor};
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;

  max-width: 660px;
  width: 100%;
`;
export const THEAD = styled.thead``;
export const THEADtr = styled.tr``;
export const THEADth = styled.th`
  font-size: 18px;
  text-align: start;
  padding: 0 8px 8px 0;
`;

export const TBODY = styled.tbody``;
export const TBODYtr = styled.tr`
  background-color: ${({ color }) => color};
`;
export const TBODYtd = styled.td`
  padding: 16px 8px;
  align-content: center;
`;
