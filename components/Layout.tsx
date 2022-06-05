import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <StyledLayout>{children}</StyledLayout>
    </>
  );
}
