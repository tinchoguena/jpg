import Styled from "styled-components";

export const InputResultsCardsContainer = Styled.div`
  display: flex; 
  justify-content: flex-start; 
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 55px;
  &:not(:last-child){border-bottom: 1px solid #E3E7F4;}
  position:relative;
`;
export const LoadingContainer = Styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

`;
export const InputListCardsImage = Styled.img`
  height: 34px;
  width: 34px;
  border-radius: 20px;
  margin-left: 13px
`;
export const InputListValidatedImage = Styled.img`
  height: 18px;
  width: 18px;
  margin-left: 3px;
`;

export const NamesTypography = Styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-left: 15px;
`;
export const RightLegendTypography = Styled.p`
  font-size: 11px;
  font-weight: 100;
  margin-left: 15px;
  font-color: #E3E7F4;
  position: absolute;
  right: 10px;
`;
export const NotFoundTypography = Styled.p`
  font-size: 14px;
  font-weight: 200;
  margin-left: 5px;
  font-color: #E3E7F4;
`;
export const ErrorTypography = Styled.p`
  font-size: 14px;
  font-weight: 200;
  margin-left: 5px;
`;
