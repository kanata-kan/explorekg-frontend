import styled from "styled-components";

type Props = {
  $variant?: "tight" | "loose" | "default";
  $bgImage?: string;
  $overlay?: string; // 👈 يمكنك تخصيص overlay حسب الصفحة
};

/**
 * 🧱 SectionWrapperImage.v2
 * نسخة محدثة من الإصدار القديم تحترم بنية UI_V2
 * تدعم overlay ديناميكي + background responsive + spacing system
 */
export const SectionWrapperImage = styled.section<Props>`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  /* ✅ Spacing variants */
  ${({ theme, $variant }) => {
    switch ($variant) {
      case "tight":
        return `
          padding: ${theme.spacing.lg} 0;
        `;
      case "loose":
        return `
          padding: ${theme.spacing.xl} 0;
        `;
      default:
        return `
          padding: ${theme.spacing.md} 0;
        `;
    }
  }}

  /* ✅ Background image handling */
  background: ${({ $bgImage }) =>
    $bgImage ? `url(${$bgImage}) center/cover no-repeat` : "transparent"};

  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;

  /* ✅ Dynamic overlay */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ $overlay }) =>
      $overlay
        ? $overlay
        : `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))`};
    z-index: 1;
  }

  /* ✅ Children layering */
  > * {
    position: relative;
    z-index: 2;
  }

  /* 🌍 Responsive adjustments */
  @media (max-width: 768px) {
    text-align: left;
    padding: ${({ theme }) => theme.spacing.md};
  }
`;
