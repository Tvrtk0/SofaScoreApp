import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { SportContext } from '../context/sportContext';
import { Sports } from '../model/Sports';
import ThemeIcon from './ThemeIcon';

const StyledNavbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  & > ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & a {
    color: ${({ theme }) => theme.colors.text} !important;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primary} !important;
    }
  }

  .active {
    & a {
      color: ${({ theme }) => theme.colors.primary} !important;
      text-decoration: underline;
    }
  }
`;

export default function Navbar() {
  const router = useRouter();
  const sportContext = useContext(SportContext);

  const changeSport = (sport: string) => {
    sportContext?.setSport(sport as Sports);
  };

  return (
    <StyledNavbar>
      <ul>
        <li className={router.pathname == '/favorites' ? 'active' : ''}>
          <Link href={'/favorites'}>Favorites</Link>
        </li>
        <li className={router.pathname == '/' && sportContext?.sport === 'football' ? 'active' : ''}>
          <Link href={'/'}>
            <a onClick={() => changeSport('football')}>Football</a>
          </Link>
        </li>
        <li className={router.pathname == '/' && sportContext?.sport === 'basketball' ? 'active' : ''}>
          <Link href={'/'}>
            <a onClick={() => changeSport('basketball')}>Basketball</a>
          </Link>
        </li>
        <li className={router.pathname == '/' && sportContext?.sport === 'tennis' ? 'active' : ''}>
          <Link href={'/'}>
            <a onClick={() => changeSport('tennis')}>Tennis</a>
          </Link>
        </li>
        <li>
          <ThemeIcon />
        </li>
      </ul>
    </StyledNavbar>
  );
}
