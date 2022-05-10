import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
  font-weight: bold;
`;

export const LinkStyled = styled(Link)`
  margin: 0 10px;
  padding: 3px 15px;
  position: relative;
  text-decoration: none;
  color: #085078;
  &.active {
    color: orange;
    &:after {
      content: "";
      position: absolute;
      display: block;
      height: 2px;
      left: 0%;
      bottom: 0;
      background-color: purple;
      animation: slide-in 0.3s ease-in forwards;
      @keyframes slide-in {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0%;
          width: 100%;
        }
      }
    }
  }
`;
