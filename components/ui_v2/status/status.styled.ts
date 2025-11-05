import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const IconWrapper = styled.div`
  font-size: 3rem;
  opacity: ${({ theme }) => theme.opacity[90]};
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.text.onPrimary};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semiBold};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ theme }) => theme.shadows.button};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.hover};
    box-shadow: ${({ theme }) => theme.shadows.buttonHover};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
