"use client";

import styled from "styled-components";

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};

  .thumb {
    position: relative;
    aspect-ratio: 1/1;
    border-radius: ${({ theme }) => theme.radii.md};
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
    }
  }
`;
