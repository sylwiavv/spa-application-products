import styled from 'styled-components';

export const ProductsWrapper = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  margin-bottom: 16px;
  padding: 0;
`;

export const Product = styled.li`
  background-color: ${({ color }) => color};
  border-radius: 4px;
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  flex-direction: column;

  position: relative;
  min-height: 160px;

  h2 {
    font-weight: 600;
    font-size: 18px;
    background-color: rgba(240, 248, 255, 0.55);
    padding: 8px;
    margin: 0;
    border-radius: 4px;
    width: max-content;
  }

  span {
    position: absolute;
    top: 8px;
    left: 8px;
  }
`;
