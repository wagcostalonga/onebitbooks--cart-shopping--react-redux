import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiShoppingBag } from 'react-icons/fi';

import { Container } from './styles';
import logo from '../../assets/book.png';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length); 

  return (
    <Container>
      <Link to="/" className="header-logo">
        <img src={logo} alt="OneBitBooks"/>
        <strong>OneBitBooks</strong>
      </Link>
      <Link to="/cart" className="header-cart">
        <div>
          <strong>Sacola</strong>
          <span>
            <strong>{cartSize}</strong> livros
          </span>
        </div>
        <FiShoppingBag size={30} color="#fff" />
      </Link>
    </Container>
  );
}