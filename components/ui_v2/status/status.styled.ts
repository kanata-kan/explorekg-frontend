import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  gap: 1.5rem;
`;

export const IconWrapper = styled.div`
  font-size: 3rem;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;
