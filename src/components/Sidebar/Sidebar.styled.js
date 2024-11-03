import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;


export const FilterTitle = styled.h3`
  font-size: 26px;
  color: #3A4980;

`;

export const Select = styled.select`
  width: 100%;
  margin-bottom: 15px;
  padding: 8px 16px;
  color: #3A4980;
  background: transparent;
  -webkit-appearance: none;
  border-radius: 16px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  max-width: 240px;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 15px;
  padding: 8px 16px;
  border-radius: 16px;
  font-size: 16px;
  outline: none;
  color: #3A4980;
  max-width: 205px;

  &[type="range"] {
    padding: 8px 0px;
  }
`;