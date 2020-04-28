import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #33bfcb;
  padding: 16px 128px;

  .header-logo {
    display: flex;
    align-items: center;

    > img {
      height: 32px;
    }

    > strong {
      margin-left: 5px;
      color: #fff;
      font-size: 20px;
    }
  }

  .header-cart {
    display: flex;
    align-items: center;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: right;
      margin-right: 10px;
    }

    > div strong {
      color: #b6edf2;
    }

    > div span {
      font-size: 12px;
      color: #fff;

      > strong {
        color: #fff;
      }
    }
  } 
`;
      
