import styled, { DefaultTheme } from 'styled-components';

export const StyledAccordion = styled.li`
  cursor: pointer;
  user-select: none;
  padding: 0.5rem 0.6rem;
  font-size: 0.9rem;
  border-radius: 5px;
  transition: ease 0.2s;

  ${({ clicked, theme }: { clicked: boolean; theme: DefaultTheme }) => {
    return clicked && `background-color: ${theme.colors.bg1};`;
  }}

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg1};
  }
`;

export const StyledAccordionItems = styled.ul`
  user-select: none;
  list-style-type: none;
  font-size: 0.9rem;
  margin: 0.3rem 0;
  padding: 0;

  ${({ clicked }: { clicked: boolean }) => {
    return clicked ? `height: auto;` : `height: 0px; overflow: hidden;`;
  }}

  & > * {
    padding: 0.4rem 0;
    max-width: 150px;
    overflow: hidden;
    white-space: nowrap;
  }

  & > li {
    cursor: pointer;
    text-overflow: ellipsis;
    padding-left: 1.5rem;
    &:hover a {
      color: ${({ theme }) => theme.colors.primary} !important;
    }
  }

  & > li:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.bg2};
    margin-bottom: 10px;
  }

  & a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
`;

export const CategoryLoading = styled.div`
  background-color: ${({ theme }) => theme.colors.bg1};
  width: 8rem;
  height: 1.5rem;
  border-radius: 5px;
  display: block;
  margin-bottom: 1rem;

  @keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  & {
    -webkit-animation: flickerAnimation 1s infinite;
    -moz-animation: flickerAnimation 1s infinite;
    -o-animation: flickerAnimation 1s infinite;
    animation: flickerAnimation 1s infinite;
  }
`;
