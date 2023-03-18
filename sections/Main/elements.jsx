import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const StyledGetStartedBtn = styled((props) => <Button {...props} variant="contained" color="main" />)`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  display: flex;
  justify-content: center;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  font-family: sans-serif;
`;


export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: center;
  max-width: 27.03rem;
  max-height: 56rem;
`;

export const StyledWrapper = styled(({...props}) => <div {...props}/>)`
  display: flex;
  gap: 200px;
  margin-right: 400px;
  margin-top: 100px;
  flex-direction: row;
`

export const StyledCardContainers = styled(({...props}) => <div {...props}/>)`
  display: flex;
  flex-direction: column;
  
`
