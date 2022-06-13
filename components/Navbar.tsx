import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { SportContext } from '../context/sportContext';
import { Sports } from '../model/Sports';
import ThemeIcon from './ThemeIcon';

const StyledNavbar = styled.nav`
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 100;
  padding: 0.6rem 1rem;
  display: flex;
  position: sticky;
  box-shadow: 0 7px 5px ${({ theme }) => theme.colors.background};
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bg2};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileBreakpoint}) {
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: none;
    height: auto;
    flex-direction: column;
    align-items: center;
    & > ul {
      ${({ isMenuClicked }: { isMenuClicked: boolean }) => (isMenuClicked ? `` : `display: none !important;`)};
      flex-direction: column;
      gap: 2rem !important;
      flex-wrap: nowrap !important;
    }
  }

  & > ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  & a {
    color: ${({ theme }) => theme.colors.text} !important;
    text-decoration: none;
    padding: 1rem;

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

const StyledMenu = styled.div`
  & > img {
    cursor: pointer;
  }
  display: none;
  align-self: flex-end;
  @media (max-width: 600px) {
    display: inline-block;
  }
`;

export default function Navbar() {
  const router = useRouter();
  const sportContext = useContext(SportContext);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const changeSport = (sport: string) => {
    sportContext?.setSport(sport as Sports);
  };
  const toggleMenu = (isMenuClicked: boolean) => {
    setIsMenuClicked(() => (isMenuClicked = !isMenuClicked));
  };

  return (
    <StyledNavbar isMenuClicked={isMenuClicked}>
      <StyledMenu>
        <img
          src={`${sportContext?.isDarkTheme ? '/img/menuDarkTheme.svg' : '/img/menuLightTheme.svg'}`}
          alt="Menu icon"
          onClick={() => toggleMenu(isMenuClicked)}
        />
      </StyledMenu>
      <ul onClick={() => toggleMenu(isMenuClicked)}>
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
