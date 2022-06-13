import styled from 'styled-components';

export const StyledEventContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledFavoriteEvents = styled.section`
  & > section {
    background-color: ${({ theme }) => theme.colors.bg2};
  }
  margin-top: 2rem;
  top: 80px;
  @media (max-width: ${({ theme }) => theme.breakpoints.breakpoint2}) {
    display: none;
  }
`;

export const StyledEventDetails = styled.section`
  background-color: ${({ theme }) => theme.colors.bg1};
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.breakpoint2}) {
    & > section {
      flex-grow: 1;
    }
    padding: 2rem 0;
    gap: 3rem 0;
  }
`;

export const StyledEventInfo = styled.div`
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.colors.bg2};
  padding: 1rem;
  border-radius: 10px;

  & > div {
    border-bottom: 2px solid ${({ theme }) => theme.colors.background};
    margin-bottom: 2rem;
  }

  & > div:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  & > h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  & div > h4 {
    text-align: center;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0.4rem;
    border-radius: 10px;
  }

  & div > div {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 1rem 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.breakpoint3}) {
    background-color: ${({ theme }) => theme.colors.bg1};
    padding: 0;
  }
`;

export const StyledEventDetailsHeader = styled.header`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textSecondary};
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  & h3 {
    font-weight: normal;
    & > a {
      cursor: pointer;
    }
    & a:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const StyledTeam = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.breakpoint2}) {
    & > img {
      width: 70px;
    }
  }
`;

export const StyledTeamSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.breakpoint2}) {
    padding: 0;
    gap: 2rem;
  }
`;

export const StyledEventTitle = styled.div`
  text-align: center;
  & > h1 {
    margin: 1rem 0;
  }
`;
