import styled, { css } from "styled-components";

interface SectionWrapperProps {
  $variant?: "default" | "alt" | "hero" | "dark";
  $centered?: boolean;
}

const SectionWrapper = styled.section<SectionWrapperProps>`
  width: 100%;
  padding-inline: ${({ theme }) => theme.layout.container.padding.mobile};

  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case "alt":
        return css`
          background-color: ${theme.colors.background.section};
        `;
      case "hero":
        return css`
          background: linear-gradient(
            -135deg,
            ${theme.colors.primary.main} 0%,
            ${theme.colors.accent.main} 100%
          );
          color: ${theme.colors.text.onPrimary};
        `;
      case "dark":
        return css`
          background-color: ${theme.colors.background.alt};
          color: ${theme.colors.text.primary};
        `;
      default:
        return css`
          background-color: ${theme.colors.background.default};
        `;
    }
  }}

  ${({ $centered }) =>
    $centered &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    `}
`;

export default SectionWrapper;
