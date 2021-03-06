import React from 'react';
import styled from 'styled-components';
import Meta from './Meta';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const StyledLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.breakpoint2}) {
    margin-top: 0rem;
  }
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Meta />
      <Navbar />
      <StyledLayout>{children}</StyledLayout>
    </>
  );
}
