import { StyledCard } from "./elements";

export const Button = ({ children, ...props }) => {
  return (
    <StyledCard {...props}>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledCard>
  );
};
