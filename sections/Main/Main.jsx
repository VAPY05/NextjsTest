import Image from "next/image";
import { StyledSectionContainer } from "../../components/Containers/SectionContainer/elements";

import {
  StyledTextContainer,
  StyledContainer,
  StyledGetStartedBtn,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledImageContainer,
  StyledCardContainers,
  StyledWrapper
} from "./elements";

export const Main = ({backgroundImage ,image, title, description, ctaText, ...props }) => {
  return (
    <StyledSectionContainer>
      <StyledTextContainer>
        <StyledTitle>Managed agency selection</StyledTitle>
        <StyledDescription>Strengthen your onboarding process</StyledDescription>
      </StyledTextContainer>
      <StyledWrapper>
      <StyledImageContainer>
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
      </StyledImageContainer>
      <StyledCardContainers>
        <h1>a</h1>
        <h1>b</h1>
        <h1>c</h1>
      </StyledCardContainers>
      </StyledWrapper>
    </StyledSectionContainer>
    
  );
};
