import styled from 'styled-components';
import { darken } from 'polished';

export const InputWrapper = styled.form`
  display: flex;
`;

export const Label = styled.label`
  display: flex;
`;

export const Input = styled.input`
  height: 40px;
  padding: 4px 8px;
  border-radius: 4px;
  margin-bottom: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  transition: border, 0.2s;

  display: flex;
  align-self: flex-start;
  text-align: start;

  min-width: max-content;
  width: 100%;

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid ${({ theme }) => theme.boxShadow.mainButtonBgColor};
  }
  &::placeholder {
    text-align: start;
  }

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 0;
    margin-right: 8px;
    width: 200px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin-bottom: 32px;

  button {
    font-size: 16px;
    font-weight: 700;
    outline: none;
    border-radius: 4px;
    min-width: 120px;
    padding: 8px;
    transition: background-color 0.2s;

    &:hover {
      cursor: pointer;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
  }
`;

export const SearchButton = styled.button`
  color: white;
  border: none;
  background-color: ${({ theme }) => theme.colors.mainButtonBgColor};
  margin-bottom: 8px;

  &:hover {
    background-color: ${({ theme }) => darken(0.2, theme.colors.mainButtonBgColor)};
  }

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 0;
    margin-right: 8px;
  }
`;

export const ResentButton = styled.button`
  background-color: ${({ theme }) => theme.colors.mainButtonBgColorSecondary};
  border: 1px solid ${({ theme }) => theme.colors.mainButtonBgColor};

  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.mainButtonBgColorSecondary)};
  }
`;
