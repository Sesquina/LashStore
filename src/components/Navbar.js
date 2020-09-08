import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      

        <Link to="/">
          <h2 className="navbar-brand">Enchanted Lashes</h2>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/products" className="nav-link">
              Lashes
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/howto" className="nav-link">
              How To
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
              Cart
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background-image: linear-gradient(460deg, rgba(72, 45, 45, 0.46) 0%, rgba(72, 45, 45, 0.46) 14.286%,rgba(102, 42, 45, 0.46) 14.286%, rgba(102, 42, 45, 0.46) 28.572%,rgba(131, 39, 44, 0.46) 28.572%, rgba(131, 39, 44, 0.46) 42.858%,rgba(161, 36, 44, 0.46) 42.858%, rgba(161, 36, 44, 0.46) 57.144%,rgba(191, 33, 43, 0.46) 57.144%, rgba(191, 33, 43, 0.46) 71.43%,rgba(220, 30, 43, 0.46) 71.43%, rgba(220, 30, 43, 0.46) 85.716%,rgba(250, 27, 42, 0.46) 85.716%, rgba(250, 27, 42, 0.46) 100.002%),linear-gradient(381deg, rgb(254, 36, 223) 0%, rgb(254, 36, 223) 14.286%,rgb(227, 44, 210) 14.286%, rgb(227, 44, 210) 28.572%,rgb(201, 52, 198) 28.572%, rgb(201, 52, 198) 42.858%,rgb(174, 60, 185) 42.858%, rgb(174, 60, 185) 57.144%,rgb(147, 67, 172) 57.144%, rgb(147, 67, 172) 71.43%,rgb(121, 75, 160) 71.43%, rgb(121, 75, 160) 85.716%,rgb(94, 83, 147) 85.716%, rgb(94, 83, 147) 100.002%);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default Navbar;
