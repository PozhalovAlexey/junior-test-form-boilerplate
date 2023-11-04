import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';

export const ImageListWrapper = styled.article`
  width: 470px;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 0.5rem;
  border: 1px solid #9f9fdf;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 400px;
  height: 230px;
  margin-top: 15px;
  object-fit: cover;
  object-position: center;
  border-radius: 0.5rem;
  border: none;
`;

export const CardBody = styled.div`
  width: 440px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h4`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  margin: 0 0 5px;
`;

export const CardProperty = styled.span`
  margin-top: 4px;
  font-size: 18px;
  color: grey;
`;

export const DeleteIconWrapper = styled(DeleteIcon)`
  display: flex;
  height: 20px;
  width: 15px;
  cursor: pointer;
  :hover {
    color: red;
  }
`;
