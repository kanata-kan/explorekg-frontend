// components/ui_v2/foundation/DetailsBase.styled.ts
import styled from "styled-components";

/* 🧱 Base Wrapper */
export const WrapperBase = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding-block: ${({ theme }) => theme.layout.section.spacing.default.lg};
`;

/* 🧩 Base Info Section */
export const InfoSectionBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

/* 🟠 Base CTA Section */
export const CTASectionBase = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  button {
    font-weight: 600;
  }
`;

/* 🔙 Base Back Link */
export const BackLinkBase = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};

  a {
    color: ${({ theme }) => theme.colors.text.muted};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
