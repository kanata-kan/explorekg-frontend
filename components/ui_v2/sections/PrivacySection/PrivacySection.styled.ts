import styled from "styled-components";

export const Section = styled.section`
  padding: 4rem 1.5rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Inner = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Block = styled.div`
  margin-bottom: 2.5rem;
`;

export const Divider = styled.hr`
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.accent};
  margin: 2rem 0;
`;
