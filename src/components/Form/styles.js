import styled, { css } from 'styled-components';

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 16px;
  border-bottom: 1px solid #9f9fdf;
`;

export const ErrorMessage = styled.div`
  height: 30px;
  color: red;
  display: flex;
  align-items: center;
`;

export const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding: 15px 15px;
  background-color: ${({ disabled }) => (!disabled ? '#2160efff' : 'grey')};
  color: white;
  border-radius: 13px 13px;
  width: 190px;
  border: none;
`;

export const Input = styled.input`
  border: 1px solid #bec1c1;
  border-radius: 5px;
  padding: 10px 15px;
  box-sizing: border-box;
  width: 100%;
  ${(props) =>
    props.hasError &&
    css`
      border-color: red;

      &::placeholder {
        color: red;
      }
    `}
`;

export const Label = styled.label`
  display: flex;
  color: #2160ef;
  font-weight: bolder;
  margin-right: 20px;
  margin-bottom: 10px;
  font-size: 15px;
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const TextArea = styled.textarea`
  display: block;
  border: 1px solid #bec1c1;
  border-radius: 5px;
  padding: 10px 15px;
  width: 100%;
  ${(props) =>
    props.hasError &&
    css`
      border-color: red;

      &::placeholder {
        color: red;
      }
    `}
`;

export const InputsDescriptionContainer = styled.div`
  display: flex;
  width: 856px;
  min-height: 94px;
`;

export const DescriptionInputBlock = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  min-height: 52px;
  gap: 12px;
`;
