import styled from 'styled-components';

export const ProductsWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-bottom: 16px;
  padding: 0;
`;

export const Product = styled.li`
  background-color: ${({ color }) => color};
  border-radius: 4px;
  padding: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  flex-direction: column;
  margin-bottom: 2px;

  position: relative;
  //min-height: 80px;

  display: grid;
  grid-template-columns: 48px 1fr 1fr;
  justify-items: center;
  align-items: center;

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
  }
`;

export const WrapperProperties = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: 48px 1fr 1fr;
  justify-items: center;
  padding: 0 8px;
`;
