import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

import { Container } from './styles';

export default function Home() {
  const[books, setBooks] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, book) => {
      sumAmount[book.id] = book.amount;

      return sumAmount;
    }, {})
    );

  const dispatch = useDispatch(); 

  useEffect(() => {
    async function loadBooks() {
      const response = await api.get('/books');

      setBooks(response.data);
    }

    loadBooks();
  }, []);

  function handleAddBook(book) {
    dispatch(CartActions.addToCart(book));
  }

  return (
    <Container>
      <div>
      <ul>
        {books.map(book => (
          <li key={book.id}>
          <img src={book.image} alt={book.title} />
          <strong>{book.title}</strong>
          <span>R$ {book.price}</span>
          <button type="button" onClick={() => handleAddBook(book)}> 
            <div>
             <FiShoppingCart size={16} color="#fff" />{''}
             {amount[book.id] || 0}
             <span>Adicionar</span>
            </div>
          </button>
        </li>
        ))}
        
      </ul>
      </div>
    </Container>
  );
}
      

        
        

