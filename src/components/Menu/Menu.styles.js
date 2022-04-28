import styled from 'styled-components';

export const Nav = styled.ul`
  display: none;
  list-style-type: none;
  padding: 0;
  font-fa,ily: "Nunito Regular", Arial, Helvetica, sans-serif;
  font-size: 1.2rem;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.textDark}
  }
  li {
    display: inline-block;
    margin-right: 20pc;
    trasition: opacy 0.5s ease;
    cursor: pointer;
    .active {
      font-wight: 800;
    }
    :last-child {
      margin-right: 10px;
    }
    :hover {
      opacity: 0.7;
    }
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`