import styled from 'styled-components';

export const StyledEventDetails = styled.section`
  background-color: ${({ theme }) => theme.colors.bg1};
  padding: 2rem;
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileBreakpoint}) {
    padding: 1rem;
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
`;

export const StyledTeamSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileBreakpoint}) {
    flex-direction: column;
    padding: 0;
    gap: 2rem;
  }
`;

export const StyledEventTitle = styled.div`
  text-align: center;
  & > h1 {
    margin: 1rem 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileBreakpoint}) {
    margin-top: 3rem;
  }
`;
