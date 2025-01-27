import styled from "styled-components";

export const StyledSectionContainer = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1920px;
  width: 100%;
  height: auto;
  margin-left: auto;
  padding: 20px 0px;
  margin-right: auto;
  margin-top: ${({ topMargin }) => topMargin}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
`;
